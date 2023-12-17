import React from "react";
import room1 from "../assets/img/rooms/room1.jpeg";
import room2 from "../assets/img/rooms/room2.jpeg";
import room3 from "../assets/img/rooms/room3.jpeg";
import room4 from "../assets/img/rooms/room4.jpeg";
import room5 from "../assets/img/rooms/room5.jpeg";
import room6 from "../assets/img/rooms/room6.jpeg";
import room7 from "../assets/img/rooms/room7.jpeg";
import room8 from "../assets/img/rooms/room8.jpeg";
import room9 from "../assets/img/rooms/room9.jpeg";
import {useNavigate} from "react-router-dom"

const hotels = [
  {
    id: 1,
    name: "Single Economy",
    description: "Cozy single economy room for a comfortable stay.",
    price: 1150,
    image: room1,
  },
  {
    id: 2,
    name: "Single Basic",
    description: "Simple & Comfortable single basic room for a relaxed stay.",
    price: 1200,
    image: room2,
  },
  {
    id: 3,
    name: "Single Standard",
    description: "Spacious & Well-appointed single room for your comfort.",
    price: 1250,
    image: room3,
  },
  {
    id: 4,
    name: "Single Deluxe",
    description: "Luxurious single deluxe room for an idulgent experience. ",
    price: 1300,
    image: room4,
  },
  {
    id: 5,
    name: "Double Economy",
    description: "Economical double room for a budget-friendly stay.",
    price: 1200,
    image: room5,
  },
  {
    id: 6,
    name: "Double Basic",
    description: "Comfortable double room offering essenntial amenities.",
    price: 1250,
    image: room6,
  },
  {
    id: 7,
    name: "Double Standard",
    description: "double room with standard amenities for your comfort.",
    price: 1300,
    image: room7,
  },
  {
    id: 8,
    name: "Family Economy",
    description: "family economy room for a budget-friendly stay.",
    price: 1300,
    image: room8,
  },
  {
    id: 9,
    name: "Family Basic",
    description: "Comfortable family basic room for a relaxing stay.",
    price: 1300,
    image: room9,
  },
];

const Rooms = () => {

  const navigate = useNavigate();

  return (
    <>
      <div id="rooms" className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold text-center mb-6">Hotel Rooms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="rounded overflow-hidden shadow-lg">
              <img
                className="hover:scale-110"
                src={hotel.image}
                alt={hotel.name}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{hotel.name}</h3>
                <p className="text-gray-700">{hotel.description}</p>
                <div className="flex justify-between items-center mt-4 ">
                  <span className="text-xl font-bold text-gray-800">
                    Rs {hotel.price}/night
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id="booking" className="text-center mt-8">
        <p className="font-bold text-lg tracking-wider py-3 px-6">
          <span className="text-yellow-500 text-2xl">*</span>For Booking, Please
          Click on{" "}
        </p>
        <button
         onClick={() => navigate('/book')} 
         className=" py-2 px-1 text-white rounded-full bg-gradient-to-r from-purple-800 to-pink-800 hover:underline">
          Book Now
        </button>
      </div>
    </>
  );
};

export default Rooms;
