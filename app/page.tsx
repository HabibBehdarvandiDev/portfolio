import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Intro from "./components/sections/Intro";

export default function Home() {
  return (
    <main className=" w-full flex flex-col justify-start align-middle items-center">
      <Intro />
      <About />
      <Contact />
    </main>
  );
}
