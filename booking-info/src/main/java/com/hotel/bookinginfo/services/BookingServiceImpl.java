package com.hotel.bookinginfo.services;

import java.util.List;

import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;

import com.hotel.bookinginfo.entity.BookingEntity;
import com.hotel.bookinginfo.model.Booking;
import com.hotel.bookinginfo.repository.BookingRepository;

@Service
public class BookingServiceImpl implements BookingService {

    //we need object of the repository
    private BookingRepository bookingRepository;

    //constructor
    public BookingServiceImpl(BookingRepository bookingRepository) {
        this.bookingRepository = bookingRepository;
    }

    @Override
    public Booking createBooking(Booking booking) {
        //convert booking into bookingEntity to save the DB
        BookingEntity bookingEntity = new BookingEntity();

        //copy all the value from booking to bookingentites
        BeanUtils.copyProperties(booking, bookingEntity);
        bookingRepository.save(bookingEntity);//save method already available in B.Repository as we have extended Jpa Repository
        return booking;
      }

      @Override
      public List<BookingEntity> getAllBookings() {
          return bookingRepository.findAll();
      }
    
}
