import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import carImg from "../assets/car.jpg";
import "./Signup.css";

export default function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // NORMAL SIGNUP
  const handleSignup = async () => {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    alert(data.message);

    if (res.ok) navigate("/info");
  };

  // GOOGLE SIGNUP
  const handleGoogleSuccess = async (response) => {
    const user = jwtDecode(response.credential);

    await fetch("http://localhost:5000/google-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
      }),
    });

    alert(`Welcome ${user.name}`);
    navigate("/info");
  };

  // ✅ FIXED: GOOGLE ERROR HANDLER
  const handleGoogleError = () => {
    alert("Google Sign In Failed");
  };

  return (
    <div className="signup-container">
      <div className="signup-card">

        {/* LEFT PANEL */}
        <div className="signup-left">
          <div className="semicircle"></div>
          <img src={carImg} alt="Car" className="car-image" />
          <div className="left-text">
            <h1>SIGNUP</h1>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="signup-right">
          <h2>Create Account</h2>
          <p className="subtitle">Register to explore our website</p>

          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="signup-btn" onClick={handleSignup}>
            Signup
          </button>

          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          {/* GOOGLE LOGIN */}
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleError}
          />

          <p className="login-text">
            Already have an account?
            <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
