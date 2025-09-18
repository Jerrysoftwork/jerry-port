export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-white p-8 flex flex-col items-center"
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {/* Project Card 1 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project One</h3>
          <p className="text-gray-600 mb-4">
            A short description of your first project goes here.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project Two</h3>
          <p className="text-gray-600 mb-4">
            Another project description with details about what you built.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

        {/* Project Card 3 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Project Three</h3>
          <p className="text-gray-600 mb-4">
            A third project description — could be personal or a client project.
          </p>
          <a
            href="#"
            className="text-blue-500 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>
      </div>
    </section>
  );
}
