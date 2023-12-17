// AdminBookings.jsx

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminBookings = () => {
    const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/bookings");
      const data = await response.json();
      setBookings(data);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  return (
    <div  
    className="min-h-screen bg-cover bg-center flex items-center justify-center "
     style={{
        backgroundImage:
          'url("https://image.freepik.com/free-photo/abstract-blur-luxury-hotel-lobby-background_1339-98444.jpg")',
      }}
    >
      <div className="mt-4 bg-yellow-200 text-black p-2 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Bookings</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="p-2 border">ID</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">ID-Card</th>
              <th className="p-2 border">ID-Number</th>
              <th className="p-2 border">Phone-Number</th>
              <th className="p-2 border">Email-ID</th>
              <th className="p-2 border">Room Type</th>
              <th className="p-2 border">Check-in Date</th>
              <th className="p-2 border">Check-out Date</th>
              <th className="p-2 border">Price</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr key={booking.id}>
                <td className="p-2 border">{booking.id}</td>
                <td className="p-2 border">{booking.name}</td>
                <td className="p-2 border">{booking.idCard}</td>
                <td className="p-2 border">{booking.idNumber}</td>
                <td className="p-2 border">{booking.phoneNumber}</td>
                <td className="p-2 border">{booking.emailId}</td>
                <td className="p-2 border">{booking.roomType}</td>
                <td className="p-2 border">{booking.checkInDate}</td>
                <td className="p-2 border">{booking.checkOutdate}</td>
                <td className="p-2 border"> 1150*2 = 2300 Rs</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button
         onClick={() => navigate('/admin')} 
         className="mt-4 py-1 px-2 text-white rounded-full bg-gradient-to-r from-cyan-800 to-pink-800 hover:underline">
          Home
        </button>
      </div>
    </div>
  );
};

export default AdminBookings;
