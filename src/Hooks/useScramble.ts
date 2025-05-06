import { useEffect } from "react"
import { gsap } from "gsap"
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin"

gsap.registerPlugin(ScrambleTextPlugin)

export const useScramble = (duration = 0.1) => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[scramble-to]")

    elements.forEach((el) => {
      const original = el.textContent || ""
      const target = el.getAttribute("scramble-to") || original

      const handleMouseEnter = () => {
        gsap.to(el, {
          duration,
          scrambleText: {
            text: target,
            // chars: "αβγδεζηθλμνξπρστυφχψωΔΣΩ",
            // chars: "■□▲▼◆◇●○",
            // chars: "αενπστυω",
            chars: "*.+",
            revealDelay: duration,
          },
          ease: "power1.out",
        })
      }

      const handleMouseLeave = () => {
        gsap.to(el, {
          duration,
          scrambleText: {
            text: original,
            // chars: "αβγδεζηθλμνξπρστυφχψωΔΣΩ",
            // chars: "■□▲▼◆◇●○",
            // chars: "*_",
            chars: "*.+",
            revealDelay: duration,
          },
          ease: "power1.out",
        })
      }

      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)

      // Cleanup
      return () => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      }
    })
  }, [duration])
}
