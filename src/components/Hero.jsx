import { useState, useEffect } from 'react';
import profilePic from "../assets/jerry.jpg"; // adjust name if different

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  
  const titles = [
    "Frontend Developer",
    "React Specialist", 
    "UI/UX Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentTitle = titles[currentIndex];
    
    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 50);
        return () => clearTimeout(timer);
      } else {
        setIsTyping(true);
        setCurrentIndex((prev) => (prev + 1) % titles.length);
      }
    }
  }, [displayText, currentIndex, isTyping, titles]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-indigo-900 text-white px-6 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-purple-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `float ${3 + Math.random() * 2}s ease-in-out infinite alternate`
            }}
          />
        ))}
      </div>

      {/* Text Section */}
      <div className="flex-1 text-center md:text-left z-10 max-w-2xl">
        <div className="mb-8">
          {/* Greeting */}
          <div className="flex items-center justify-center md:justify-start mb-4">
            <span className="text-2xl animate-wave">👋</span>
            <span className="ml-3 text-xl text-gray-300 font-light">Hello, I'm</span>
          </div>
          
          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Alamu 
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
              Jeremiah
            </span>
          </h1>

          {/* Animated title */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-gray-300 h-12 flex items-center justify-center md:justify-start">
              <span className="font-light mr-3">I'm a</span>
              <span className="font-semibold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </p>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-8 max-w-xl">
            Passionate about creating beautiful, responsive web applications 
            that deliver exceptional user experiences using modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button
              onClick={scrollToContact}
              className="group px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-indigo-700 hover:to-blue-700"
            >
              <span className="flex items-center justify-center">
                Let's Work Together
                <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
            
            <button
              onClick={scrollToAbout}
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>

          {/* Quick stats */}
          <div className="flex justify-center md:justify-start space-x-8 mt-12 text-center">
            <div>
              <div className="text-2xl font-bold text-indigo-400">2+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-400">50+</div>
              <div className="text-sm text-gray-400">Projects Done</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-gray-400">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex-1 flex justify-center mt-8 md:mt-0 z-10">
        <div className="relative">
          {/* Profile image with multiple effects */}
          <div className="relative group">
            {/* Animated ring */}
            <div className="absolute inset-0 w-72 h-72 md:w-80 md:h-80 bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-75"></div>
            
            {/* Glow effect */}
            <div className="absolute inset-2 w-68 h-68 md:w-76 md:h-76 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Main image */}
            <img
              src={profilePic}
              alt="Alamu Jeremiah - Frontend Developer"
              className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full shadow-2xl border-4 border-white/20 transform group-hover:scale-105 transition-all duration-500 z-10"
            />
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-emerald-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
              Available
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-orange-400 to-red-400 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-pulse">
              🔥 Hiring
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center text-gray-400">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-20deg); }
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          100% { transform: translateY(-10px) rotate(180deg); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </section>
  );
}