export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 flex flex-col items-center justify-center p-8 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated heading */}
        <div className="mb-8 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 via-blue-600 to-indigo-600 bg-clip-text text-transparent animate-fade-in">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>
        
        {/* Enhanced content card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2">
          <div className="space-y-6">
            {/* Main introduction */}
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Hello! I'm{" "}
              <span className="font-bold text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                Alamu Jeremiah
              </span>
              , a passionate frontend developer who loves crafting digital experiences.
            </p>
            
            {/* Skills highlight */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['React', 'Tailwind CSS', 'JavaScript', 'Responsive Design'].map((skill, index) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Additional description */}
            <p className="text-lg text-gray-600 leading-relaxed mt-6">
              I specialize in building clean, modern, and responsive websites that provide 
              exceptional user experiences. My passion lies in transforming creative ideas 
              into functional, beautiful web applications.
            </p>
            
            {/* Call to action */}
            <div className="mt-8">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-indigo-700">
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-1/4 left-8 w-4 h-4 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-1/3 right-12 w-3 h-3 bg-indigo-400 rounded-full opacity-60 animate-bounce delay-300"></div>
      <div className="absolute bottom-1/4 left-12 w-5 h-5 bg-purple-400 rounded-full opacity-60 animate-bounce delay-700"></div>
      
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
}