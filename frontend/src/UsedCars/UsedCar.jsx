import { useEffect, useState } from "react";
import axios from "axios";
import "./UsedCar.css";
import { getAllCars } from "../services/carService";



export default function UsedCars() {
  const [cars, setCars] = useState([]);

 useEffect(() => {
  getAllCars().then(res => setCars(res.data));
}, []);
  return (
    <div className="used-cars">
      <h2>Used Cars</h2>

      <div className="car-grid">
        {cars.map(car => (
          <div className="car-card" key={car.id}>
            <img src={car.imageUrl} alt={car.title} />
            <h3>{car.title}</h3>
            <p>{car.brand} {car.model}</p>
            <p>₹ {car.price}</p>
            <p>{car.year} • {car.fuelType}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
