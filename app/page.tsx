import BackToTopButton from "./components/BackToTopButton";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <main className="w-full flex flex-col justify-start align-middle items-center overflow-x-hidden scroll-smooth">
      <Intro />
      <About />
      <Projects />
      <Contact />
      <BackToTopButton />
    </main>
  );
}
