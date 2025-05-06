import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

interface ScrambleSelfProps {
  text: string
  duration?: number
  classNames: string
}

const ScrambleSelf = ({ text, duration = 1, classNames }: ScrambleSelfProps) => {
  const textRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (textRef.current) {
      textRef.current.textContent = text
    }
  }, [text])

  const scrambleSelf = () => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        duration: duration,
        scrambleText: {
          text: text,
          chars: "αβγδεζηθλμνξπρστυφχψωΔΣΩ  ",
          revealDelay: duration,
        },
        ease: "power1.out",
      })
    }
  }

  return (
    <span
      ref={textRef}
      onMouseEnter={scrambleSelf}
      className={classNames}
    />
  )
}

export default ScrambleSelf
