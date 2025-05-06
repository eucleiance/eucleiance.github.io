import { useRef, useState, useEffect } from "react"
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

interface ScrambledTextCyclerProps {
  scramArr: string[]
  className?: string
  duration?: number
  revealDelay?: number
}

const Scramble = ({ scramArr, className = "", duration = 6, revealDelay = 1 }: ScrambledTextCyclerProps) => {
  const textRef = useRef<HTMLSpanElement>(null)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (textRef.current && scramArr.length > 0) {
      gsap.set(textRef.current, {
        scrambleText: {
          text: scramArr[0],
          chars: "αβγδεζηθλμνξπρστυφχψωΔΣΩ  ",
          revealDelay
        }
      })
    }
  }, [scramArr, revealDelay])

  const handleClick = () => {
    const nextIndex = (index + 1) % scramArr.length
    gsap.to(textRef.current, {
      duration,
      scrambleText: {
        text: scramArr[nextIndex],
        chars: "αβγδεζηθλμνξπρστυφχψωΔΣΩ  ",
        revealDelay
      },
      ease: "power1.in"
    })
    setIndex(nextIndex)
  }

  return (
    <span
      ref={textRef}
      onClick={handleClick}
      className={`${className}`}
    >
    {scramArr[0]}</span>
  )
}

export default Scramble
