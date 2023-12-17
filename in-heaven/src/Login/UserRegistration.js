// src/components/UserRegistration.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const UserRegistration = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    if (!username || !password) {
      setErrorMessage('Please enter both username and password.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/users/register', { username, password });
      setShowPopup(true);
    } catch (error) {
      console.error('Registration failed:', error);
      setErrorMessage('An error occurred during registration. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'url("https://wallpaperaccess.com/full/1673318.jpg")',
      }}>

      <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">User Registration</h2>
        {errorMessage && (
          <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded">
            <p className="text-red-800">{errorMessage}</p>
          </div>
        )}
        <form>
          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">Username:</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-black text-sm font-bold mb-2">Password:</label>
            <input
              type="password"
              className="w-full p-2 border rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleRegister}>
            Register
          </button>
        </form>

        {showPopup && (
          <div className="mt-4 p-4 bg-green-100 border border-green-300 rounded">
            <p className="text-green-800">
              Account created successfully! <br />
              Username: {username} <br />
              Password: {password}
            </p>
            <p className="mt-2 text-sm">
              Go to{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
              </Link>
            </p>
          </div>
        )}

        <div className="mt-4 text-sm bg-white">
          <p>
            Already have an account?{' '}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>

  );
};

export default UserRegistration;
