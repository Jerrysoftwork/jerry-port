export default function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Git & GitHub",
    "Vite",
    "Responsive Design",
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-8"
    >
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition flex items-center justify-center text-lg font-medium text-gray-700"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
