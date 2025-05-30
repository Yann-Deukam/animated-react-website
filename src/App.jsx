import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Service from "./components/Service";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <main className="relative min-h-sceen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Service />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
