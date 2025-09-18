import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
