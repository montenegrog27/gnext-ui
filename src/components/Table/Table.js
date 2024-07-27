import React from 'react';

const Table = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
        <thead className="bg-gray-100 border-b border-gray-300">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left text-gray-600 font-medium">
                {header}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-gray-600 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-300">
              {headers.map((header, headerIndex) => (
                <td key={headerIndex} className="px-6 py-4 text-gray-700">
                  {header === 'Image' && row[header] && (
                    <img src={row[header].src} alt="avatar" className="w-12 h-12 rounded-full" />
                  )}
                  {header !== 'Image' && row[header]}
                </td>
              ))}
              <td className="px-6 py-4 text-gray-700">
                <button className="bg-blue-500 text-white px-4 py-2 rounded">Button</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
