import { useState, useEffect, lazy, Suspense } from 'react';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// Lazy load components for better performance
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Skills = lazy(() => import("./components/Skills"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));

// Loading component
const SectionLoader = ({ sectionName }) => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
    <div className="text-center">
      <div className="relative mb-8">
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-indigo-400 rounded-full animate-spin-slow mx-auto"></div>
      </div>
      <p className="text-gray-600 font-medium">Loading {sectionName}...</p>
    </div>
  </div>
);

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentSection, setCurrentSection] = useState('hero');

  // Handle initial loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Handle scroll progress and current section
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      setScrollProgress(progress);

      // Determine current section
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const sectionElements = sections.map(id => document.getElementById(id));
      
      const currentSectionIndex = sectionElements.findIndex(element => {
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
        }
        return false;
      });

      if (currentSectionIndex !== -1) {
        setCurrentSection(sections[currentSectionIndex]);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initial loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 flex items-center justify-center z-50">
        <div className="text-center text-white">
          {/* Animated logo/name */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent animate-fade-in">
              Alamu Jeremiah
            </h1>
            <p className="text-xl text-blue-200 animate-fade-in-delay">
              Frontend Developer
            </p>
          </div>
          
          {/* Loading animation */}
          <div className="relative mb-8">
            <div className="w-20 h-20 border-4 border-blue-300/30 border-t-blue-400 rounded-full animate-spin mx-auto"></div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-indigo-400 rounded-full animate-spin-reverse mx-auto"></div>
          </div>
          
          {/* Loading text */}
          <p className="text-blue-200 animate-pulse">Preparing your experience...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans relative overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200/50 backdrop-blur-sm z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-300 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Section Navigation Dots */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <nav className="flex flex-col space-y-4">
          {[
            { id: 'hero', label: 'Home', icon: '🏠' },
            { id: 'about', label: 'About', icon: '👨‍💻' },
            { id: 'projects', label: 'Projects', icon: '🚀' },
            { id: 'skills', label: 'Skills', icon: '⚡' },
            { id: 'contact', label: 'Contact', icon: '📧' }
          ].map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`group relative w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                currentSection === section.id
                  ? 'bg-blue-500 border-blue-500 scale-125'
                  : 'bg-transparent border-gray-400 hover:border-blue-400 hover:scale-110'
              }`}
              title={section.label}
            >
              <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                {section.icon} {section.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Navbar - always on top */}
      <div className="relative z-30">
        <Navbar />
      </div>

      {/* Page Sections with Lazy Loading */}
      <main className="relative">
        {/* Hero Section - Always loaded first */}
        <section className="relative">
          <Hero />
        </section>

        {/* Lazy Loaded Sections */}
        <Suspense fallback={<SectionLoader sectionName="About" />}>
          <section className="relative">
            <About />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader sectionName="Projects" />}>
          <section className="relative">
            <Projects />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader sectionName="Skills" />}>
          <section className="relative">
            <Skills />
          </section>
        </Suspense>

        <Suspense fallback={<SectionLoader sectionName="Contact" />}>
          <section className="relative">
            <Contact />
          </section>
        </Suspense>
      </main>

      {/* Footer - Lazy Loaded */}
      <Suspense fallback={<SectionLoader sectionName="Footer" />}>
        <Footer />
      </Suspense>

      {/* Scroll to Top Button */}
      <button
        onClick={() => scrollToSection('hero')}
        className={`fixed bottom-6 right-6 w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 ${
          scrollProgress > 20 ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
        title="Back to Top"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>

      {/* Background Cursor Effect */}
      <div className="pointer-events-none fixed inset-0 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-transparent to-indigo-50/30"></div>
      </div>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        
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
        
        @keyframes fade-in-delay {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in-delay 1s ease-out 0.5s both;
        }
        
        .animate-spin-reverse {
          animation: spin-reverse 2s linear infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
}