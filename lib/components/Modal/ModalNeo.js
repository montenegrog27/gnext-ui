"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/ModalNeomorphism.js

var ModalNeo = function ModalNeo(_ref) {
  var title = _ref.title,
    content = _ref.content,
    isOpen = _ref.isOpen,
    onClose = _ref.onClose;
  if (!isOpen) return null;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed z-10 inset-0 overflow-y-auto"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex items-center justify-center min-h-screen px-4 py-6 text-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "fixed inset-0 bg-gray-500 opacity-50",
    "aria-hidden": "true"
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "relative inline-block bg-gray-200 shadow-inner shadow-gray-500/50 border border-gray-300 rounded-lg px-6 py-8 text-left overflow-hidden shadow-lg transform transition-all sm:my-8 sm:max-w-lg sm:w-full"
  }, /*#__PURE__*/_react["default"].createElement("h3", {
    className: "text-lg leading-6 font-medium text-gray-900"
  }, title), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-2"
  }, /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-500"
  }, content)), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mt-5 sm:mt-6"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    type: "button",
    onClick: onClose,
    className: "inline-flex justify-center w-full rounded-md border border-transparent shadow-md px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:text-sm"
  }, "Close")))));
};
var _default = exports["default"] = ModalNeo;