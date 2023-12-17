package com.hotel.bookinginfo.model;

import java.time.LocalDate;

import lombok.Data;
@Data //getter, setter

//similar as bookingEntity , create to interact with ui
public class Booking {

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
