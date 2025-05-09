import Scramble from "./Scramble"
import { useScramble } from "../Hooks/useScramble"

const Projects = () => {
  const scrambleArray = [
    "Project A",
    "Project B",
    "Project C",
  ]

  useScramble(0.2);


  return (
    <div id="projects" className="flex justify-center items-center min-h-screen bg-gray-950">
      <div className=" text-rose-50 text-xl font-xanh-regular mx-7">
        <Scramble
          scramArr={scrambleArray}
          duration={1}
          revealDelay={0.1}
          className={"text-rose-50 customcursor"}
        />
        {/* <div scramble-to="Haus" className="customcursor text-center">Home</div>
        <div scramble-to="Projekts" className="customcursor text-center">Projects</div> */}
      </div>
    </div>
  )
}

export default Projects
