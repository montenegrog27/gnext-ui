// src/components/ContainerGlassmorphism.js
import React from 'react';

const ContainerGlass = ({ children, className }) => {
  return (
    <div className={`p-6 bg-white/30 backdrop-blur-lg border border-gray-300 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default ContainerGlass;
