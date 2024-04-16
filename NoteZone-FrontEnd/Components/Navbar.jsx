import React from 'react'
import { Link , useLocation} from "react-router-dom";

const Navbar = () => {

// To Highlight the page at which we are curruntly 

  let location = useLocation();

  
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark" >

      <div className="container-fluid">
<<<<<<< HEAD
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" style={{ width: "45px", height: "40px", marginRight: "10px" }} />
          NoteZone
        </Link>

=======
        <Link className="navbar-brand" to="/">NoteZone</Link>
>>>>>>> parent of f8342b0 (initial commit)
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${(location.pathname)==="/" ? "active" : " "}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${(location.pathname)==="/About" ? "active" : " "}`} to="/About">About</Link>
            </li>
           
          </ul>
<<<<<<< HEAD
          <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
          <Link className="btn btn-primary mx-1" to="/signup" role="button">SignUp</Link>
=======
          <form className="d-flex" role="search">
  <input className="form-control me-2 bg-primary" type="search" placeholder="Search" aria-label="Search" />
  <button className="btn btn-outline-success btn-outline-light" type="submit">Search</button>
</form>
>>>>>>> parent of f8342b0 (initial commit)

        </div>
      </div>
    </nav>
  )
}

export default Navbar
