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
          <h3 className="text-xl font-semibold mb-2">Cogniverse AI</h3>
          <p className="text-gray-600 mb-4">
            Cogniverse AI is an intelligent chat assistant designed to help
            users with conversational AI support. It features dynamic theme and
            font-size settings, easy chat history access, and a clean,
            responsive design. Built for seamless interaction and productivity.
          </p>
          <a
            href="https://cogniverse-bot.netlify.app/"
            className="text-blue-500 font-medium hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project →
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold mb-2">Jerry Concept Hub</h3>
          <p className="text-gray-600 mb-4">
            Jerry Concept Hub is a training & services platform focused on tech
            skill development and digital solutions. Built to empower beginners
            and professionals alike, it offers comprehensive courses such as web
            development, data analysis, Microsoft Office, and computer
            fundamentals. The platform also includes services like document
            processing, internet café access, printing & scanning. With a modern
            responsive design and clear calls-to-action (“Enroll Now,” “Start
            Your Journey”), it ensures users find what they need easily.
          </p>
          <a
            href="https://stepify-azure.vercel.app/"
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
