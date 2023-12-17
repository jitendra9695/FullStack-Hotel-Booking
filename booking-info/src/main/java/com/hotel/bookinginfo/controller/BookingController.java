package com.hotel.bookinginfo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.bookinginfo.entity.BookingEntity;
import com.hotel.bookinginfo.model.Booking;
import com.hotel.bookinginfo.services.BookingService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class BookingController {

    @Autowired
    private BookingService bookingService;
    //whenever object is created for bookingController b.Service will be already injected
    
    public BookingController(BookingService bookingservice) { //constructor
        this.bookingService = bookingservice;
    } 

    @PostMapping("/bookings")
    //define an API which will handle the data to post request to save data in DB
    public Booking createBooking(@RequestBody Booking booking) {
        return bookingService.createBooking(booking);
    }

    
    @GetMapping("/bookings")
    public ResponseEntity<List<BookingEntity>> getAllBookingsForAdmin() {
        List<BookingEntity> bookings = bookingService.getAllBookings(); 
        return ResponseEntity.ok(bookings);
    }
}
