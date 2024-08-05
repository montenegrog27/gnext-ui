import React, { useState } from 'react';
import { TrashIcon, PencilIcon } from '@heroicons/react/24/solid'; 
import SwitchGlass from '../Switch/SwitchGlass';

const TableGlass = ({
  headers,
  rows,
  imageColumns = [],
  showButton = true,
  showDelete = false,
  showEdit = false,
  showSwitch = false,
  onDelete,
  onEdit,
  onSwitchChange,
  headerTitles = {
    actions: "Actions",
    edit: "Edit",
    delete: "Delete",
    switch: "Switch"
  }
}) => {
  const [switchStates, setSwitchStates] = useState(
    rows.map(() => false) 
  );

  const handleSwitchChange = (rowIndex) => {
    const newSwitchStates = [...switchStates];
    newSwitchStates[rowIndex] = !newSwitchStates[rowIndex];
    setSwitchStates(newSwitchStates);
    if (onSwitchChange) onSwitchChange(rowIndex, newSwitchStates[rowIndex]);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white/30 backdrop-blur-lg  rounded-lg shadow-lg">
        <thead className="bg-white/20 border-b border-gray-300">
          <tr>
            {headers.map((header, index) => (
              <th key={index} className="px-6 py-3 text-left text-gray-900 font-medium">
                {header}
              </th>
            ))}
            {showButton && (
              <th className="px-6 py-3 text-left text-gray-900 font-medium">
                {headerTitles.actions}
              </th>
            )}
            {showEdit && (
              <th className="px-6 py-3 text-left text-gray-900 font-medium">
                {headerTitles.edit}
              </th>
            )}
            {showDelete && (
              <th className="px-6 py-3 text-left text-gray-900 font-medium">
                {headerTitles.delete}
              </th>
            )}
            {showSwitch && (
              <th className="px-6 py-3 text-left text-gray-900 font-medium">
                {headerTitles.switch}
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-300">
              {headers.map((header, headerIndex) => (
                <td key={headerIndex} className="px-6 py-4 text-gray-900">
                  {imageColumns.includes(header) && row[header] ? (
                    <img src={row[header]} alt="avatar" className="w-12 h-12 rounded-full" />
                  ) : (
                    row[header]
                  )}
                </td>
              ))}
              {showSwitch && (
                <td className="px-6 py-4 text-gray-900">
                  <SwitchGlass
                    checked={switchStates[rowIndex]}
                    onChange={() => handleSwitchChange(rowIndex)}
                    className="bg-gray-200 p-1 rounded"
                  />
                </td>
              )}
              {showButton && (
                <td className="px-6 py-4 text-gray-900">
                  <button
                    className="bg-white/60 backdrop-blur-lg text-gray-900 px-4 py-2 rounded"
                    onClick={() => onButtonClick(rowIndex)}
                  >
                    Button
                  </button>
                </td>
              )}
              {showEdit && (
                <td className="px-6 py-4 text-gray-900">
                  <button
                    className="bg-blue-100 text-blue-500 p-2 rounded-full"
                    onClick={() => onEdit(rowIndex)}
                  >
                    <PencilIcon className="w-5 h-5" />
                  </button>
                </td>
              )}
              {showDelete && (
                <td className="px-6 py-4 text-gray-900">
                  <button
                    className="bg-red-100 text-red-500 p-2 rounded-full"
                    onClick={() => onDelete(rowIndex)}
                  >
                    <TrashIcon className="w-5 h-5" />
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableGlass;
