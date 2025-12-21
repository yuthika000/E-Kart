import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AboutUs from "./pages/Aboutus";
import RateUs from "./Rate/Rateus";
import ProfileInfo from "./pages/info";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/rate-us" element={<RateUs />} />
      <Route path="/info" element={<ProfileInfo />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
}

export default App;
