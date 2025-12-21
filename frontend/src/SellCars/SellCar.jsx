import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SellCar.css";
import Navbar from "../Home/Navbar";
import { addCar } from "../services/carService";
import sellimage from "../assets/car.jpg";

export default function SellCar() {
     

  const navigate = useNavigate();

  const [car, setCar] = useState({
    title: "",
    bodyType: "",
    model: "",
    year: "",
    exteriorColor: "",
    description: "",
    fuelType: "",
    mileage: "",
    engineCapacity: "",
    price: "",
    imageUrl: "",
    condition: "New"
  });

  const handleChange = (e) => {
    setCar({ ...car, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addCar(car);
    navigate("/used-cars");
  };

  return (
    <>
    <Navbar />
    
  
    <div className="sell-page">
      <form className="sell-form" onSubmit={handleSubmit}>

        {/* LEFT PANEL */}
        <div className="sell-left">
          <h2>Sell Your Car</h2>
          <p className="breadcrumb">Homepage - Sell</p>

          <div className="sell-images">
            <img src={sellimage} alt="car" />
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="sell-right">

          <section>
            <h3>Car Details</h3>

            <div className="row">
              <input name="title" placeholder="Title" onChange={handleChange} />
              <div className="radio-group">
                <label>
                  <input type="radio" name="condition" value="New"
                    checked={car.condition === "New"} onChange={handleChange} />
                  New
                </label>
                <label>
                  <input type="radio" name="condition" value="Used"
                    checked={car.condition === "Used"} onChange={handleChange} />
                  Used
                </label>
              </div>
            </div>

            <div className="row">
              <input name="bodyType" placeholder="Body Type" onChange={handleChange} />
              <input name="model" placeholder="Model" onChange={handleChange} />
            </div>

            <div className="row">
              <input name="year" placeholder="Year" onChange={handleChange} />
              <input name="exteriorColor" placeholder="Exterior Color" onChange={handleChange} />
            </div>

            <textarea name="description" placeholder="Description" onChange={handleChange} />
          </section>

          <section>
            <h3>Engine Details</h3>
            <div className="row">
              <input name="fuelType" placeholder="Fuel Type" />
              <input name="mileage" placeholder="Mileage" />
              <input name="engineCapacity" placeholder="Engine Capacity" />
            </div>
          </section>
<section>
  <h3>Features</h3>

  <div className="features-grid">
    {[
      "Power Steering",
      "Bluetooth",
      "USB Port",
      "Spacious",
      "AC",
      "Wifi",
      "Alarm",
      "Other",
      "Roof Rack",
      "Sunroof",
      "Airbags",
    ].map((f) => (
      <div className="feature-item" key={f}>
        <input type="checkbox" />
        <span>{f}</span>
      </div>
    ))}
  </div>
</section>


          <section>
            <h3>Price</h3>
            <input name="price" placeholder="Full Price" />
          </section>

          <section>
            <h3>Images & Video</h3>
            <input name="imageUrl" placeholder="Image URL" />
          </section>
        </div>

        <button type="submit" className="submit-btn">
          Sell My Car
        </button>
      </form>
    </div>
    </>
  );
}
