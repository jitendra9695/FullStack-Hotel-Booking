package com.hotel.bookinginfo.services;

import java.util.List;

import com.hotel.bookinginfo.entity.BookingEntity;
import com.hotel.bookinginfo.model.Booking;

public interface BookingService {

    Booking createBooking(Booking booking);

        List<BookingEntity> getAllBookings();

    
}
