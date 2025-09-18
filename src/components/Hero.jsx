export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <h1 className="text-5xl font-bold animate-fade-in">
        Hi, I'm Alamu Jeremiah <span className="wave">👋</span>
      </h1>
      <p className="mt-4 text-lg text-gray-300 text-center max-w-2xl">
        Frontend Developer | React | Tailwind Enthusiast
      </p>
      <div className="mt-6">
        
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-medium shadow-lg transition-all hover:scale-105"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}