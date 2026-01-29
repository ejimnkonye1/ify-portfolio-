import { useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const sections = ["Home", "About", "Services", "Skills", "Insights", "Contact"];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Only add scroll listener if mobile menu is closed
    if (!isOpen) {
      window.addEventListener("scroll", handleScroll);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  return (
    <>
      {/* Regular Navbar - Hide when mobile menu is open */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isOpen ? "hidden" : "" // Hide when menu is open
        } ${
          scrolled ? "bg-black/95 backdrop-blur-sm shadow-lg py-3" : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center px-6 max-w-6xl">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="flex items-center gap-2"
          >
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
              {sections.map((item) => {
                const sectionId = item.toLowerCase();
                return (
                  <li key={item}>
                    <a
                      href={`#${sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(sectionId);
                      }}
                      className={`relative text-sm font-medium transition-colors duration-300 hover:text-yellow-400 ${
                        location.hash === `#${sectionId}`
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                    >
                      {item}
                      <span
                        className={`absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-400 transform origin-left transition-transform duration-300 ${
                          location.hash === `#${sectionId}`
                            ? "scale-x-100"
                            : "scale-x-0 hover:scale-x-100"
                        }`}
                      ></span>
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* CTA Button */}
            <a
              href="https://calendly.com/ifebuchesolution/meeting-with-ifebuche"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-8 bg-yellow-400 hover:bg-yellow-500 text-black px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Book a Call
            </a>
          </nav>
        </div>
      </header>

      {/* Mobile Navigation Menu */}
      <nav
        className={`md:hidden fixed inset-0 z-[9999] bg-black/95 backdrop-blur-md transition-all duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full p-6">
          {/* Close Button - Only visible when menu is open */}
          <button
            className="absolute top-6 right-6 text-white text-2xl p-2 hover:text-yellow-400 transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <FiX />
          </button>
          
          {/* Menu Items */}
          <ul className="space-y-6 text-center">
            {sections.map((item) => {
              const sectionId = item.toLowerCase();
              return (
                <li key={item}>
                  <a
                    href={`#${sectionId}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className={`text-2xl font-medium transition-colors ${
                      location.hash === `#${sectionId}`
                        ? "text-yellow-400"
                        : "text-white hover:text-yellow-400"
                    }`}
                  >
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
          
          {/* CTA Button */}
          <div className="mt-12">
            <a
              href="https://calendly.com/ifebuchesolution/meeting-with-ifebuche"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold text-lg transition-all transform hover:scale-105"
              onClick={() => setIsOpen(false)}
            >
              Book a Call
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;