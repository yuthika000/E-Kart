import React from "react";
import { Link } from "react-router-dom";
import carImg from "../assets/car.jpg";
import googleIcon from "../assets/google.png";
import "./Signup.css";

export default function Signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">

        {/* LEFT PANEL */}
        <div className="signup-left">
          {/* Semi-circle behind the car */}
          <div className="semicircle"></div>

          {/* Car image */}
          <img src={carImg} alt="Car" className="car-image" />

          {/* Text on top */}
          <div className="left-text">
            <h1>SIGNUP</h1>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="signup-right">
          <h2>Create Account</h2>
          <p className="subtitle">Register to explore our website</p>

          <div className="form-group">
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
          </div>

          <button className="signup-btn">Signup</button>

          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <button className="google-btn">
            <img src={googleIcon} alt="Google" />
            Sign in with Google
          </button>

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
