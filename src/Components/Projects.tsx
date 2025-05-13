// import Scramble from "./Scramble"
import { useScramble } from "../Hooks/useScramble"

const Projects = () => {
  const projects = [
    { name: "ICT Everything", deets: "TradingView Indicator", url: "https://www.tradingview.com/script/T6KkMfK6-ICT-Everything/", scrambleText: "Automated Forex & Futures Chart Elements" },
    { name: "Huesmith", deets: "VSCode Extension", url: "https://open-vsx.org/extension/Eucleiance/huesmith" , scrambleText: "One-Click Theme Override for VSCod(e/ium)"},
    { name: "Average Range", deets: "TradingView Indicator", url: "https://www.tradingview.com/script/d1bNjbFy-Average-Range-coldbrewrosh/", scrambleText: "Automated Range Calculator for Forex" },
    { name: "ChronoNote", deets: "Note App", url: "https://chrononote.vercel.app/" , scrambleText: "Note App with Timeline Playback"},
  ]

  useScramble(0.1)

  return (
    <div id="projects" className="flex justify-center items-center min-h-screen bg-gray-950">
      <ul className="text-rose-50 text-lg md:text-4xl lg:text-6xl font-canela-thin w-full max-w-7xl px-7">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-b border-rose-50 pointer-events-none py-3 md:py-6"
          >
            <a
              href={project.url}
              className="flex justify-between pointer-events-auto"
              target="_blank" rel="noopener noreferrer"
            >
              <span scramble-to={project.scrambleText} className="w-full">{project.name}</span>
              {/* <span className="text-xs md:text-lg self-end tracking-wider">{project.deets}</span> */}
            </a>
          </div>
        ))}
      </ul>

      {/* <Scramble
          scramArr={scrambleArray}
          duration={1}
          revealDelay={0.1}
          className="text-rose-50 customcursor"
        /> */}
      {/* <div scramble-to="Haus" className="customcursor text-center">Home</div>
        <div scramble-to="Projekts" className="customcursor text-center">Projects</div> */}
    </div>
  )
}

export default Projects