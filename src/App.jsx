import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollRail from "./components/ScrollRail";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Platforms from "./sections/Platforms";
import Contact from "./sections/Contact";
import { useActiveSection } from "./hooks/useActiveSection";

const SECTION_IDS = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "certifications",
  "contact",
];

function App() {
  const active = useActiveSection(SECTION_IDS);

  return (
    <div className="relative">
      <Navbar active={active} />
      <ScrollRail active={active} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Platforms />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
