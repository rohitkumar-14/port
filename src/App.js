import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import About from './pages/About';
import Controversies from './pages/Controversies';
import OtherControversies from './pages/OtherControversies';
import Contact from './pages/Contact';
import Achievements from './pages/Achievements';
import Journey from './pages/Journey';

const App = () => {
  return (
    <Router>
      {/* <Preloader /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home pageTitle="Home" />} />
        <Route path="/about" element={<About pageTitle="About" />} />
        <Route path="/controversies" element={<Controversies pageTitle="Controversies" />} />
        <Route path="/otherControversies" element={<OtherControversies pageTitle="OtherControversies" />} />
        <Route path="/contact" element={<Contact pageTitle="Contact" />} />
        <Route path="/achievements" element={<Achievements pageTitle="Achievements" />} />
        <Route path="/journey" element={<Journey pageTitle="Journey" />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
