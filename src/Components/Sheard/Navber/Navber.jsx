import { Menu, X } from "lucide-react"; // optional: icon lib
import { useState } from "react";
import Button from "../Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const links = ["Home", "About", "Services", "Contact"];

  return (
    <nav className="w-full z-50 bg-white shadow-md fixed top-0 left-0 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl md:text-3xl font-bold text-[#055855]">
              𝙼𝚈<span className="text-red-600">𝙻𝙾𝙶𝙾</span>
            </span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex space-x-6">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={`text-base font-medium transition duration-300 border-b-2 ${
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

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button />
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#055855]"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-3">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-[#055855] text-base font-medium hover:text-red-600"
              onClick={() => {
                setActiveLink(link);
                setIsOpen(false); // close menu on click
              }}
            >
              {link}
            </a>
          ))}
          <Button />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
