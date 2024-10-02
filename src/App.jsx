// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About'
import Hero from './components/Hero';
import Whatwe from './components/whatWe';
import Service from './components/Service';
import TestimonialsSection from './components/Testimonies';
import Team from './components/Team';
import Footer from './components/Footer';
import TrustedBy from './components/TrustedBy';
import './fonts.css';

function App() {
  return (
   
      <main className='relative font-[Eudoxus Sans]'>
      <Navbar />
      <Hero />
      <About />
      <Whatwe />
      <Service />
      <TestimonialsSection />
      <Team />
      <TrustedBy />
      <Footer />
      

        
        {/* <Routes>
          <Route path="/" element={<Hero />} /> {/* Home or Hero Section 
          {/* <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<Whatwe />} />
          <Route path="/services" element={<Service />} />
          <Route path="/testimonials" element={<TestimonialsSection />} />
          <Route path="/team" element={<Team />} />
        </Routes> */}
        
        
      </main>
    // </Router>
  );
}

export default App
