package com.hotel.bookinginfo.controller;

// src/main/java/com/example/hotelbooking/controller/UserController.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.hotel.bookinginfo.entity.User;
import com.hotel.bookinginfo.services.UserService;



@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public void registerUser(@RequestBody User user) {
        userService.registerUser(user);
    }

    @PostMapping("/login")
    public boolean loginUser(@RequestBody User user) {
        return userService.loginUser(user);
    }
}

