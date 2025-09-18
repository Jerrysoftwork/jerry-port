import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold">Alamu Jeremiah</h1>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          <li>
            <a href="#hero" className="hover:text-blue-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-400 transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#skills" className="hover:text-blue-400 transition">
              Skills
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={toggleMenu}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 py-4 space-y-4">
          <a
            href="#hero"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Skills
          </a>
          <a
            href="#contact"
            onClick={toggleMenu}
            className="block hover:text-blue-400"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
