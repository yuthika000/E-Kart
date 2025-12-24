package com.example.demo.controller;

import com.example.demo.model.Car;
import com.example.demo.repository.CarRepository;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:5173")
public class CarController {

    private final CarRepository carRepository;

    public CarController(CarRepository carRepository) {
        this.carRepository = carRepository;
    }

    @GetMapping("/all")
    public List<Car> getAllCars() {
        return carRepository.findAll();
    }

    @PostMapping(
        value = "/add",
        consumes = "multipart/form-data"
    )


    
    public ResponseEntity<?> addCar(
            @RequestParam(required = false) String title,
            @RequestParam(required = false) String bodyType,
            @RequestParam(required = false) String model,
            @RequestParam(required = false) Integer year,
            @RequestParam(required = false) String fuelType,
            @RequestParam(required = false) Integer mileage,
            @RequestParam(required = false) Integer engineCapacity,
            @RequestParam(required = false) Double price,
            @RequestParam(required = false) String description,
            @RequestParam(required = false) String condition,
            @RequestParam(required = false) String exteriorColor,
            @RequestParam(required = false) MultipartFile image
    ) {

        System.out.println("title = " + title);
        System.out.println("year = " + year);
        System.out.println("price = " + price);
        System.out.println("image = " + (image != null));

        if (title == null || model == null || year == null || price == null || image == null) {
            return ResponseEntity.badRequest().body("Missing required fields");
        }

        Car car = new Car();
        car.setTitle(title);
        car.setBodyType(bodyType);
        car.setModel(model);
        car.setYear(year);
        car.setFuelType(fuelType);
        car.setMileage(mileage);
        car.setEngineCapacity(engineCapacity);
        car.setPrice(price);
        car.setDescription(description);
        car.setCondition(condition);
        car.setExteriorColor(exteriorColor);

        // Convert image to Base64 and set it
        try {
            String base64Image = Base64.getEncoder().encodeToString(image.getBytes());
            car.setImage(base64Image);
        } catch (IOException e) {
            e.printStackTrace();
            return ResponseEntity.status(500).body("Failed to upload image");
        }

        return ResponseEntity.ok(carRepository.save(car));
    }
}
