// src/components/SidebarNeumorphism.js
import React, { useState } from 'react';

const SidebarNeo = ({ items }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="w-64 min-h-screen bg-gray-100 border border-gray-300 rounded-lg shadow-neumorphism">
      <ul className="space-y-4 p-4">
        {items.map((item, index) => (
          <li key={index}>
            {item.subItems ? (
              <div>
                <button 
                  className="w-full text-left px-4 py-2 font-semibold text-gray-700 hover:bg-gray-200 rounded shadow-inner-neumorphism"
                  onClick={() => toggleDropdown(index)}
                >
                  {item.title}
                </button>
                {openDropdown === index && (
                  <ul className="pl-4 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex}>
                        <a href={subItem.link} className="block px-4 py-2 text-gray-700 hover:bg-gray-300 rounded shadow-inner-neumorphism">
                          {subItem.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <a 
                href={item.link} 
                className="block px-4 py-2 font-semibold text-gray-700 hover:bg-gray-200 rounded shadow-inner-neumorphism"
              >
                {item.title}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarNeo;
