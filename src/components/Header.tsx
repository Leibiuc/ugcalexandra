import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-[#f5eddb] px-4 py-2 w-full gap-4 font-semibold flex items-center justify-end md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-8 h-8 text-gray-800 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      <div className="bg-[#f5eddb] px-4 py-2 w-full gap-4 font-semibold md:flex items-center hidden  justify-end">
        <a href="#videos">Videoclipuri</a> <a href="#videos">Videoclipuri</a>{" "}
        <a href="#videos">Videoclipuri</a> <a href="#videos">Videoclipuri</a>{" "}
        <a href="#videos">Videoclipuri</a> <a href="#videos">Videoclipuri</a>{" "}
        <a href="#videos">Videoclipuri</a>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-[#f5eddb] w-1/2 z-10 text-center py-2 px-4 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div>
          <a href="#videos" onClick={toggleMenu} className="block py-2">
            Videoclipuri
          </a>
          <a href="#videos" onClick={toggleMenu} className="block py-2">
            Videoclipuri
          </a>
          <a href="#videos" onClick={toggleMenu} className="block py-2">
            Videoclipuri
          </a>
          <a href="#videos" onClick={toggleMenu} className="block py-2">
            Videoclipuri
          </a>
          <a href="#videos" onClick={toggleMenu} className="block py-2">
            Videoclipuri
          </a>
          <a href="#videos" onClick={toggleMenu} className="block py-2">
            Videoclipuri
          </a>
        </div>
      </div>
    </>
  );
};
