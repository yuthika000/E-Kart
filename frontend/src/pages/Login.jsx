import "./Login.css";
import { Link } from "react-router-dom";
import loginCar from "../assets/car.jpg";
import googleicon from "../assets/google.png";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login-card">

        {/* LEFT PANEL */}
        <div className="login-left">
          <div className="semicircle-shape"></div>
          <h1>
            LOGIN <br /> PAGE
          </h1>
        </div>

        {/* MIDDLE IMAGE */}
        <div className="login-middle">
          <img src={loginCar} alt="Login Car" />
        </div>

        {/* RIGHT FORM */}
        <div className="login-right">
          <h2>Login</h2>
          <p className="welcome-text">
            Welcome back! Please enter your details
          </p>

          <div className="form-group">
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />

            <div className="captcha-row">
              <div className="captcha-box">
                C2G7X18
                <span className="refresh">⟳</span>
              </div>
              <input type="text" placeholder="Enter the captcha" />
            </div>

            <Link className="forgot-link" to="/forgot-password">
              Forgot Password
            </Link>
          </div>

          <button className="login-btn">Login</button>

          <div className="divider">
            <span></span>
            <p>or</p>
            <span></span>
          </div>

          <button className="google-btn">
            <img src={googleicon} alt="google" />
            Sign in with Google
          </button>

          <p className="signup-redirect">
            Don’t have an account? <Link to="/signup">Sign up for free</Link>
          </p>
        </div>

      </div>
    </div>
  );
}
