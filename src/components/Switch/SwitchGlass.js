import React from 'react';

const SwitchGlass = ({ checked, onChange }) => {
  return (
    <div
      onClick={onChange}
      className={`relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer ${checked ? 'bg-blue-500' : 'bg-gray-300'}`}
      style={{ backdropFilter: 'blur(10px)', borderRadius: '12px' }}
    >
      <span
        className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out ${checked ? 'translate-x-5' : 'translate-x-0'}`}
      />
    </div>
  );
};

export default SwitchGlass;
