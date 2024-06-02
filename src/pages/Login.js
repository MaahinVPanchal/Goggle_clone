import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();
    // Authentication logic here
    onLogin();
    navigate("/"); // Redirect to home page after successful login
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
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="login-input"
        />

        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
