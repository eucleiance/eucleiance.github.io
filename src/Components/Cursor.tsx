import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Cursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // move the dot with GSAP
    const onMouseMove = (e: MouseEvent) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.15,
        ease: "power2.out",
      });
    };

    // add/remove hover class when pointer enters/exits an <a> or <button>
    const onPointerOver = (e: PointerEvent) => {
      const tgt = e.target as HTMLElement;
      if (tgt.closest("a, button, .customcursor")) {
        cursorRef.current?.classList.add("cursor--hover");
      }
    };
    const onPointerOut = (e: PointerEvent) => {
      const tgt = e.target as HTMLElement;
      if (tgt.closest("a, button, .customcursor")) {
        cursorRef.current?.classList.remove("cursor--hover");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("pointerover", onPointerOver);
    window.addEventListener("pointerout", onPointerOut);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("pointerover", onPointerOver);
      window.removeEventListener("pointerout", onPointerOut);
    };
  }, []);

  return <div ref={cursorRef} className="cursor" />;
}
