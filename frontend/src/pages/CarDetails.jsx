import { useParams } from "react-router-dom";
import cars from "../data/cars";

const CarDetails = () => {
  const { id } = useParams();
  const car = cars.find(c => c.id === id);

  if (!car) return <h2>Car not found</h2>;

  return (
    <div>
      <h1>{car.title}</h1>
      <img src={car.image} width="400" />
      <p>Model: {car.model}</p>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
      <p>Mileage: {car.mileage} km</p>
      <p>Fuel: {car.fuelType}</p>
      <p>Condition: {car.condition}</p>
    </div>
  );
};

export default CarDetails;
