import React from "react";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className="relative min-h-sceen w-screen overflow-x-hidden">
      <Hero />
      <section className="min-h-screen z-0 " />
    </main>
  );
};

export default App;
