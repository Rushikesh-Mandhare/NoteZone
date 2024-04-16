import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import NotesState from '../context/NotesState';
import Login from '../Components/Login';
import Signup from '../Components/Signup';

function App() {
  return (
    <NotesState>
      <Router>
        <Navbar />
        <div className="container">
        <Routes> {/* Wrap Routes with a Routes element */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
        </div>
      </Router>
    </NotesState>
  );
}

export default App;
