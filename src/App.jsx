import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return <>
    <div className="max-w-6xl lg:max-w-7xl mx-auto">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Experience/>
      <Footer />
    </div>
  </>;
}
export default App;
