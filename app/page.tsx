import { Suspense } from "react";
import BackToTopButton from "./components/BackToTopButton";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Intro from "./components/sections/Intro";
import Projects from "./components/sections/Projects";

export default function Home() {
  return (
    <main className="w-full h-screen flex flex-col justify-start align-middle items-center overflow-x-hidden overflow-y-hidden">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <BackToTopButton />
    </main>
  );
}
