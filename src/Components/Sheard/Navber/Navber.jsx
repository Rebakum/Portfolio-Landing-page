import { useState } from "react";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className=" w-full z-20 transition-all duration-300 ease-in-out ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Left: Logo */}
          <div className="flex items-center">
            <span className="text-3xl text-[#055855] font-bold letter-spacing-0 uppercase">
              𝙼𝚈<span className="text-red-600 uppercase">𝙻𝙾𝙶𝙾</span>
            </span>
          </div>

          {/* Middle: Nav Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link}
                href={link}
                className={`text-lg font-medium transition-all duration-300 ease-in-out border-b-2 ${
                  activeLink === link
                    ? "text-red-600 border-red-600"
                    : "text-[#055855] border-transparent hover:text-red-600 hover:border-red-600"
                }`}
                onClick={() => setActiveLink(link)}
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right: CTA Button */}
          <div className="hidden md:block">
            <Button />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button />
          </div>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 bg-white">
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 text-base font-medium"
          >
            Homeconst pathname = usePathname();
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 text-base font-medium"
          >
            About
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 text-base font-medium"
          >
            Services
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-indigo-600 text-base font-medium"
          >
            Contact
          </a>
          <button className="w-full mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition">
            Contact me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
