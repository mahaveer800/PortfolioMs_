import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Home";
import About from "./About";
import Skills from "./Components/Skills";
import Qualification from "./Components/Qualification";
import Project from "./Components/Project";
import Contact from "./Components/Contact";

const HomePage = () => {
  return (
    <>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Project />
      <Contact />
    </>
  );
};

const App = () => {
  return (
    <>
      <Navbar />

      <div className="pt-20">
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Qualification />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </>
  );
};

export default App;
