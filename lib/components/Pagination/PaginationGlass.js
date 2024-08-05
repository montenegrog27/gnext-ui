"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var PaginationGlass = function PaginationGlass(_ref) {
  var currentPage = _ref.currentPage,
    totalPages = _ref.totalPages,
    onPageChange = _ref.onPageChange,
    _ref$range = _ref.range,
    range = _ref$range === void 0 ? 2 : _ref$range,
    _ref$currentPageBgCol = _ref.currentPageBgColor,
    currentPageBgColor = _ref$currentPageBgCol === void 0 ? 'bg-blue-500' : _ref$currentPageBgCol,
    _ref$currentPageTextC = _ref.currentPageTextColor,
    currentPageTextColor = _ref$currentPageTextC === void 0 ? 'text-white' : _ref$currentPageTextC;
  var getPageRange = function getPageRange() {
    var start = Math.max(1, currentPage - range);
    var end = Math.min(totalPages, currentPage + range);
    return {
      start: start,
      end: end
    };
  };
  var _getPageRange = getPageRange(),
    start = _getPageRange.start,
    end = _getPageRange.end;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-between p-4 bg-white/30 backdrop-blur-lg border border-gray-300 rounded-lg shadow-lg min-w-[500px]"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return onPageChange(currentPage - 1);
    },
    disabled: currentPage === 1,
    className: "bg-gray-200 p-2 rounded-lg shadow-sm disabled:opacity-50"
  }, "< Previous"), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center space-x-2"
  }, currentPage > range + 1 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return onPageChange(1);
    },
    className: "bg-gray-200 p-2 rounded-lg shadow-sm"
  }, "1"), /*#__PURE__*/_react["default"].createElement("span", null, "...")), Array.from({
    length: end - start + 1
  }, function (_, index) {
    return start + index;
  }).map(function (page) {
    return /*#__PURE__*/_react["default"].createElement("button", {
      key: page,
      onClick: function onClick() {
        return onPageChange(page);
      },
      className: "p-2 rounded-lg shadow-sm ".concat(page === currentPage ? "".concat(currentPageBgColor, " ").concat(currentPageTextColor) : 'bg-gray-200')
    }, page);
  }), currentPage < totalPages - range && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("span", null, "..."), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return onPageChange(totalPages);
    },
    className: "bg-gray-200 p-2 rounded-lg shadow-sm"
  }, totalPages))), /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return onPageChange(currentPage + 1);
    },
    disabled: currentPage === totalPages,
    className: "bg-gray-200 p-2 rounded-lg shadow-sm disabled:opacity-50"
  }, "Next >"));
};
var _default = exports["default"] = PaginationGlass;