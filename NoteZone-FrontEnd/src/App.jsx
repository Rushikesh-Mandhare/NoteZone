import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import About from "../Components/About";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes> {/* Wrap Routes with a Routes element */}
        <Route path="/" element={<Home />} /> 
        <Route path="/About" element={<About />} />
        
      </Routes>
    </Router>
  );
}

export default App;
