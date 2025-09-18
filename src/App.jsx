import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";

export default function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}
