import React from "react";
import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div id='home'>
      <Navbar />

      <main className="main">
        <Home />
        <About />
        <Projects />
      </main>
    </div>
  );
}

export default App;
