import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-sans">
      {/* Navbar always on top */}
      <Navbar />

      {/* Sections */}
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}
