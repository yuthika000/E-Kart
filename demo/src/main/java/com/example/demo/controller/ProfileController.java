package com.example.demo.controller;

import com.example.demo.model.Profile;
import com.example.demo.repository.ProfileRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ProfileController {

    private final ProfileRepository repo;

    public ProfileController(ProfileRepository repo) {
        this.repo = repo;
    }

    // SAVE FROM Info.jsx
    @PostMapping("/profile")
    public ResponseEntity<?> saveProfile(@RequestBody Profile profile) {
        return ResponseEntity.ok(repo.save(profile));
    }

    // LOAD INTO Profile.jsx
    @GetMapping("/profile")
    public ResponseEntity<?> getProfile() {
        Optional<Profile> profile = repo.findFirstByOrderByIdAsc();

        if (profile.isPresent()) {
            return ResponseEntity.ok(profile.get());
        } else {
            return ResponseEntity.ok(new Profile()); // VERY IMPORTANT
        }
    }

    // UPDATE FROM EDIT
    @PutMapping("/profile")
    public ResponseEntity<?> updateProfile(@RequestBody Profile profile) {
        Optional<Profile> existing = repo.findFirstByOrderByIdAsc();

        if (existing.isPresent()) {
            profile.setId(existing.get().getId());
        }

        return ResponseEntity.ok(repo.save(profile));
    }
}
