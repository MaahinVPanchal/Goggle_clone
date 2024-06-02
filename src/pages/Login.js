import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import axios from "axios";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (event) => {
    event.preventDefault();
    // Authentication logic here
    onLogin();
    navigate("/"); // Redirect to home page after successful login
  };

  const login = ()=>{
    axios.post("http://localhost:9002/login",user)
    .then(res=>alert(res.data.message))
  }
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  return (
    <div className="login-container">
      <h1 className="login-header">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        {/* Login form fields */}
        <input
          type="email"
          placeholder="Email"
          required
          className="login-input"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="login-input"
          name="password"
          value={user.password}
          onChange={handleChange}
        />

        <button type="submit" className="login-button" onClick={login}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
