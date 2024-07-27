"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/TableCommon.js

var Table = function Table(_ref) {
  var headers = _ref.headers,
    rows = _ref.rows;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "min-w-full bg-white border border-gray-300 rounded-lg shadow-md"
  }, /*#__PURE__*/_react["default"].createElement("thead", {
    className: "bg-gray-100 border-b border-gray-300"
  }, /*#__PURE__*/_react["default"].createElement("tr", null, headers.map(function (header, index) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: index,
      className: "px-6 py-3 text-left text-gray-600 font-medium"
    }, header);
  }), /*#__PURE__*/_react["default"].createElement("th", {
    className: "px-6 py-3 text-left text-gray-600 font-medium"
  }, "Actions"))), /*#__PURE__*/_react["default"].createElement("tbody", null, rows.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: rowIndex,
      className: "border-b border-gray-300"
    }, headers.map(function (header, headerIndex) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: headerIndex,
        className: "px-6 py-4 text-gray-700"
      }, header === 'Image' && row[header] && /*#__PURE__*/_react["default"].createElement("img", {
        src: row[header].src,
        alt: "avatar",
        className: "w-12 h-12 rounded-full"
      }), header !== 'Image' && row[header]);
    }), /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-6 py-4 text-gray-700"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "bg-blue-500 text-white px-4 py-2 rounded"
    }, "Button")));
  }))));
};
var _default = exports["default"] = Table;