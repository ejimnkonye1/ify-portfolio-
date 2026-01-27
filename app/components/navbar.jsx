import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const sections = ["Home", "About", "Services", "Skills", "Insights", "Review", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 max-w-6xl">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <h1 className="text-xl lg:text-2xl font-bold tracking-tight">
            <span className="text-white">Ifeb</span>
            <span className="text-yellow-400">uche</span>
          </h1>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none p-2 hover:text-yellow-400 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center">
          <ul className="flex items-center gap-8 lg:gap-10">
            {sections.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`relative text-sm font-medium transition-colors duration-300 hover:text-yellow-400 ${
                    location.hash === `#${item.toLowerCase()}`
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform origin-left transition-transform duration-300 ${
                      location.hash === `#${item.toLowerCase()}`
                        ? "scale-x-100"
                        : "scale-x-0 hover:scale-x-100"
                    }`}
                  ></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://calendly.com/ifebuchesolution/15min"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-8 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Book a Call
          </a>
        </nav>

        {/* Mobile Navigation */}
        <nav
          className={`absolute top-full left-0 w-full bg-black/98 backdrop-blur-md md:hidden transform transition-all duration-300 ${
            isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col py-6 px-6 space-y-4">
            {sections.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className={`block py-2 text-lg font-medium transition-colors ${
                    location.hash === `#${item.toLowerCase()}`
                      ? "text-yellow-400"
                      : "text-gray-300 hover:text-yellow-400"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a
                href="https://calendly.com/ifebuchesolution/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold transition-all"
                onClick={() => setIsOpen(false)}
              >
                Book a Call
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
