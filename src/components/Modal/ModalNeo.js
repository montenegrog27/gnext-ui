// src/components/ModalNeomorphism.js
import React from 'react';

const ModalNeo = ({ title, content, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4 py-6 text-center">
        <div className="fixed inset-0 bg-gray-500 opacity-50" aria-hidden="true"></div>
        <div className="relative inline-block bg-gray-200 shadow-inner shadow-gray-500/50 border border-gray-300 rounded-lg px-6 py-8 text-left overflow-hidden shadow-lg transform transition-all sm:my-8 sm:max-w-lg sm:w-full">
          <h3 className="text-lg leading-6 font-medium text-gray-900">{title}</h3>
          <div className="mt-2">
            <p className="text-sm text-gray-500">{content}</p>
          </div>
          <div className="mt-5 sm:mt-6">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex justify-center w-full rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNeo;
