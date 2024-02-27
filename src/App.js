import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './pages/landing/Landing';

import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage'; // Make sure to create this component
import ContactPage from './pages/ContactPage'; // Make sure to create this component

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={PortfolioPage} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
