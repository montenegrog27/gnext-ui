import React from 'react';

const PaginationGlass = ({
  currentPage,
  totalPages,
  onPageChange,
  range = 2,
  currentPageBgColor = 'bg-blue-500', // Color de fondo por defecto para la página actual
  currentPageTextColor = 'text-white' // Color del texto por defecto para la página actual
}) => {
  const getPageRange = () => {
    const start = Math.max(1, currentPage - range);
    const end = Math.min(totalPages, currentPage + range);
    return { start, end };
  };

  const { start, end } = getPageRange();

  return (
    <div className="flex items-center justify-between p-4 bg-white/30 backdrop-blur-lg border border-gray-300 rounded-lg shadow-lg min-w-[500px]">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="bg-gray-200 p-2 rounded-lg shadow-sm disabled:opacity-50"
      >
        &lt; Previous
      </button>

      <div className="flex items-center space-x-2">
        {currentPage > range + 1 && (
          <>
            <button
              onClick={() => onPageChange(1)}
              className="bg-gray-200 p-2 rounded-lg shadow-sm"
            >
              1
            </button>
            <span>...</span>
          </>
        )}

        {Array.from({ length: end - start + 1 }, (_, index) => start + index).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`p-2 rounded-lg shadow-sm ${
              page === currentPage ? `${currentPageBgColor} ${currentPageTextColor}` : 'bg-gray-200'
            }`}
          >
            {page}
          </button>
        ))}

        {currentPage < totalPages - range && (
          <>
            <span>...</span>
            <button
              onClick={() => onPageChange(totalPages)}
              className="bg-gray-200 p-2 rounded-lg shadow-sm"
            >
              {totalPages}
            </button>
          </>
        )}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="bg-gray-200 p-2 rounded-lg shadow-sm disabled:opacity-50"
      >
        Next &gt;
      </button>
    </div>
  );
};

export default PaginationGlass;
