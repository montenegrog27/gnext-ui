import React from 'react';

const Card = ({ image, title, subtitle, content, icons }) => {
  return (
    <div className="max-w-xs rounded-lg border border-gray-300 shadow-md overflow-hidden bg-white">
      {image && (
        <img className="w-full h-48 object-cover" src={image.src} alt={title} />
      )}
      <div className="px-6 py-4">
        {title && (
          <div className="font-bold text-xl mb-1 text-gray-900">{title}</div>
        )}
        {subtitle && (
          <div className="text-gray-600 text-sm mb-2">{subtitle}</div>
        )}
        {content && (
          <p className="text-gray-700 text-base mb-4">
            {content}
          </p>
        )}
        {icons && (
          <div className="flex space-x-4">
            {icons.map((icon, index) => (
              <a key={index} href={icon.link} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-800">
                <i className={`fas fa-${icon.icon} text-lg`}></i>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
