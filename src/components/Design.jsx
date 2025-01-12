import { useEffect } from 'react';
import useSettingBarStore from '../store/useSettingBar';
import useThumbnailDataStore from '../store/useThumbnailData';
import { getYouTubeVideoId } from '../functions/GetYouTubeVideoId.jsx';
import { convertImageToLocal } from '../functions/ConvertImage.jsx';
import { formatDuration, formatDate, formatViews } from "../functions/formatting";

function Design() {
    const {
        progress,
        channelClicked,
        durationClicked,
        statClicked,
        isDark,
        isAdvance,
        rounding,
        textSize,
        spacing,
        url,
    } = useSettingBarStore();

    const {
        duration,
        date,
        channel,
        views,
        title,
        thumbnailImage,
        authorPhoto,
    } = useThumbnailDataStore();

    const {
        setVideoId,
        setDuration,
        setDate,
        setChannel,
        setViews,
        setTitle,
        setThumbnailImage,
        setAuthorPhoto,
    } = useThumbnailDataStore();

    const apiKey = 'AIzaSyCvF9egSEPGIByHqf19e-27fu0t050ZRrs'; // Remplace par ta clé API YouTube

    const fetchVideoDetails = async (videoId) => {
        const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${videoId}&key=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const video = data.items[0];
            const channelId = video.snippet.channelId;
            const channelDetails = await fetchChannelDetails(channelId, apiKey);

            return {
                duration: formatDuration(video.contentDetails.duration),
                date: formatDate(video.snippet.publishedAt),
                channel: video.snippet.channelTitle,
                views: formatViews(video.statistics.viewCount),
                title: video.snippet.title,
                thumbnailImage: video.snippet.thumbnails.medium.url,
                authorPhoto: channelDetails.channelThumbnail, // Utilise l'image de la chaîne
            };
        } catch (error) {
            console.error('Error fetching video details:', error);
            return null;
        }
    };

    const fetchChannelDetails = async (channelId, apiKey) => {
        const apiUrl = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channelId}&key=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            const channel = data.items[0];
            return {
                channelTitle: channel.snippet.title,
                channelThumbnail: channel.snippet.thumbnails.default.url,
            };
        } catch (error) {
            console.error('Error fetching channel details:', error);
            return null;
        }
    };

    const handleFetchVideoDetails = async () => {
        const videoId = getYouTubeVideoId(url);
        if (videoId) {
            const videoDetails = await fetchVideoDetails(videoId);
            if (videoDetails) {
                setVideoId(videoId);
                setDuration(videoDetails.duration);
                setDate(videoDetails.date);
                setChannel(videoDetails.channel);
                setViews(videoDetails.views);
                setTitle(videoDetails.title);
                setThumbnailImage(videoDetails.thumbnailImage);
                setAuthorPhoto(videoDetails.authorPhoto);
            }
        }
    };

    useEffect(() => {
        if (url) {
            handleFetchVideoDetails();
        }
    }, [url]);

    // // Exemple de correction des couleurs avant html2canvas
    // const elements = document.querySelectorAll('*'); // Sélectionne tous les éléments
    // elements.forEach((el) => {
    //     const style = getComputedStyle(el);
    //     if (style.backgroundColor.includes('oklch')) {
    //         console.warn('Couleur oklch détectée :', style.backgroundColor);
    //         el.style.backgroundColor = 'rgba(128, 128, 128, 0.5)'; // Remplace par une valeur par défaut
    //     }
    // });

    // // Ensuite, lance html2canvas
    // html2canvas(document.body).then(canvas => {
    //     document.body.appendChild(canvas);
    // });

    return (
        <div className="flex h-[380px] w-full p-5 md:h-[580px] items-center rounded-xl thumbnail-container border border-white">
            <div id="thumbnail" style={{ backgroundColor: isDark ? "#000" : "", borderRadius: isAdvance ? rounding / 1.25 + "px" : "", padding: isAdvance ? spacing / 2.95 + "px" : "14px" }} className="flex flex-col gap-3 w-full md:w-[400px] bg-white rounded-[45px]">
                <div style={{  borderRadius: isAdvance ? `${rounding / 1.35}px` : "", backgroundImage: `url(${thumbnailImage})` }} 
                     className="flex flex-col relative overflow-hidden rounded-[25px]">
                    <img src={thumbnailImage} alt="Image Design" className="h-full w-full" />
                    <div className="flex absolute bottom-0 items-center w-full bg-neutral-500">
                        <div className="bg-red-600 h-1" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div style={{ display: durationClicked ? "none" : "" }} className="bg-neutral-950 flex items-center justify-center text-[10px] bg-opacity-35 font-bold absolute right-4 bottom-3 rounded-md text-white w-12 h-7">{duration}</div>
                </div>

                {/* Les stats et le profil affiché */}
                <div className="flex gap-3 w-full">
                    <img style={{ display: channelClicked ? "none" : "" }} src={authorPhoto} alt="Channel Image" className="w-12 h-12 rounded-full" />
                    <div className="flex-col flex gap-2">
                        <h1 style={{ color: isDark ? "#FFF" : "", fontSize: isAdvance ? textSize / 4 + "px" : "" }} className="text-black font-bold leading-tight">{title}</h1>
                        <h2 style={{ color: isDark ? "#b1bdb2" : "", display: statClicked ? "none" : "", fontSize: isAdvance ? textSize / 4.5 + "px" : "12px" }} className="text-neutral-700 leading-tight text-[10px]">{channel}</h2>
                        <h3 style={{ color: isDark ? "#b1bdb2" : "", display: statClicked ? "none" : "", fontSize: isAdvance ? textSize / 4.5 + "px" : "10px" }} className="text-neutral-700 text-[10px]">{views} vues . {date}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design;
