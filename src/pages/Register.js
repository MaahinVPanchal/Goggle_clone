import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterpassword: "",
  });
  const handleRegister = (event) => {
    event.preventDefault();
    // Registration logic here
    navigate("/login");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, reEnterpassword } = user;

    if (name && email && password && password === reEnterpassword) {
      axios
        .post("http://localhost:9002/register", user)
        .then((res) => console.log(res));
    } else {
      alert("Invalid input");
    }
  };
  return (
    <div className="register-container">
      {console.log("User", user)}
      <h1 className="register-header">Register</h1>
      <form onSubmit={handleRegister} className="register-form">
        {/* Registration form fields */}
        <div className="register-input-container">
          <label className="register-label">Name</label>
          <input
            type="text"
            placeholder="Name"
            required
            className="register-input"
            name="name"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="register-input-container">
          <label className="register-label">Email</label>
          <input
            type="email"
            placeholder="Email"
            required
            className="register-input"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="register-input-container">
          <label className="register-label">Password</label>
          <input
            type="password"
            placeholder="Password"
            required
            className="register-input"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="register-input-container">
          <label className="register-label">ReEnter Password</label>
          <input
            type="password"
            placeholder="ReEnter Password"
            required
            className="register-input"
            name="reEnterpassword"
            value={user.reEnterpassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="register-button" onClick={register}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
