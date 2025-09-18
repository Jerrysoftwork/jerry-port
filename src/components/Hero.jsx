export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center"
    >
      <h1 className="text-5xl font-bold">Hi, I’m Alamu Jeremiah 👋</h1>
      <p className="mt-4 text-lg text-gray-300">
        Frontend Developer | React | Tailwind Enthusiast
      </p>
      <div className="mt-6">
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-xl text-white font-medium shadow-lg"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
