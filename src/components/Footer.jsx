import { useState } from 'react';

export default function Footer() {
  const [hoveredTech, setHoveredTech] = useState(null);

  const currentYear = new Date().getFullYear();
  
  const technologies = [
    { name: 'React', icon: '⚛️', color: 'text-blue-400', gradient: 'from-blue-400 to-cyan-400' },
    { name: 'Tailwind CSS', icon: '🎨', color: 'text-cyan-400', gradient: 'from-cyan-400 to-teal-400' },
    { name: 'JavaScript', icon: '🚀', color: 'text-yellow-400', gradient: 'from-yellow-400 to-orange-400' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Top', href: '#hero' }
  ];

  const socialLinks = [
    { name: 'GitHub', icon: '🔗', url: 'https://github.com/' },
    { name: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/' },
    { name: 'Twitter', icon: '🐦', url: 'https://twitter.com/' },
    { name: 'Email', icon: '✉️', url: 'mailto:jerryconceptorganization@gmail.com' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-gray-300 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-48 h-48 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
              Alamu Jeremiah
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Frontend developer passionate about creating beautiful, 
              responsive web experiences that make a difference.
            </p>
            
            {/* Tech stack */}
            <div className="mb-6">
              <p className="text-sm text-gray-500 mb-3">Built with love using:</p>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech) => (
                  <span
                    key={tech.name}
                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/5 border border-white/10 transition-all duration-300 hover:bg-white/10 hover:scale-105 cursor-pointer ${
                      hoveredTech === tech.name ? `bg-gradient-to-r ${tech.gradient} text-white` : tech.color
                    }`}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <span className="mr-2">{tech.icon}</span>
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 hover:underline decoration-indigo-400 underline-offset-4"
                    onClick={(e) => {
                      if (link.href === '#hero') {
                        e.preventDefault();
                        scrollToTop();
                      }
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 text-gray-400 hover:text-white transition-all duration-300 group"
                >
                  <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="group-hover:underline decoration-indigo-400 underline-offset-4">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              © {currentYear}{' '}
              <span className="font-semibold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                Alamu Jeremiah
              </span>
              . All rights reserved.
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Crafted with 💙 and lots of ☕
            </p>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center space-x-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all duration-300 hover:scale-105"
          >
            <span className="text-sm">Back to top</span>
            <svg 
              className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        {/* Fun element */}
        <div className="text-center mt-8 opacity-60">
          <p className="text-xs text-gray-600">
            Made with passion in Nigeria 🇳🇬 | Available for remote opportunities worldwide 🌍
          </p>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-4 left-8 w-2 h-2 bg-indigo-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute bottom-8 right-12 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce delay-300"></div>
      <div className="absolute top-4 right-20 w-1 h-1 bg-purple-400 rounded-full opacity-60 animate-bounce delay-700"></div>

      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(180deg); }
        }
        
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
}