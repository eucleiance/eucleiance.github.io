import Scramble from "./Scramble"
import { useScramble } from "../Hooks/useScramble"

const About = () => {
  const scrambleArray = [
    "Über mich",
    "This is my part Nobody else speak..",
    "This is my part Nobodyy else speaak...",
    "https://youtu.be/6oHdAA3AqnE?t=209",
  ]

  useScramble(0.2);


  return (
    <div className="flex justify-center items-center min-h-screen bg-rose-50">
      <div className=" text-gray-950 text-xl font-xanh-regular mx-7">
        <Scramble
          scramArr={scrambleArray}
          duration={6}
          revealDelay={0.2}
          className={"text-gray-950 customcursor"}
        />
        {/* <div scramble-to="Haus" className="customcursor text-center">Home</div>
        <div scramble-to="Projekts" className="customcursor text-center">Projects</div> */}
      </div>
    </div>
  )
}

export default About