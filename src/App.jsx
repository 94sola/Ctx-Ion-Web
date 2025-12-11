import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/ctx-ion";
import Contact from "./components/Service";
import Footer from "./components/Footer";
import Services from "./components/Service";
import About from "./components/About";
import Gallery from "./components/gallery";

export default function App() {
  return (
    <Router>
      <div className="relative bg-[#ffffff] min-h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}
