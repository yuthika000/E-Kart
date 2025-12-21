import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AboutUs from "./pages/Aboutus";
import RateUs from "./Rate/Rateus";
import ProfileInfo from "./pages/info";
import Profile from "./pages/Profile";
import SellCar from "./SellCars/SellCar";
import UsedCar from "./UsedCars/UsedCar"
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
      <Route path="/sell-cars" element={<SellCar />} />
       <Route path="/used-cars" element={<UsedCar />} />
    </Routes>
  );
}

export default App;
