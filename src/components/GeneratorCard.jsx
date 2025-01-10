import Design from "./Design"
import SettingBar from "./SettingBar"

function GeneratorCard() {
  return (
    <main className="grid items-center md:grid-cols-2 gap-5 grid-cols-1 h-full md:h-[450px]  w-full md:w-[80%] rounded-md">
       <Design/>
       <SettingBar/>
    </main>
  )
}

export default GeneratorCard
