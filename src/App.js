import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import BookNowForm from './components/BookNowForm';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials'; // Import Testimonials
import Process from './components/Process'; // Import Testimonials
import Footer from './components/Footer'; // Import the Footer component
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />       
         <Route path="/contact" element={<Contact />} />
         <Route path="/process" element={<Process />} />
        <Route path="/booknow" element={<BookNowForm/>} />
      </Routes>

      <Contact /> {/* Add Contact section after Footer*/}
      <Footer /> 

    </Router>
  );
}

export default App;
