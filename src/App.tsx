import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PixelLayout from './components/layout/PixelLayout';
import PixelHome from './pages/PixelHome';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  return (
    <Router>
      <PixelLayout>
        <Routes>
          <Route path="/" element={<PixelHome />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/* Add more routes as needed */}
          <Route path="/services/*" element={<Services />} />
          <Route path="/industries/*" element={<PixelHome />} />
          <Route path="/case-studies" element={<PixelHome />} />
          <Route path="/hire-teams" element={<PixelHome />} />
        </Routes>
      </PixelLayout>
    </Router>
  );
}

export default App;
