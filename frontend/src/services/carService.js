import axios from "axios";

const API = "http://localhost:5000/api/cars";

export const getAllCars = () => axios.get(API);
export const addCar = (car) => axios.post(API, car);
