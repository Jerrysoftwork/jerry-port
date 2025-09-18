export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold">Alamu Jeremiah</h1>

        {/* Navigation Links */}
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
      </div>
    </nav>
  );
}
