import React, { useState } from "react";
import BookingService from "../services/BookingService";
import { useNavigate } from "react-router-dom";

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function Book() {
  //initial state
  const [booking, setBooking] = useState({
    name: "",
    phoneNumber: 0,
    idCard: "AdharCard",
    idNumber: 0,
    emailId: "",
    checkInDate: formatDate(new Date()),
    checkOutdate: formatDate(new Date()),
    roomType: "SingleEconomy", // Default room type
  });

  const navigate = useNavigate();

  const [isEmptyFieldError, setIsEmptyFieldError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isBookingSuccess, setIsBookingSuccess] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setBooking({ ...booking, [e.target.name]: value });
  };

  const saveBooking = (e) => {
    e.preventDefault(); //disable the refreshing of the page
    const isEmptyField = Object.values(booking).some(
      (value) => typeof value === "string" && value.trim() === ""
    );

    if (isEmptyField) {
      setIsEmptyFieldError(true);
      return;
    }

     // Date validation: Check if check-out is later than check-in
     const checkInDate = new Date(booking.checkInDate);
     const checkOutdate = new Date(booking.checkOutdate);
 
     if (checkOutdate <= checkInDate) {
       setIsError(true);
       return;
     }
 
     setIsError(false);
     
    //calling api
    BookingService.saveBooking(booking)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

   

    // Access the selected room type
    const selectedRoomType = booking.roomType;

    // Process the booking with the selected room type
    console.log("Booking data:", booking);
    console.log("Selected room type:", selectedRoomType);

    setIsBookingSuccess(true);
  };

  const closeEmptyFieldErrorPopup = () => {
    setIsEmptyFieldError(false);
  };

  const closeErrorPopup = () => {
    setIsError(false);
  };

  const closeSuccessPopup = () => {
    setIsBookingSuccess(false);
    navigate("/home"); // Use navigate to go to the home page
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/002/803/976/large_2x/abstract-blur-hotel-and-lobby-interior-free-photo.jpg')`,
      }}
    >
      <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-6">Book Your Stay</h1>
        <form>
          <div className="flex ">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name" //to use this state
                className="w-full border p-2 rounded-md"
                value={booking.name}
                onChange={(e) => handleChange(e)} // to update the state
              />
            </div>

            <div className=" mx-4">
              <label
                htmlFor="emailId"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="emailId"
                name="emailId"
                className="w-full border p-2 rounded-md"
                value={booking.emailId}
                onChange={(e) => handleChange(e)} // to update the state
              />
            </div>
          </div>

          <div className="flex ">
            <div className="mb-4">
              <label
                htmlFor="idCard"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Id-Card
              </label>
              <select
                id="idCard"
                name="idCard"
                className="w-full border p-2 rounded-md"
                value={booking.idCard}
                onChange={(e) => handleChange(e)} // to update the state
              >
                <option value="Adhar-Card">Adhar Card</option>
                <option value="Pan-Card">Pan Card</option>
                <option vlaue="Voter-Id">Voter Id</option>
              </select>
            </div>

            <div className="mb-4 mx-4">
              <label
                htmlFor="idNumber"
                className=" block text-gray-700 text-sm font-bold mb-2 "
              >
                Id-Number
              </label>
              <input
                type="number"
                id="idNumber"
                name="idNumber"
                className="e-full border p-2 rounded-md"
                value={booking.idNumber}
                onChange={(e) => handleChange(e)} // to update the state
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone-no
            </label>
            <input
              type="number"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full border p-2 rounded-lg"
              value={booking.phoneNumber}
              onChange={(e) => handleChange(e)} // to update the state
            />
          </div>

          <div className="flex ">
            <div className="mb-4">
              <label
                htmlFor="check-in"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Check-In Date
              </label>
              <input
                type="date"
                id="check-in-date"
                name="checkInDate"
                className="w-full border p-2 rounded-md"
                value={booking.checkInDate}
                onChange={(e) => handleChange(e)} // to update the state
              />
            </div>

            <div className="mb-4 mx-4">
              <label
                htmlFor="check-out"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Check-Out Date
              </label>
              <input
                type="date"
                id="check-outdate"
                name="checkOutdate"
                className="w-full border p-2 rounded-md"
                value={booking.checkOutdate}
                onChange={(e) => handleChange(e)} // to update the state
              />
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="room-type"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Room Type
            </label>
            <select
              id="room-type"
              name="roomType"
              className="w-full border p-2 rounded-md"
              value={booking.roomType}
              onChange={(e) => handleChange(e)} // to update the state
            >
              <option value="Single-Economy">Single-Economy</option>
              <option value="Single-Basic">Single-Basic</option>
              <option value="Single-Standard">Single-Standard</option>
              <option value="Single-Deluxe">Single-Deluxe</option>
              <option value="Double-Economy">Double-Economy</option>
              <option value="Double-Basic">Double-Basic</option>
              <option value="Double-Standard">Double-Standard</option>
              <option value="Family-Economy">Family-Economy</option>
              <option value="Family-Basic">Family-Basic</option>
            </select>
          </div>
          <button
            onClick={saveBooking}
            className="bg-blue-500 text-white rounded p-2 w-full mt-4 hover:bg-blue-700"
            type="submit"
          >
            Book Now
          </button>
        </form>
      </div>

      {isEmptyFieldError && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-red-500">
              Please fill in all details to book the room.
            </p>
            {/* Display all details in the popup */}
            <div className="mt-4">
              <p>Name: {booking.name}</p>
              <p>Email: {booking.emailId}</p>
              {/* Add similar lines for other fields */}
            </div>
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded"
              onClick={closeEmptyFieldErrorPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isError && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p className="text-red-500">
              Check-out date must be after check-in date
            </p>
            <button
              className="mt-4 bg-red-500 text-white p-2 rounded"
              onClick={closeErrorPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {isBookingSuccess && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-4 rounded-md shadow-md">
            <p>{`Your ${booking.roomType} room booked for ${booking.name}`}</p>
            <button
              className="mt-4 bg-green-500 text-white p-2 rounded"
              onClick={closeSuccessPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Book;
