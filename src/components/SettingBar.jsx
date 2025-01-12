import { ChartNoAxesColumn, Clock, Moon, Sun, UserCircle2 } from "lucide-react";
import IconWithTooltip from "./IconWithTooltip";
import useSettingBarStore from '../store/useSettingBar';
import { formatSize } from "../functions/FormatedData";
import toast from 'react-hot-toast';
import { domToBlob, domToPng } from 'modern-screenshot';
import useThumbnailDataStore from "../store/useThumbnailData";

const simulateAsyncOperation = () => {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve("Données chargées !"), 2000);
    });
    toast.promise(
        promise,
        {
            loading: "Chargement...",
            success: "Données récupérées avec succès !",
            error: "Erreur lors du chargement des données.",
        },
        {
            style: {
                backgroundColor: "#fff",
                color: "#333",
                borderRadius: "20px",
                opacity: 0.1
            },
        }
    );
};

const fetchImageAsBlob = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const blob = await response.blob();
    return blob;
};

function SettingBar() {
    const {
        url,
        setUrl,
        progress,
        statClicked,
        channelClicked,
        durationClicked,
        isDark,
        size,
        isAdvance,
        rounding,
        textSize,
        spacing,
        setProgress,
        toggleStatClick,
        toggleChannelClick,
        toggleDurationClick,
        toggleTheme,
        setSize,
        toggleAdvance,
        setRounding,
        setTextSize,
        setSpacing,
        setIsCopying,
    } = useSettingBarStore();

    const {channel, title} = useThumbnailDataStore();

    const handleDownloadImage = async () => {
		const node = document.querySelector('#thumbnail');
		const dataUrl = await domToPng(node, {
			scale: 1 + (size/20 || 1),
			quality: 1,
		});
		const a = document.createElement('a');
		a.href = dataUrl;
		a.download = `ytb-${channel}-${title}.png`;
		a.click();
    };

    const handleChangeUrl = (e) => {
        setUrl(e.target.value);
        setIsCopying();
    }

    const handleChangeProgress = (e) => {
        setProgress(e.target.value);
    }

    const handleChangeStatClick = () => {
        toggleStatClick();
    }

    const handleChangeChannelClick = () => {
        toggleChannelClick();
    }

    const handleChangeDurationClick = () => {
        toggleDurationClick();
    }

    const handleChangeThemeDesign = () => {
        toggleTheme();
    }

    const handleChangeSize = (e) => {
        setSize(e.target.value);
    }

    const handleChangeAdvance = () => {
        toggleAdvance();
    }

    const handleChangeRounding = (e) => {
        setRounding(e.target.value);
    }

    const handleChangeTextSize = (e) => {
        setTextSize(e.target.value);
    }

    const handleChangeSpacing = (e) => {
        setSpacing(e.target.value);
    }

    return (
        <div className="flex flex-col md:h-[580px] md:w-[400px] rounded-xl bg-neutral-900 bg-opacity-70">
            <div className="w-full">
                <h1 className="bg-neutral-800 w-full rounded-xl rounded-b-none text-center p-3">Card settings</h1>
            </div>

            <div className="w-full py-2 px-3">
                <input
                    type="url"
                    value={url}
                    onChange={handleChangeUrl}
                    placeholder="Paste YouTube video url here..."
                    className="input p-2 w-full h-15  border-[1px] border-neutral-800 bg-neutral-700 focus:border-neutral-500"
                />
            </div>

            <div className="divider divider-neutral my-0"></div>

            <div className="flex items-center justify-between w-full py-2 px-3">
                <h3>Display</h3>
                <div className="flex items-center gap-3">
                    <div onClick={handleChangeStatClick} className={`${statClicked ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={ChartNoAxesColumn} tooltipText="Statistics" /></div>
                    <div onClick={handleChangeChannelClick} className={`${channelClicked ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={UserCircle2} tooltipText="Channel" /></div>
                    <div onClick={handleChangeDurationClick} className={`${durationClicked ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={Clock} tooltipText="Duration" /></div>
                </div>
            </div>

            <div className="divider divider-neutral my-0"></div>

            <div className="flex items-center justify-between w-full py-2 px-3">
                <div className="flex items-center gap-3">
                    <h3>Progress</h3>
                    {progress > 0 &&
                        <div className="bg-neutral-900 rounded-sm text-[10px] text-center justify-center flex items-center p-[3px] h-5 w-6">{progress}%</div>
                    }
                </div>
                <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={handleChangeProgress} type="range" min={0} max="100" value={progress} className="range w-full range-xs h-[15px] range-warning" /></div>
            </div>

            <div className="divider divider-neutral my-0"></div>

            <div className="flex items-center justify-between w-full py-2 px-3">
                <h3>Theme</h3>
                <div className="flex items-center gap-3">
                    <div onClick={handleChangeThemeDesign} className={`${isDark ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={Sun} tooltipText="Light" /></div>
                    <div onClick={handleChangeThemeDesign} className={`${!isDark ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={Moon} tooltipText="Dark" /></div>
                </div>
            </div>

            <div className="divider divider-neutral my-0"></div>

            <div className="flex items-center justify-between w-full py-2 px-3">
                <div className="flex items-center gap-3">
                    <h3>Size</h3>
                    {size > 0 &&
                        <div className="bg-neutral-900 justify-center rounded-sm text-[10px] text-center flex items-center p-[3px] h-5 w-6">x{Math.round(size / 20)}</div>
                    }
                </div>
                <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={handleChangeSize} type="range" min={0} max="100" value={size} className="range w-full range-xs h-[15px] range-warning" /></div>
            </div>

            <div className="divider divider-neutral my-0"></div>

            <div className="flex flex-col gap-5 items-center w-full py-2 px-3">
                <div className="flex items-center w-full justify-between">
                    <h3>Advance configuration</h3>
                    <input value={isAdvance} onChange={handleChangeAdvance} type="checkbox" className="toggle toggle-warning focus:border-none" />
                </div>

                {
                    isAdvance &&
                    <div className="flex pl-5 justify-center flex-col gap-2 w-full">
                        <ul>
                            <li>
                                <div className="flex items-center justify-between w-full py-2">
                                    <div className="flex items-center gap-3">
                                        <h3 className="flex items-center gap-2">
                                            <div className="bg-neutral-500 rounded-full w-1 h-1"></div>
                                            Rounding
                                        </h3>
                                        {rounding > 0 &&
                                            <div className="bg-neutral-900 justify-center rounded-sm text-[10px] text-center flex items-center p-[3px] h-5 w-6">x{Math.round(rounding / 20)}</div>
                                        }
                                    </div>
                                    <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={handleChangeRounding} type="range" min={0} max="100" value={rounding} className="range w-full range-xs h-[15px] range-warning" /></div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center justify-between w-full py-2">
                                    <div className="flex items-center gap-3 text-sm">
                                        <h3 className="flex items-center gap-2">
                                            <div className="bg-neutral-500 rounded-full w-1 h-1"></div>
                                            Text size
                                        </h3>
                                        {textSize > 0 &&
                                            <div className="bg-neutral-900 rounded-sm text-[10px] text-center justify-center flex items-center p-[3px] h-5 w-6">{formatSize(textSize)}</div>
                                        }
                                    </div>
                                    <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={handleChangeTextSize} type="range" min={40} max="100" value={textSize} className="range w-full range-xs h-[15px] range-warning" /></div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center justify-between w-full py-2">
                                    <div className="flex items-center gap-3 text-sm">
                                        <h3 className="flex items-center gap-2">
                                            <div className="bg-neutral-500 rounded-full w-1 h-1"></div>
                                            Spacing
                                        </h3>
                                        {spacing > 0 &&
                                            <div className="bg-neutral-900 rounded-sm text-[10px] text-center justify-center flex items-center p-[3px] h-5 w-6">x{(spacing / 50).toFixed(2)}</div>
                                        }
                                    </div>
                                    <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={handleChangeSpacing} type="range" min={0} max="100" value={spacing} className="range w-full range-xs h-[15px] range-warning" /></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                }
            </div>

            <div className="divider divider-neutral my-0"></div>

            <div className="flex items-center justify-between w-full py-2 px-3">
                <button onClick={simulateAsyncOperation} className="border-[1px] hover:scale-90 border-neutral-800 bg-neutral-800 p-2 rounded-md w-[100px] flex items-center justify-center ">Copy</button>
                <button onClick={handleDownloadImage} className="border-[1px] hover:scale-90 bg-neutral-800 border-neutral-800 p-2 rounded-md flex items-center justify-center ">Download</button>
            </div>

            <div className="divider divider-neutral my-0"></div>

            <div>
                <h1 className="text-sm text-center p-3">
                    Project by <a className="text-amber-500" target="blank" href="https://www.linkedin.com/in/prince-ekpinse-developpement-front-end/">@Prince</a>, source code available on <a className="text-amber-500" target="blank" href="https://github.com/prince-dev41/yt-thumbnail-generator.git">Github</a>.
                </h1>
            </div>
        </div>
    )
}

export default SettingBar;
