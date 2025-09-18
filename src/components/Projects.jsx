import { useState, useEffect } from 'react';

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Cogniverse AI",
      description: "Cogniverse AI is an intelligent chat assistant designed to help users with conversational AI support. It features dynamic theme and font-size settings, easy chat history access, and a clean, responsive design. Built for seamless interaction and productivity.",
      url: "https://cogniverse-bot.netlify.app/",
      icon: "✨",
      gradient: "from-purple-600 via-pink-600 to-blue-600",
      tech: ["AI", "Chat", "React"],
      color: "purple"
    },
    {
      id: 2,
      title: "Jerry Concept Hub",
      description: "Jerry Concept Hub is a training & services platform focused on tech skill development and digital solutions. Built to empower beginners and professionals alike, it offers comprehensive courses such as web development, data analysis, Microsoft Office, and computer fundamentals.",
      url: "https://stepify-azure.vercel.app/",
      icon: "💻",
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      tech: ["Education", "Platform", "Services"],
      color: "emerald"
    },
    {
      id: 3,
      title: "Connectify",
      description: "Connectify is a polished, modern React/Vite app built to make connections seamless. With a sleek, responsive interface, it delivers fast performance, intuitive navigation, and a smooth user experience across devices.",
      url: "https://connectify-ivory.vercel.app/",
      icon: "🌐",
      gradient: "from-orange-600 via-red-600 to-pink-600",
      tech: ["React", "Vite", "Modern"],
      color: "orange"
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full"></div>
          </div>
        ))}
      </div>

      <div className="relative z-10 p-8 flex flex-col items-center">
        {/* Enhanced Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg">
              <span className="text-white text-xl">💻</span>
            </div>
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Featured Work</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 bg-clip-text text-transparent mb-4">
            My Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover my latest work showcasing innovative solutions and creative implementations
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-cyan-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
          {projects.map((project, index) => {
            return (
              <div
                key={project.id}
                className={`group relative transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
                onMouseEnter={() => setHoveredCard(project.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div className="relative h-full bg-white/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  {/* Gradient Header */}
                  <div className={`h-24 bg-gradient-to-r ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      <span className="text-white text-2xl">{project.icon}</span>
                    </div>
                    
                    {/* Animated Background Pattern */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="absolute top-2 left-2 w-8 h-8 border border-white/30 rounded-full animate-ping"></div>
                      <div className="absolute bottom-2 right-8 w-6 h-6 border border-white/30 rounded-full animate-ping delay-1000"></div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className={`px-3 py-1 text-xs font-semibold bg-${project.color}-100 text-${project.color}-700 rounded-full border border-${project.color}-200`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
                      {project.description}
                    </p>

                    {/* CTA Button */}
                    <div className="pt-4">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 group/btn`}
                      >
                        <span>View Project</span>
                        <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none`}></div>
                </div>

                {/* Floating Elements on Hover */}
                <div className={`absolute -inset-2 bg-gradient-to-r ${project.gradient} rounded-2xl blur-lg opacity-0 group-hover:opacity-20 transition-all duration-500 -z-10`}></div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="text-gray-600 mb-6">Want to see more of my work?</p>
          <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white font-semibold rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <span className="flex items-center gap-2">
              View All Projects
              <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}