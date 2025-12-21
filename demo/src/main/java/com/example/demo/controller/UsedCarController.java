package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.UsedCar;
import com.example.demo.repository.UsedCarRepository;

@RestController
@RequestMapping("/api/cars")
@CrossOrigin(origins = "http://localhost:5173")
public class UsedCarController {

    @Autowired
    private UsedCarRepository repo;

    // 👉 Add car from Sell Car page
    @PostMapping
    public UsedCar addCar(@RequestBody UsedCar car) {
        return repo.save(car);
    }

    // 👉 Fetch cars for Used Cars page
    @GetMapping
    public List<UsedCar> getAllCars() {
        return repo.findAll();
    }
}

