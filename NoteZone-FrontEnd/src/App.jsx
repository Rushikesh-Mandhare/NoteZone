import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Home from "../Components/Home";
import Navbar from "../Components/Navbar";
import About from "../Components/About";
import NotesState from '../context/NotesState';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import AlertComponent from '../Components/Alerts'; // Rename Alert to avoid conflict

function App() {
  const [alertState, setAlertState] = useState(null); // Rename Alert to avoid conflict

  const showAlert = (message, type) => {
    setAlertState({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlertState(null);
    }, 1500);
  };

  return (
    <NotesState>
      <Router>
        <Navbar />
        <AlertComponent alert={alertState} /> {/* Pass alert prop */}
        <div className="container">
          <Routes>
            <Route path="/" element={<Home showAlert={showAlert} />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login showAlert={showAlert} />} />
            <Route path="/Signup" element={<Signup showAlert={showAlert} />} />
          </Routes>
        </div>
      </Router>
    </NotesState>
  );
}

export default App;
