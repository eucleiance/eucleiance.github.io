// import Scramble from "./Scramble"
import { useScramble } from "../Hooks/useScramble"

const About = () => {
  // const scrambleArray = [
  //   "Über mich",
  //   "About me",
  // ]

  useScramble(0.1);


  return (
    <div id="about" className="flex justify-center items-center min-h-screen bg-rose-50">
      <div className=" text-gray-950 text-xl md:text-4xl font-canela-thin mx-7 text-center leading-14">
        <div scramble-to="Hallo!">Hello! </div>
        <div scramble-to="Ich bin Rosh">I'm Rosh</div>

        {/* <Scramble
          scramArr={scrambleArray}
          duration={2}
          revealDelay={0.2}
          className={"text-gray-950 customcursor"}
        /> */}
        {/* <div scramble-to="Haus" className="customcursor text-center">Home</div>
        <div scramble-to="Projekts" className="customcursor text-center">Projects</div> */}
      </div>
    </div>
  )
}

export default About
