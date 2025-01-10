import GeneratorCard from "../components/GeneratorCard"
import Header from "../components/Header"


function Home() {
  return (
    <section className="flex flex-col p-3 md:p-10 space-y-10 md:h-[850px] text-gray-300 items-center bg-gradient-to-t from-zinc-900 via-gray-700 to-zinc-900">
        <Header/>
        <GeneratorCard/>
    </section>
  )
}

export default Home
