import { Element } from "react-scroll";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

function App() {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed w-full z-[10] bg-gradient-to-r from-purple-600 to-blue-500">
        <Navbar />
      </div>
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>
      <div className="mx-auto pb-10">
        <div className="pt-32"></div>
        <div className="px-8">
          <Element name="hero">
            <Hero />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Element name="technologies">
            <Technologies />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="contact">
            <ContactMe />
          </Element>
        </div>
      </div>
    </div>
  );
}

export default App;
