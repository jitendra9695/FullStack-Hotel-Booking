package com.hotel.bookinginfo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.hotel.bookinginfo.entity.BookingEntity;

@Repository
//to interact with database to save the data
public interface BookingRepository extends JpaRepository<BookingEntity, Long> {
    
}
