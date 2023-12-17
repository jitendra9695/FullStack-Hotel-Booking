// ErrorPopup.js

import React from 'react';

function ErrorPopup({ onClose, message }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="bg-white p-4 rounded-md shadow-md">
        <p className="text-red-500">{message}</p>
        <button className="mt-4 bg-red-500 text-white p-2 rounded" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ErrorPopup;
