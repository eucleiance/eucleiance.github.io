import { useScramble } from "../Hooks/useScramble";

const Nav = () => {
  useScramble(0.3);

  return (
    <div id="nav" className="fixed top-7 w-full z-50 mix-blend-difference">
      <div className="mx-4 relative">
        <div className="relative w-full h-full text-white lg:text-cyan-50 md:text-rose-50 lg:text-xl md:text-xl font-canela-thin md:font-canela-light text-xl whitespace-nowrap tracking-wider">

          {/* Leftmost: leauspaz */}
          <div className="absolute left-0 top-0">
            <span scramble-to="coldbrewrosh" className="customcursor block w-[140px] lg:pl-7 lg:text-2xl lg:pb-7 ">
              leauspaz
            </span>
          </div>

          {/* Center-left: nav items */}
          <div className="absolute left-1/2 top-0 md:-translate-x-[66%] lg:-translate-x-[100%] flex gap-6 customcursor">
            <span scramble-to="Projekte" className="md:w-25 pt-1 hidden md:block">
              Projects
            </span>
            <span scramble-to="Über" className="md:w-20 pt-1 hidden md:block">
              About
            </span>
            <span scramble-to="Bewerbung" className="md:w-30 pt-1 hidden md:block">
              Résumé
            </span>
          </div>


          {/* Rightmost: Let's Talk */}
          <div className="absolute right-0 top-0">
            <span scramble-to="Lass uns reden" className="customcursor block w-[140px] md:text-lg lg:text-lg pt-1 text-right pr-7">
              Let's Talk
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Nav;
