// src/components/ButtonNeomorphism.js
import React from 'react';

const ButtonNeo = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-200 shadow-inner shadow-gray-500/50 border border-gray-300 text-gray-900 font-bold py-2 px-4 rounded-lg hover:shadow-lg transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default ButtonNeo;
