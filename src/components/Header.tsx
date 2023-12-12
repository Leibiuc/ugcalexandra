import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-amber-50 z-10 fixed px-4 py-1 w-full gap-4 font-semibold flex items-center justify-end md:hidden">
        <button onClick={toggleMenu}>
          <svg
            className="w-5 h-5 text-gray-800 cursor-pointer"
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

      {/* Dark overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-9"
          onClick={toggleMenu}
        ></div>
      )}

      <div className="bg-amber-50 z-10 fixed px-4 py-1 w-full gap-4 font-semibold md:flex items-center hidden  justify-end">
        <a href="#Hi!">Hi!</a>
        <a href="#videos">Videoclipuri</a>
        <a href="#info">Info</a>
        <a href="#creation">Procesul de creare</a>
        <a href="#videos">Despre mine</a>
        <a href="#videos">Beneficii UGC</a>
        <a href="#videos">Contact</a>
      </div>

      <div
        className={`md:hidden fixed inset-0 bg-amber-50 w-1/2 z-10 h-full rounded-md text-center py-1 px-4 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="font-semibold flex h-full flex-col justify-around">
          <a href="#Hi!" onClick={toggleMenu}>
            Hi!
          </a>
          <a href="#videos" onClick={toggleMenu}>
            Videoclipuri
          </a>
          <a href="#info" onClick={toggleMenu}>
            Info
          </a>
          <a href="#creation" onClick={toggleMenu}>
            Procesul de creare
          </a>
          <a href="#videos" onClick={toggleMenu}>
            Despre mine
          </a>
          <a href="#videos" onClick={toggleMenu}>
            Beneficii UGC
          </a>
          <a href="#videos" onClick={toggleMenu}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
};
