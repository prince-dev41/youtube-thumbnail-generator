

function Design(){
    return (
        <div className="flex h-[380px] p-5 md:h-[580px] items-center rounded-xl thumbnail-container justify-center border border-white">
            <div className="flex flex-col gap-3 w-[400px] bg-white rounded-[45px] h-[315px] p-5">
                <div className="flex flex-col relative overflow-hidden rounded-[25px]">
                    <img src="/images/maxresdefault.jpg" alt="Image Design" className="h-full w-full" />

                    <div className="flex absolute bottom-0 items-center w-full bg-neutral-500">
                        <div className="w-[50%] bg-red-600 h-1"></div>
                    </div>
                    <div className="bg-neutral-950 flex items-center justify-center text-[10px] bg-opacity-35 absolute right-4 bottom-3 rounded-md text-white w-12 h-7">23:90</div>
                </div>

                {/* Les stats et le profil affiché */}
                <div className="flex gap-3 w-full">
                    <img src="/images/channel.png" alt="Channel Image" className="w-10 h-10 rounded-full" />
                    <div className="flex-col flex w-[290px] gap-2">
                        <h1 className="text-black w-[250px] font-bold leading-tight text-sm">Pénuries de médicaments : les labos font-ils la loi ?</h1>
                        <h2 className="text-neutral-700 w-[280px] leading-none">Cash Investigation - France Télévisions</h2>
                        <h3 className="text-neutral-700 text-sm">230 vues . il y a 3 heures</h3>
                    </div>
                </div>
            </div>


       </div>
    )
}

export default Design;