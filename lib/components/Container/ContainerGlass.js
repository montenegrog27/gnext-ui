"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/ContainerGlassmorphism.js

var ContainerGlass = function ContainerGlass(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-6 bg-white/30 backdrop-blur-lg border border-gray-300 rounded-lg shadow-md ".concat(className)
  }, children);
};
var _default = exports["default"] = ContainerGlass;