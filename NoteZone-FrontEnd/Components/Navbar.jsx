import React from 'react'
import { Link, useLocation } from "react-router-dom";
import logo from '../src/assets/logo.png';


const Navbar = () => {

  // To Highlight the page at which we are curruntly 

  let location = useLocation();


  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >

      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: "45px", height: "40px", marginRight: "10px" }} />
          NoteZone
        </Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${(location.pathname) === "/" ? "active" : " "}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${(location.pathname) === "/About" ? "active" : " "}`} to="/About">About</Link>
            </li>

          </ul>
          <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
          <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>

        </div>
      </div>
    </nav>
  )
}

export default Navbar
