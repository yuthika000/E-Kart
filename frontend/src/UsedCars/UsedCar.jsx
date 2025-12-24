import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import axios from "axios";
import "./UsedCar.css";

export default function UsedCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // <-- Initialize navigate

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cars/all")
      .then((res) => {
        setCars(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching cars:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading-text">Loading cars...</p>;
  }

  return (
    <div className="used-cars-page">
      <h2 className="page-title">Available Used Cars</h2>

      <div className="car-grid">
        {cars.length === 0 && <p>No cars available</p>}

        {cars.map((car) => (
          <div
            className="car-card"
            key={car.id || car._id}
            onClick={() => navigate(`/car/${car.id || car._id}`)} // <-- Works now
          >
            {/* IMAGE */}
            <div className="car-image-box">
              {car.image ? (
                <img
                  src={`data:image/jpeg;base64,${car.image}`}
                  alt={car.title}
                />
              ) : (
                <div className="no-image">No Image</div>
              )}
            </div>

            {/* DETAILS */}
            <div className="car-details">
              <h3 className="car-name">{car.title}</h3>
              <p className="car-price">Rs. {car.price}</p>
              <p className="car-location">{car.condition || "Used"}</p>
              <p className="car-specs">
                {car.year || "2021"} • {car.fuelType || "Petrol"} •{" "}
                {car.bodyType || "SUV"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
