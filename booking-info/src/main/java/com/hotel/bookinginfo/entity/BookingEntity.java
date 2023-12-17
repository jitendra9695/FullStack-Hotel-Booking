package com.hotel.bookinginfo.entity;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data //getter, setter
@Entity //to work with JPA to save data
@Table(name = "bookings")//name of the table in DB

//here we save data into database
public class BookingEntity {
    
    //for every primary need to annotate @id
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)//Automatically generated with incrementation
    
    private long id; //primarykey
    private String name;
    private String emailId;
    private String idCard;
    private long idNumber;
    private long phoneNumber;
    private LocalDate checkInDate;
    private LocalDate checkOutdate;
    private String roomType;
}
