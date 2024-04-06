import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({ name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    if (credentials.password !== credentials.cpassword) {
      alert("Passwords do not match");
      return;
    }

    const {name,  email, password } = credentials;

    const response = await fetch("http://localhost:3000/auth/createuser", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem('authToken', json.token);
      // Redirect the user to another page
      navigate("/");
      props.showAlert("Account created successfully", "success")
    } else {
      props.showAlert("Invalid Details", "danger")
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='my-5 container'>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <label htmlFor="name"><h3>Name</h3></label>
          <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Enter Name" value={credentials.name} id="name" name="name" onChange={onChange} />
        </div>
        <div className="form-group my-3">
          <label htmlFor="email"><h3>Email address</h3></label>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={credentials.email} id="email" name="email" onChange={onChange} />
        </div>
        <div className="form-group my-3">
          <label htmlFor="password"><h3>Password</h3></label>
          <input type="password" className="form-control" id="password" placeholder="Password" value={credentials.password} name="password" minLength={5} onChange={onChange} autoComplete="current-password" />
        </div>
        <div className="form-group my-3">
          <label htmlFor="cpassword"><h3>Confirm Password</h3></label>
          <input type="password" className="form-control" id="cpassword" placeholder="Confirm Password" value={credentials.cpassword} name="cpassword" minLength={5} onChange={onChange} autoComplete="current-password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup;
