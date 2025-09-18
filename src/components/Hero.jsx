import profilePic from "../assets/jerry.jpg"; // adjust name if different

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6"
    >
      {/* Text Section */}
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I’m <span className="text-indigo-400">Alamu Jeremiah</span> 👋
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          A passionate frontend developer building modern and responsive web
          applications.
        </p>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <img
          src={profilePic}
          alt="Alamu Jeremiah"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg border-4 border-indigo-400"
        />
      </div>
    </section>
  );
}
