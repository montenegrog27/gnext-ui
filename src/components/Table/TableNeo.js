import React from 'react';

const TableNeo = ({ headers, rows }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-gray-100 border border-gray-300 rounded-lg shadow-neumorphism">
        <thead className="bg-gray-200 border-b border-gray-300 shadow-inner-neumorphism">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left text-gray-700 font-medium">
                {header}
              </th>
            ))}
            <th className="px-6 py-3 text-left text-gray-700 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-300">
              {headers.map((header, headerIndex) => (
                <td key={headerIndex} className="px-6 py-4 text-gray-700">
                  {header === 'Image' && row[header] && (
                    <img src={row[header]} alt="avatar" className="w-12 h-12 rounded-full object-cover" />
                  )}
                  {header !== 'Image' && row[header]}
                </td>
              ))}
              <td className="px-6 py-4 text-gray-700">
                <button className="bg-gray-300 shadow-neumorphism px-4 py-2 rounded">
                  Button
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableNeo;
