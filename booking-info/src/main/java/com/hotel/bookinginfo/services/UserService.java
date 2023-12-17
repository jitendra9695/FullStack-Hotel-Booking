package com.hotel.bookinginfo.services;

import com.hotel.bookinginfo.entity.User;

public interface UserService {
    void registerUser(User user);
    boolean loginUser(User user);
}
