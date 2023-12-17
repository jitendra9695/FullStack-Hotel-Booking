package com.hotel.bookinginfo.entity;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

// src/main/java/com/example/hotelbooking/entity/User.java

import lombok.Data;

@Entity
@Data
@Table(name = "AdminLogin")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String password;
}
