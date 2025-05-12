import { useScramble } from "../Hooks/useScramble";

const Nav = () => {
  useScramble(0.3);

  return (
    <div id="nav" className="fixed top-7 w-full z-50 mix-blend-difference">
      <div className="mx-4 relative">
        <div className="relative w-full h-full text-white lg:text-cyan-50 md:text-rose-50 lg:text-xl md:text-xl font-canela-thin md:font-canela-light text-xl whitespace-nowrap tracking-wider">

          {/* Leftmost: leauspaz */}
          <div className="absolute left-0 top-0">
            <a href="https://coldbrewrosh.github.io" scramble-to="coldbrewrosh" className="customcursor block w-[140px] lg:pl-7 lg:text-2xl lg:pb-7 ">
              leauspaz
            </a>
          </div>

          {/* Center-left: nav items */}
          <div className="absolute left-1/2 top-0 md:-translate-x-[66%] lg:-translate-x-[100%] flex gap-6 customcursor">
            <a href="#projects"
              scramble-to="Projekte"
              className="md:w-25 pt-1 hidden md:block"
            >
              Projects
            </a>
            <a
              href="#about"
              scramble-to="Über"
              className="md:w-20 pt-1 hidden md:block"
            >
              About
            </a>
            <a
              // href="/Gurung_Roshan_Lebenslauf.pdf"
              href="/videos/showreel.mp4"
              // download
              target="_blank" rel="noopener noreferrer"
              // scramble-to="Lebenslauf"
              scramble-to="Showreel"
              className="md:w-30 pt-1 hidden md:block" >
              Résumé
            </a>
          </div>


          {/* Rightmost: Let's Talk */}
          <div className="absolute right-0 top-0">
            <a
              href="mailto:coldbrewrosh@gmail.com"
              scramble-to="Lass uns reden"
              className="customcursor block w-[140px] md:text-lg lg:text-lg pt-1 text-right lg:pr-7"
            >
              Let's Talk
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nav;
