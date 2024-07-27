// src/components/ContainerNeomorphism.js
import React from 'react';

const ContainerNeo = ({ children, className }) => {
  return (
    <div className={`p-6 bg-gray-200 rounded-lg border border-gray-300 shadow-lg shadow-gray-500/50 ${className}`}>
      {children}
    </div>
  );
};

export default ContainerNeo;
