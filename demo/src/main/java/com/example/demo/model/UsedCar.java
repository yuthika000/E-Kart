package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "used_cars")
public class UsedCar {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String brand;
    private String model;
    private int year;
    private String fuelType;
    private int mileage;
    private double price;
    private String imageUrl;

    @Column(length = 1000)
    private String description;

    // getters & setters
}
