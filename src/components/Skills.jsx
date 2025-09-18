import { useState, useEffect } from 'react';

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState([]);

  const skillsData = [
    { 
      name: "HTML", 
      icon: "🌐", 
      level: 95, 
      color: "from-orange-500 to-red-500",
      category: "Frontend",
      description: "Semantic markup and modern HTML5 features"
    },
    { 
      name: "CSS", 
      icon: "🎨", 
      level: 92, 
      color: "from-blue-500 to-indigo-500",
      category: "Frontend",
      description: "Advanced styling, animations, and layouts"
    },
    { 
      name: "JavaScript", 
      icon: "⚡", 
      level: 88, 
      color: "from-yellow-400 to-orange-500",
      category: "Programming",
      description: "ES6+, DOM manipulation, and async programming"
    },
    { 
      name: "React", 
      icon: "⚛️", 
      level: 90, 
      color: "from-cyan-400 to-blue-500",
      category: "Framework",
      description: "Hooks, Context API, and component architecture"
    },
    { 
      name: "Tailwind CSS", 
      icon: "💨", 
      level: 94, 
      color: "from-teal-400 to-cyan-500",
      category: "Framework",
      description: "Utility-first CSS framework mastery"
    },
    { 
      name: "Git & GitHub", 
      icon: "🔀", 
      level: 85, 
      color: "from-gray-600 to-gray-800",
      category: "Tools",
      description: "Version control and collaborative development"
    },
    { 
      name: "Vite", 
      icon: "⚡", 
      level: 80, 
      color: "from-purple-500 to-pink-500",
      category: "Tools",
      description: "Fast build tool and development server"
    },
    { 
      name: "Responsive Design", 
      icon: "📱", 
      level: 93, 
      color: "from-green-500 to-emerald-500",
      category: "Frontend",
      description: "Mobile-first and cross-device compatibility"
    }
  ];

  const categories = [...new Set(skillsData.map(skill => skill.category))];

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedSkills(skillsData.map((_, index) => index));
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 flex flex-col items-center justify-center p-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A comprehensive toolkit of modern technologies and frameworks 
            I use to bring digital experiences to life.
          </p>
        </div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {category}
                </span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {skillsData
                  .filter(skill => skill.category === category)
                  .map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 border border-white/50 ${
                        animatedSkills.includes(skillsData.indexOf(skill)) ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{ 
                        animationDelay: `${index * 150}ms`,
                        animationFillMode: 'forwards'
                      }}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      {/* Skill Icon and Name */}
                      <div className="text-center mb-4">
                        <div className={`text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <h4 className="text-xl font-bold text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:bg-clip-text transition-all duration-300">
                          {skill.name}
                        </h4>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-600 font-medium">Proficiency</span>
                          <span className="text-sm font-bold text-gray-800">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out ${
                              animatedSkills.includes(skillsData.indexOf(skill)) ? 'animate-progress' : 'w-0'
                            }`}
                            style={{ 
                              width: animatedSkills.includes(skillsData.indexOf(skill)) ? `${skill.level}%` : '0%',
                              animationDelay: `${index * 150 + 300}ms`
                            }}
                          ></div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-sm text-gray-600 leading-relaxed text-center group-hover:text-gray-800 transition-colors duration-300">
                        {skill.description}
                      </p>

                      {/* Hover Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 pointer-events-none`}></div>
                      
                      {/* Floating Badge */}
                      {hoveredSkill === skill.name && (
                        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce shadow-lg">
                          Expert
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-blue-600 bg-clip-text text-transparent">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
              tools, and best practices to stay at the forefront of frontend development.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium shadow-sm">
                📚 Continuous Learning
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 rounded-full text-sm font-medium shadow-sm">
                🚀 Performance Focused
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 rounded-full text-sm font-medium shadow-sm">
                🎨 Design Minded
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-8 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-1/3 right-12 w-3 h-3 bg-indigo-400 rounded-full opacity-60 animate-bounce delay-300"></div>
      <div className="absolute bottom-1/4 left-12 w-5 h-5 bg-purple-400 rounded-full opacity-60 animate-bounce delay-700"></div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes progress {
          from {
            width: 0%;
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        .animate-progress {
          animation: progress 1.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
}