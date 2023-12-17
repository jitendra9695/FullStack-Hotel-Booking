// src/components/Admin.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/photos/hotel-blurred-background-picture-id882818006?k=6&m=882818006&s=170667a&w=0&h=ujYBFbgP4OwG0QXA0WGovIczyYgI1VA6b4Qn7_ba-uY=")',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="text-white text-center z-10">
        <h2 className="text-4xl font-bold mb-4">Admin Page</h2>

        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={() => navigate("/bookings")}
            className="py-2 px-4 text-white rounded-full bg-gradient-to-r from-cyan-800 to-pink-800 hover:underline"
          >
            Bookings
          </button>
          <button
            onClick={() => navigate("/home")}
            className="py-2 px-4 text-white rounded-full bg-gradient-to-r from-cyan-800 to-pink-800 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;
