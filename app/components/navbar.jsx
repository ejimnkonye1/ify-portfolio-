import { Link } from "@remix-run/react";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white py-4 fixed w-full z-50 p-2 lg:p-10">
      <div className="container mx-auto flex justify-between items-center px-6">
     
        <h1 className="text-2xl font-bold uppercase">Ifebuche</h1>

      
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

        <nav className="hidden md:flex">
          <ul className="flex space-x-10 lg:space-x-[70px] lg:px-[60px]">
            {["Home", "About", "Services", "Skills", "Review", "Contact"].map((item) => (
              <li key={item}>
                <Link
                  to={`#${item.toLowerCase()}`}
                  className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 
                  after:w-full after:h-[2px] after:bg-yellow-400 after:scale-x-0 
                  after:transition-transform after:duration-300 after:ease-in-out 
                  hover:after:scale-x-100 hover:pb-1"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

     
        {isOpen && (
          <nav className="absolute top-16 left-0 w-full bg-[#000080] text-white md:hidden">
            <ul className="flex flex-col items-start space-y-6 py-6 p-5">
              {["Home", "About", "Services", "Skills",  "Review", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    to={`#${item.toLowerCase()}`}
                    className="hover:text-yellow-400 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
