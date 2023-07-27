import React from "react";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id='home'>
      <Navbar />

      <main>
        <Home />

        <div>
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
