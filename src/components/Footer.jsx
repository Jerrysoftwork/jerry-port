export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 text-center py-6 mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} Alamu Jeremiah. All rights reserved.
      </p>
      <p className="text-sm mt-2">
        Built with <span className="text-white font-semibold">React</span> +
        <span className="text-sky-400 font-semibold"> Tailwind CSS</span>.
      </p>
    </footer>
  );
}
