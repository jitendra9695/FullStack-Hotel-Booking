// src/components/UserLogin.js

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/users/login', { username, password });
            const loginSuccessful = response.data;

            if (loginSuccessful) {
                console.log('Login successful!');
                navigate('/admin'); // Navigate to the admin page upon successful login
            } else {
                setErrorMessage('Invalid username or password.'); // Display error message for unsuccessful login
            }
        } catch (error) {
            console.error('Login failed:', error);
            setErrorMessage('An error occurred during login. Please try again.'); // Display a generic error message
        }
    };

    return (
        <div className="min-h-screen bg-cover bg-center flex items-center justify-center"
            style={{
                backgroundImage:
                    'url("https://wallpaperaccess.com/full/1673318.jpg")',
            }}>

            <div className="max-w-md mx-auto mt-8 p-8 border rounded shadow" >
                <h2 className="text-2xl font-semibold mb-4">User Login</h2>
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

                    <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLogin}>
                        Login
                    </button>
                    <div className="mt-4 text-sm bg-white">
                        <p>
                            Don't have an account?{' '}
                            <Link to="/registration" className="text-blue-500 hover:underline">
                                Register here
                            </Link>
                        </p>
                    </div>
                </form>
                {errorMessage && (
                    <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded">
                        <p className="text-red-800">{errorMessage}</p>
                    </div>
                )}
            </div >
        </div>

    );
};

export default UserLogin;
