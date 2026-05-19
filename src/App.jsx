import { useState } from "react";
import Loader from "./components/Loader/Loader";
import Galaxy from "./components/layout/Galaxy";
import NavBar from "./components/layout/NavBar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Contact from "./components/sections/Contact";

import "./styles/App.css";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <>
          <NavBar />
          <Galaxy />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </>
      )}
    </>
  );
}
export default App;
