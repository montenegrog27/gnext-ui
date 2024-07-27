// src/components/Button.js
import React from 'react';

const Button = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white/30 backdrop-blur-lg border border-gray-300 shadow-md text-gray-900 font-bold py-2 px-4 rounded-md hover:bg-white/40 transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
