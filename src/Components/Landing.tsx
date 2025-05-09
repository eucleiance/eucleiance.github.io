import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
import Scramble from "./Scramble"

gsap.registerPlugin(ScrambleTextPlugin)

const poemLines = [
  "Hello Stranger!",
  "My portfolio is currently under development",
  "If you like it so far",
  "Hire me?",
  "Please? :)",
  "Bye Stranger."
]

const Landing = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background video */}
      {/* <video
        className="absolute top-0 left-0 w-full h-full object-cover md:object-none z-0 hidden md:block"
        src="/videos/showreel.mp4"
        autoPlay
        loop
        muted
        playsInline
      /> */}

      {/* Overlay content */}
      <div className="relative z-10 flex justify-center items-center min-h-screen bg-rose-50">
        <div className="text-center font-light text-xl font-mono text-gray-950 mx-7 ">
          <Scramble
            scramArr={poemLines}
            duration={2}
            revealDelay={0.1}
            className="text-gray-950 customcursor"
          />
        </div>
      </div>
    </div>
  )
}

export default Landing





// import { gsap } from "gsap"
// import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"
// import Scramble from "./Scramble"

// gsap.registerPlugin(ScrambleTextPlugin)

// const poemLines = [
//   "Hello Stranger!",
//   "Your hair is winter fire, January embers, My heart burns there too",
//   "Can it be that I have not lived? Have I dreamed my life, or was that real which I have lived?",
//   "Bye Stranger."
// ]

// const Landing = () => {

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-950 ">
//       <div className="text-center font-light text-xl font-mono text-rose-50 mx-7 ">
//         <Scramble
//         scramArr={poemLines}
//         duration={3}
//         revealDelay={0.1}
//         className="text-rose-50 customcursor"
//         />
//       </div>
//     </div>
//   )
// }

// export default Landing
