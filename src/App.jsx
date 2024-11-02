import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Arts from "./components/Arts";
import About from "./components/About";
import Debate from "./components/Debate";
import Leadership from "./components/Leadership";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Honors from "./components/Honors";
import Mission from "./components/Mission";

const App = () => {
  return (
    <main className="overflow-y-hidden antialiased">
      <HeroSection />
      <Navbar />
      <About />
      <Honors />
      <Mission />
      <Debate />
      <Leadership />
      <Arts />
      <Recommendations />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
