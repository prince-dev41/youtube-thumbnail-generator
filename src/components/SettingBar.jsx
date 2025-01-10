
import { ChartNoAxesColumn, Clock, Moon, Sun, UserCircle2 } from "lucide-react"
import IconWithTooltip from "./IconWithTooltip"
import { useState } from "react"
import { formatSize } from "../functions/FormatedData";

function SettingBar() {
    // Les etats 
    const [progress, setProgress]= useState(30);
    const [statClicked, setStatCliked]=useState(false);
    const [channelClicked, setChannelCliked]=useState(false);
    const [durationClicked, setDurationCliked]=useState(false);
    const [isDark, setIsDark]= useState(false);
    const [size, setSize] = useState(3);
    const [isAdvance, setIsAdvance] = useState(false);
    const [rounding, setRounding] = useState(40);
    const [textSize, setTextSize] = useState(40);
    const [spacing, setSpacing] = useState(50);
    
    


    // Fonction pour update le progress
    const HandleChangeProgress = (e) =>{
        setProgress(e.target.value);
    }

    // Fonction pour les états de stat, duration et channel
    const HandleChangeStatClick = () =>{
        setStatCliked(!statClicked);
    }
    
    const HandleChangeChannelClick = () =>{
        setChannelCliked(!channelClicked);
    }
        
    const HandleChangeDurationClick = () =>{
        setDurationCliked(!durationClicked);
    }

     
    const HandleChangeThemeDesign = () =>{
        setIsDark(!isDark);
    }

    const HandleChangeSize = (e) =>{
        setSize(e.target.value);
    }

    const HandleChangeAdvance = () =>{
        setIsAdvance(!isAdvance);
    }

    
    const HandleChangeRounding = (e) =>{
        setRounding(e.target.value);
    }
    
    const HandleChangeTextSize = (e) =>{
        setTextSize(e.target.value);
    }

    const HandleChangeSpacing = (e) =>{
        setSpacing(e.target.value);
    }
    
  return (
    <div className="flex flex-col md:h-[580px] md:w-[400px] rounded-xl bg-neutral-900 bg-opacity-70">
        <div className="w-full">
            <h1 className="bg-neutral-800 w-full rounded-xl rounded-b-none text-center p-3">Card settings</h1>
        </div>

        {/* Input pour le URL de la video YouTube */}
        <div className="w-full py-2 px-3">
            <input
                type="url"
                placeholder="Paste YouTube video url here..."
                className="input p-2 w-full h-15  border-[1px] border-neutral-800 bg-neutral-700 focus:border-neutral-500"
            />
        </div>

        {/* Le premier divider */}
        <div className="divider divider-neutral my-0"></div>

        {/* les options d'affichages et autres */}
        <div className="flex items-center justify-between w-full py-2 px-3">
            <h3>Display</h3>
            <div className="flex items-center gap-3">
                <div onClick={HandleChangeStatClick} className={`${statClicked ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={ChartNoAxesColumn} tooltipText="Statistics"/></div>
                <div onClick={HandleChangeChannelClick}  className={`${channelClicked ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={UserCircle2} tooltipText="Channel"/></div>
                <div onClick={HandleChangeDurationClick} className={`${durationClicked ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={Clock} tooltipText="Duration"/></div>
            </div>
        </div>

        {/* Le deuxième divider */}
        <div className="divider divider-neutral my-0"></div>

        {/* le progressbar */}
        <div className="flex items-center justify-between w-full py-2 px-3">
            <div className="flex items-center gap-3">
                <h3>Progress</h3>
                {progress>0 && 
                <div className="bg-neutral-900 rounded-sm text-[10px] text-center justify-center flex items-center p-[3px] h-5 w-6">{progress}%</div>
                }
            </div>
            <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={HandleChangeProgress} type="range" min={0} max="100" value={progress} className="range w-full range-xs h-[15px] range-warning" /></div>
        </div>

        {/* Le deuxième divider */}
        <div className="divider divider-neutral my-0"></div>

        {/* les options d'affichages et autres */}
        <div className="flex items-center justify-between w-full py-2 px-3">
            <h3>Theme</h3>
            <div className="flex items-center gap-3">
                <div onClick={HandleChangeThemeDesign} className={`${isDark ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={Sun} tooltipText="Light"/></div>
                <div onClick={HandleChangeThemeDesign}  className={`${!isDark ? "bg-neutral-900" : "bg-neutral-700"} hover:scale-90 flex items-center cursor-pointer rounded-md p-[3px]`}><IconWithTooltip Icon={Moon} tooltipText="Dark"/></div>
            </div>
        </div>
        
        {/* Le troisième divider */}
        <div className="divider divider-neutral my-0"></div>

        {/* le size rangebar */}
        <div className="flex items-center justify-between w-full py-2 px-3">
            <div className="flex items-center gap-3">
                <h3>Size</h3>
                {size>0 && 
                <div className="bg-neutral-900 justify-center rounded-sm text-[10px] text-center flex items-center p-[3px] h-5 w-6">x{Math.round(size/20)}</div>
                }
            </div>
            <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={HandleChangeSize} type="range" min={0} max="100" value={size} className="range w-full range-xs h-[15px] range-warning" /></div>
        </div>

        {/* Le quatrième divider */}
        <div className="divider divider-neutral my-0"></div>

        {/* Advanced configuration */}
        <div className="flex flex-col gap-5 items-center w-full py-2 px-3">
            <div className="flex items-center w-full justify-between">
                <h3>Advance configuration</h3>
                <input value={isAdvance} onChange={HandleChangeAdvance} type="checkbox" className="toggle toggle-warning focus:border-none" />
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
                                        {size>0 && 
                                        <div className="bg-neutral-900 justify-center rounded-sm text-[10px] text-center flex items-center p-[3px] h-5 w-6">x{Math.round(rounding/20)}</div>
                                        }
                                    </div>
                                    <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={HandleChangeRounding } type="range" min={0} max="100" value={rounding} className="range w-full range-xs h-[15px] range-warning" /></div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center justify-between w-full py-2">
                                    <div className="flex items-center gap-3 text-sm">
                                        <h3 className="flex items-center gap-2">
                                            <div className="bg-neutral-500 rounded-full w-1 h-1"></div>
                                            Text size
                                        </h3>
                                        {textSize>0 && 
                                        <div className="bg-neutral-900 rounded-sm text-[10px] text-center justify-center flex items-center p-[3px] h-5 w-6">{formatSize(textSize)}</div>
                                        }
                                    </div>
                                    <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={HandleChangeTextSize} type="range" min={20} max="100" value={textSize} className="range w-full range-xs h-[15px] range-warning" /></div>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center justify-between w-full py-2">
                                    <div className="flex items-center gap-3 text-sm">
                                        <h3 className="flex items-center gap-2">
                                            <div className="bg-neutral-500 rounded-full w-1 h-1"></div>
                                            Spacing
                                        </h3>
                                        {progress>0 && 
                                        <div className="bg-neutral-900 rounded-sm text-[10px] text-center justify-center flex items-center p-[3px] h-5 w-6">x{(spacing/50).toFixed(2)}</div>
                                        }
                                    </div>
                                    <div className="w-[60%] flex items-center h-[15px] bg-neutral-600 rounded-md"><input onChange={HandleChangeSpacing} type="range" min={50} max="100" value={spacing} className="range w-full range-xs h-[15px] range-warning" /></div>
                                </div>
                            </li>
                        </ul>
                    </div>
            }
        </div>

        {/* Le quatrième divider */}
        <div className="divider divider-neutral my-0"></div>

        <div className="flex items-center justify-between w-full py-2 px-3">
            <button className="border-[1px] hover:scale-90 border-neutral-800 bg-neutral-800 p-2 rounded-md w-[100px] flex items-center justify-center ">Copy</button>
            <button className="border-[1px] hover:scale-90 bg-neutral-800 border-neutral-800 p-2 rounded-md flex items-center justify-center ">Download</button>
        </div>
        
        {/* Le quatrième divider */}
        <div className="divider divider-neutral my-0"></div>

        {/* Copyright */}
        <div>
            <h1 className="text-sm text-center p-3">
                Project by <a className="text-amber-500" target="blank" href="https://www.linkedin.com/in/prince-ekpinse-developpement-front-end/">@Prince</a>, source code available on <a  className="text-amber-500" target="blank" href="https://github.com/prince-dev41/yt-thumbnail-generartor.git">Github</a>.
            </h1>
        </div>
    </div>
  )
}

export default SettingBar
