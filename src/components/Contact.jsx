import { useState } from 'react';

export default function Contact() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleEmailClick = async () => {
    try {
      await navigator.clipboard.writeText('jerryconceptorganization@gmail.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // Fallback for browsers that don't support clipboard API
      window.location.href = 'mailto:jerryconceptorganization@gmail.com';
    }
  };

  const contactInfo = [
    {
      id: 'email',
      icon: '✉️',
      title: 'Email',
      value: 'jerryconceptorganization@gmail.com',
      action: handleEmailClick,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'phone',
      icon: '📱',
      title: 'Phone',
      value: '+234 703 834 3578',
      action: () => window.location.href = 'tel:+2347038343578',
      gradient: 'from-green-500 to-emerald-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/',
      icon: '🔗',
      gradient: 'from-gray-600 to-gray-800',
      hoverColor: 'hover:text-gray-300'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/',
      icon: '💼',
      gradient: 'from-blue-600 to-blue-800',
      hoverColor: 'hover:text-blue-300'
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/',
      icon: '🐦',
      gradient: 'from-sky-500 to-sky-700',
      hoverColor: 'hover:text-sky-300'
    }
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white flex flex-col items-center justify-center p-8 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-cyan-200 bg-clip-text text-transparent animate-fade-in">
            Let's Connect
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
            I'd love to hear from you! Whether it's a project collaboration, 
            job opportunity, or just a friendly chat — let's make something amazing together.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((contact) => (
            <div
              key={contact.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 cursor-pointer transform transition-all duration-300 hover:scale-105 hover:bg-white/15 ${
                hoveredCard === contact.id ? 'shadow-2xl' : 'shadow-xl'
              }`}
              onMouseEnter={() => setHoveredCard(contact.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={contact.action}
            >
              <div className="flex items-center space-x-4">
                <div className={`text-4xl p-3 rounded-xl bg-gradient-to-r ${contact.gradient} bg-opacity-20`}>
                  {contact.icon}
                </div>
                <div className="text-left flex-1">
                  <h3 className="text-xl font-semibold text-white mb-1">{contact.title}</h3>
                  <p className="text-gray-300 break-all">{contact.value}</p>
                  {contact.id === 'email' && copied && (
                    <p className="text-green-400 text-sm mt-1 animate-bounce">✅ Copied to clipboard!</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-8 text-gray-200">Find Me Online</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-110 hover:shadow-xl ${social.hoverColor}`}
              >
                <span className="text-2xl group-hover:scale-125 transition-transform duration-300">
                  {social.icon}
                </span>
                <span className="font-medium">{social.name}</span>
                <svg 
                  className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-white">Ready to Start a Project?</h3>
          <p className="text-gray-300 mb-6">Let's discuss how we can bring your ideas to life!</p>
          <button
            onClick={handleEmailClick}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:from-blue-700 hover:to-purple-700"
          >
            Get In Touch →
          </button>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-8 w-3 h-3 bg-blue-400 rounded-full opacity-60 animate-bounce"></div>
      <div className="absolute top-1/3 right-12 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-bounce delay-300"></div>
      <div className="absolute bottom-1/4 left-12 w-2 h-2 bg-cyan-400 rounded-full opacity-60 animate-bounce delay-700"></div>
      <div className="absolute bottom-1/3 right-8 w-5 h-5 bg-pink-400 rounded-full opacity-60 animate-bounce delay-1000"></div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}