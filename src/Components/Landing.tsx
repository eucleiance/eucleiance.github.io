import { useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

const poemLines = [
  "Hello Stranger!",
  "Your hair is winter fire, January embers, My heart burns there too",
  "Can it be that I have not lived? Have I dreamed my life, or was that real which I have lived?",
  "Bye Stranger."
]

const Landing = () => {
  const textRef = useRef(null)
  const [index, setIndex] = useState(0)

  const handleClick = () => {
    const nextIndex = (index + 1) % poemLines.length
    gsap.to(textRef.current, {
      duration: 6,
      scrambleText: {
        text: poemLines[nextIndex],
        chars: "αβγδεζηθλμνξπρστυφχψωΔΣΩ  ",
        revealDelay: 1
      },
      ease: "power1.in"
    })
    setIndex(nextIndex)
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950 ">
      <div className="text-center font-light text-xl font-mono text-rose-50 mx-7 ">
        <a
          onClick={handleClick}
          ref={textRef}
          className="cursor-pointer inline-block"
        >
          {poemLines[0]}
        </a>
      </div>
    </div>
  )
}

export default Landing
