export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8"
    >
      <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
      <p className="text-gray-300 mb-6 text-center max-w-xl">
        I’d love to hear from you! Whether it’s a project, job opportunity, or
        just a chat — feel free to reach out.
      </p>

      <div className="space-y-4 text-center">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:jerryconceptorganization@gmail.com"
            className="text-blue-400 hover:underline"
          >
            jerryconceptorganization@gmail.com
          </a>
        </p>
        <p>📱 Phone: <span className="text-gray-200">+2347038343578</span></p>

        <div className="flex space-x-6 justify-center mt-6">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
}
