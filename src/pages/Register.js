import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();
    // Registration logic here
    navigate("/login"); // Redirect to login page after successful registration
  };

  return (
    <div className="register-container">
      <h1 className="register-header">Register</h1>
      <form onSubmit={handleRegister} className="register-form">
        {/* Registration form fields */}
        <div className="register-input-container">
          <label className="register-label">Email</label>
          <input
            type="email"
            placeholder="Email"
            required
            className="register-input"
          />
        </div>
        <div className="register-input-container">
          <label className="register-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            className="register-input"
          />
        </div>
        <div className="register-input-container">
          <label className="register-label">Confirm Password</label>
          <input
            type="password"
            placeholder="Confirmed Password"
            required
            className="register-input"
          />
        </div>
        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
