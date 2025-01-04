import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Barber from "./components/Barber";
import Quote from "./components/Quote";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Blog from "./components/Blog";

const Home = () => (
  <>
    <HeroSection />
    <Intro />
    <Services />
    <Barber />
    <Quote />
    <Pricing />
  </>
);

const About = () => <Intro />;

function App() {
  return (
    <Router>
      <div className="relative w-full overflow-x-hidden">
        <Navbar />
        <main className="relative w-full overflow-x-hidden max-w-[100vw]">
          <div className="overflow-x-hidden w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
