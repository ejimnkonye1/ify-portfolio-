import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 fixed w-full shadow-md">
      <div className="container mx-auto flex justify-between items-center px-6">
      
        <h1 className="text-2xl font-bold">IFY</h1>

        
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className="hidden md:flex">
          <ul className="flex space-x-10 lg:space-x-[70px] lg:px-[60px]">
            {["Home", "About", "Services", "Skills", "Projects", "Review", "Contact"].map(
              (item) => (
                <li key={item}>
                  <NavLink
                    to={`/${item.toLowerCase().replace(" ", "-")}`}
                    className={({ isActive }) =>
                      `hover:text-yellow-400 ${
                        isActive ? "text-yellow-400 underline" : ""
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              )
            )}
          </ul>
        </nav>

      
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full bg-black text-white md:hidden">
            <ul className="flex flex-col items-start space-y-6 py-6 p-5">
              {["Home", "About", "Services", "Skills", "Projects", "Review", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <NavLink
                      to={`/${item.toLowerCase().replace(" ", "-")}`}
                      className="hover:text-yellow-400 text-lg"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </NavLink>
                  </li>
                )
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
