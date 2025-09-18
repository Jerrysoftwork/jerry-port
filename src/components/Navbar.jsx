export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <h1 className="text-2xl font-bold">Alamu Jeremiah</h1>
      
      {/* Desktop menu */}
      <ul className="hidden md:flex gap-6">
        <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
        <li><a href="#about" className="hover:text-blue-400">About</a></li>
        <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
      </ul>

      {/* Mobile menu button */}
      <button 
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
}