import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Homepage } from './pages/Homepage';
import { Programs } from './pages/Programs';
import { Events } from './pages/Events';
import { Business } from './pages/Business';
import { About } from './pages/About';
import { Resources } from './pages/Resources';
import { Footer } from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/programas" element={<Programs />} />
          <Route path="/eventos" element={<Events />} />
          <Route path="/parcerias" element={<Business />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/recursos" element={<Resources />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;