import { useState } from "react";
import logoImg from "../assets/images/logo-03.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-gradient-to-br from-gray-900/90 via-gray-800/90 to-gray-900/90 border-b border-white/10 shadow-2xl">
      <div className="h-[2px] bg-gradient-to-r from-transparent via-gray-400 to-transparent animate-pulse shadow-[0_0_15px_rgba(156,163,175,0.6)]"></div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-5 py-0 relative">
        <div className="flex items-center ">
          <div className="flex-shrink-0 relative group flex items-center justify-center">
            <div
              className="absolute 
    w-20 h-20 
    sm:w-22 sm:h-22 
    bg-white rounded-full opacity-100 
    transition-all duration-700 group-hover:scale-110"
            ></div>

            {/* Logo */}
            <img
              src={logoImg}
              alt="Haitian Sports Hall of Fame"
              className="h-20 
               sm:h-28 
               w-auto relative z-10 
               transition-all duration-500 
               group-hover:scale-105 
               drop-shadow-[0_4px_15px_rgba(0,0,0,0.15)]"
            />
          </div>
          <h3 className="text-white text-sm sm:text-base -ml-8 font-bold hidden sm:block">Haitian Sports All Of Fame</h3>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-6 lg:gap-8 items-center text-sm font-semibold tracking-wide uppercase">
          {[
            { href: "#mission", label: "Mission" },
            { href: "#inductees", label: "2026 Inductees" },
            { href: "#committee", label: "Committee" },
            { href: "#event", label: "Event" },
            { href: "#highlights", label: "2025" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-white/90 transition-all duration-300 hover:text-white group"
            >
              <span className="relative text-xs sm:text-sm z-10 drop-shadow-lg">{item.label}</span>
              <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 w-0 h-[3px] bg-gradient-to-r from-gray-400 to-gray-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden px-6 py-2.5 rounded-xl font-bold text-white bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 border border-white/20 shadow-lg hover:scale-105 transition-all"
          >
            <span className="relative z-10">Survey</span>
            <span className="absolute inset-0 bg-white/5 hover:bg-white/10 transition-all"></span>
          </a>
        </nav>

        {/* Mobile Layout */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="https://www.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-br from-gray-600 to-gray-800 border border-white/20 shadow-md"
          >
            Survey
          </a>

          <button
            className="flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1.5"}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-white transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-0.5" : "translate-y-1.5"}`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <nav className="flex flex-col gap-4 px-6 py-6 bg-gray-900/95 backdrop-blur-2xl border-t border-white/10 text-center text-sm font-semibold tracking-wide uppercase">
          {["mission", "inductees", "committee", "event", "highlights"].map(
            (id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className="text-white/80 hover:text-white py-2"
              >
                {id === "highlights"
                  ? "2025"
                  : id === "inductees"
                    ? "2026 Inductees"
                    : id}
              </a>
            ),
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
