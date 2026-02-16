import React from "react";
import Navbar from "./components/Layout/Navbar";
import Hero from "./components/Sections/Hero";
import InteractiveGridBackground from "./components/UI/InteractiveGridBackground";
import About from "./components/Sections/About";
import Vision from "./components/Sections/Vision";
import Work from "./components/Sections/Work";
import Contact from "./components/Sections/Contact";
import Footer from "./components/Layout/Footer";

const App: React.FC = () => {
  return (
    <div className="relative w-full overflow-x-hidden text-brand-text">
      {/* Background */}
      <InteractiveGridBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10 w-full">
        {/* Hero */}
        <Hero />

        {/* About */}
        <section id="about" className="scroll-mt-32">
          <About />
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-32">
          <Work />
          <Vision />
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-mt-32">
          <Contact />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
