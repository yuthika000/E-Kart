import React, { useRef, useState } from "react";
import { Link ,useNavigate} from "react-router-dom";

import FilterPanel from "../Filter/FilterPanel";
import Footer from "../Footer/Footer";
import "./Home.css";

/* ==== Images ==== */
import hero from "../assets/hero.jpg";
import audi from "../assets/brands/audi.png";
import bmw from "../assets/brands/bmw.jpg";
import lamborghini from "../assets/brands/lamborghini.jpg";
import ford from "../assets/brands/ford.jpg";
import suzuki from "../assets/brands/suzuki.jpg";
import honda from "../assets/brands/honda.png";
import toyota from "../assets/brands/toyota.jpg";
import bentley from "../assets/brands/bentley.png";
import mercedes from "../assets/brands/mercedes.png";
import jaguar from "../assets/brands/jaguar.png";

import teslaImg from "../assets/cars/tesla.jpg";
import fordImg from "../assets/cars/ford.jpg";
import hondaImg from "../assets/cars/honda.jpg";

/* ==== Brands data ==== */
const BRANDS = [
  { name: "Audi", src: audi },
  { name: "BMW", src: bmw },
  { name: "Lamborghini", src: lamborghini },
  { name: "Ford", src: ford },
  { name: "Suzuki", src: suzuki },
  { name: "Honda", src: honda },
  { name: "Toyota", src: toyota },
  { name: "Bentley", src: bentley },
  { name: "Mercedes", src: mercedes },
  { name: "Jaguar", src: jaguar },
];

/* slug helper */
function slugify(name) {
  return name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
}

/* Recommended cars data */
const cars = [
  {
    name: "Tesla Model 3 Standard Range Plus",
    price: "Rs.56,690",
    location: "Florida, USA",
    year: 2020,
    drive: "Rear-wheel Drive",
    fuel: "Electric",
    seats: 5,
    img: teslaImg,
  },
  {
    name: "Ford F-250 Super Duty",
    price: "Rs.82,098",
    location: "Milan, Italy",
    year: 2021,
    drive: "Four-wheel Drive",
    fuel: "Diesel",
    seats: 5,
    img: fordImg,
  },
  {
    name: "Honda Pilot Touring 7-Passenger",
    price: "Rs.43,735",
    location: "Caracas, Venezuela",
    year: 2021,
    drive: "All-wheel Drive",
    fuel: "Gasoline",
    seats: 7,
    img: hondaImg,
  },
];

/* RecommendedCars component */
const RecommendedCars = () => (
  <div className="recommended-cars">
    <h2>Recommended Cars</h2>
    <div className="car-cards">
      {cars.map((car, index) => (
        <div className="car-card" key={index}>
          <span className="new-badge">New</span>
          <img src={car.img} alt={car.name} />
          <h3>{car.name}</h3>
          <p className="price">{car.price}</p>
          <p className="location">{car.location}</p>
          <div className="car-info">
            <span>📅 {car.year}</span>
            <span>🛞 {car.drive}</span>
            <span>⛽ {car.fuel}</span>
            <span>👥 {car.seats}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function CartrizoHomepage() {
  const navigate = useNavigate();
  const brandsRowRef = useRef(null);

  const [menuOpen, setMenuOpen] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollLeft = () => {
    brandsRowRef.current?.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    brandsRowRef.current?.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <div className="cartrizo-root">
      {/* Side Menu */}
      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>✖</button>
        <h2 className="menu-title">Cartrizo</h2>
        <ul className="menu-items">
          <li>🏠 Home</li>
          <li>🚗 New cars</li>
          <li>🚘 Used cars</li>
          <li>💰 Sell cars</li>
          <li>❤️ Favourites</li>
          <li>⭐ Rate us</li>
        </ul>
        <div className="menu-footer">
          <p>TOLL FREE NUMBER</p>
          <h3>0806 8441 441</h3>
        </div>
      </div>

      {/* Header */}
      <header className="topbar">
        <div className="left-group">
          <button
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span><span></span><span></span>
          </button>
          <div className="brand">
            <img src={hero} alt="logo" className="brand-logo" />
            <h1 className="brand-title">CARTRIZO</h1>
          </div>
        </div>
        <nav className="topnav">
          <button className="topnav-n">HOME</button>
          <button className="topnav-n">ABOUT US</button>
          <button className="topnav-n" onClick={() => navigate("/signup")}>SIGNUP</button>
          <button className="topnav-n" onClick={() => navigate("/login")}>LOGIN</button>
        </nav>
      </header>

      {/* Search Bar */}
      <div className="search-wrap">
        <div className="search">
          <input placeholder="Search for your dream car" />
          <button className="search-btn">🔍</button>
          <button className="search-btn" onClick={() => setShowFilter(true)}>🔽 Filter</button>
        </div>
      </div>

      {/* Filter Panel */}
      <FilterPanel isOpen={showFilter} onClose={() => setShowFilter(false)} />

      {/* Hero Section */}
      <main className="hero-container">
        <div className="hero-card">
          <div className="hero-left">
            <img src={hero} alt="car hero" className="hero-image" />
          </div>
          <div className="hero-right">
            <div className="promo-line">Drive with confidence <br /> Buy with trust.</div>
            <div className="promo-badge">Welcome to Cartrizo</div>
            <div className="promo-line small">Ranges Starts At</div>
            <div className="price-badge">₹ 3 LAKH /-</div>
          </div>
        </div>
      </main>

      {/* Explore Section */}
      <section className="explore">Explore By Brand</section>

      {/* Brands */}
      <section className="brands-shell">
        <div className="brands-inner">
          <div className="brands-row" ref={brandsRowRef}>
            {BRANDS.map((b, i) => (
              <Link to={`/brand/${slugify(b.name)}`} className="brand-card" key={i}>
                <div className="brand-card-inner">
                  <img src={b.src} alt={b.name} className="brand-grid-logo" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Cars */}
      <RecommendedCars />

      {/* Footer */}
      <Footer />
    </div>
  );
}
