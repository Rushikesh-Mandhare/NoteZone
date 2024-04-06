import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password })
    });

    const json = await response.json();
    console.log(json);

    if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem('authToken', json.token);
        // Redirect the user to another page
        navigate("/");
        props.showAlert("Logged in successfully", "success")
    } else {
        props.showAlert("Invalid Credentials", "danger")
    }
};

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div className='my-5 '>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-3">
          <h3>Email address</h3>
          <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" value={credentials.email} id="email" name="email" onChange={onChange} />
        </div>
        <div className="form-group my-3">
          <h3>Password</h3>
          <input type="password" className="form-control" id="password" placeholder="Password" value={credentials.password} name="password" onChange={onChange} autoComplete="current-password" />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default Login;
