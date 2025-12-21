package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.model.UsedCar;

public interface UsedCarRepository extends JpaRepository<UsedCar, Long> {
}

