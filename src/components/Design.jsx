
import useSettingBarStore from '../store/useSettingBar';


function Design(){
    const{
        progress,
        channelClicked,
        durationClicked,
        statClicked,
        isDark,
        isAdvance,
        rounding,
        textSize,
        spacing,
    } = useSettingBarStore();
        
    return (
        <div className="flex h-[380px] w-full p-5 md:h-[580px] items-center rounded-xl thumbnail-container border border-white">
            <div style={{ backgroundColor: isDark ? "#000": "", borderRadius: isAdvance ? rounding/1.25 + "px" : "", padding: isAdvance ? spacing/2.95 + "px" : "14px"}} className="flex flex-col gap-3 w-full md:w-[400px] bg-white rounded-[45px]">
                <div style={{ borderRadius: isAdvance ? rounding/1.35 + "px" : ""}}  className="flex flex-col relative overflow-hidden rounded-[25px]">
                    <img src="/images/maxresdefault.jpg" alt="Image Design" className="h-full w-full" />

                    <div className="flex absolute bottom-0 items-center w-full bg-neutral-500">
                        <div className="bg-red-600 h-1" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div style={{display: durationClicked ? "none" : ""}} className="bg-neutral-950 flex items-center justify-center text-[10px] bg-opacity-35 absolute right-4 bottom-3 rounded-md text-white w-12 h-7">23:90</div>
                </div>

                {/* Les stats et le profil affiché */}
                <div className="flex gap-3 w-full">
                    <img style={{display: channelClicked ? "none" : ""}} src="/images/channel.png" alt="Channel Image" className="w-10 h-10 rounded-full" />
                    <div className="flex-col flex gap-2">
                        <h1  style={{ color: isDark ? "#FFF": "", fontSize: isAdvance ? textSize/4 + "px" : "" }} className="text-black font-bold leading-tight">Pénuries de médicaments : les labos font-ils la loi ?</h1>
                        <h2 style={{ color: isDark ? "#b1bdb2": "" , display: statClicked ? "none" : "", fontSize: isAdvance ? textSize/4.5 + "px" : "12px" }} className="text-neutral-700 leading-tight text-[10px]">Cash Investigation - France Télévisions</h2>
                        <h3 style={{ color: isDark ? "#b1bdb2": "", display: statClicked ? "none" : "", fontSize: isAdvance ? textSize/4.5 + "px" : "10px"}} className="text-neutral-700 text-[10px]">230 vues . il y a 3 heures</h3>
                    </div>
                </div>
            </div>


       </div>
    )
}

export default Design;
