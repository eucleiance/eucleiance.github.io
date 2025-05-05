import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

interface ScrambleProps {
  scramArray: string[]
}

const Scramble = ({ scramArray }: ScrambleProps) => {
  const textRef = useRef<HTMLAnchorElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    // Set initial text manually, outside of React rendering
    if (textRef.current) {
      textRef.current.textContent = scramArray[0]
    }
  }, [scramArray])

  const handleClick = () => {
    const nextIndex = (index + 1) % scramArray.length

    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: 6,
        scrambleText: {
          text: scramArray[nextIndex],
          chars: "αβγδεζηθλμνξπρστυφχψωΔΣΩ  ",
          revealDelay: 1
        },
        ease: "power1.in"
      })
    }

    setIndex(nextIndex)
  }

  return (
    <div>
      <a
        onClick={handleClick}
        ref={textRef}
        className="cursor-pointer inline-block"
      />
    </div>
  )
}

export default Scramble
