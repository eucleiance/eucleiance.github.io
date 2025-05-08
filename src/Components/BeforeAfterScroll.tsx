import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface BeforeAfterScrollProps {
  beforeSrc: string;
  afterSrc: string;
}

const BeforeAfterScroll: React.FC<BeforeAfterScrollProps> = ({ beforeSrc, afterSrc }) => {
  const comparisonRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const section = comparisonRef.current!;
    const afterEl = section.querySelector<HTMLDivElement>('.afterImage')!;
    const afterImg = afterEl.querySelector<HTMLImageElement>('img')!;

    // 1) Set initial off-screen positions
    gsap.set(afterEl,   { xPercent: 100 });
    gsap.set(afterImg,  { xPercent: -100 });

    // 2) Build your timeline with scrub and pin
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'center center',
        end:    () => `+=${section.offsetWidth}`,
        scrub:  true,
        pin:    true,
        anticipatePin: 1,
      },
      defaults: { ease: 'none' },
    });

    // 3) Animate both the container and its img in tandem
    tl.to(afterEl,  { xPercent: 0, immediateRender: false })
      .to(afterImg, { xPercent: 0, immediateRender: false }, 0);

    // 4) Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      tl.kill();
    };
  }, []);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-normal z-10 drop-shadow-md">
          Scroll to see the before/after
        </h1>
      </section>

      <section
        ref={comparisonRef}
        className="comparisonSection relative h-screen w-full overflow-hidden"
      >
        <div className="comparisonImage beforeImage absolute inset-0 z-10">
          <img
            src={beforeSrc}
            alt="before"
            className="w-full h-full object-cover"
          />
        </div>

        {/* this one starts off to the right, then slides in */}
        <div className="comparisonImage afterImage absolute inset-0 z-20">
          <img
            src={afterSrc}
            alt="after"
            className="w-full h-full object-cover"
          />
        </div>
      </section>
    </>
  );
};

export default BeforeAfterScroll;
