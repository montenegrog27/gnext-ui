"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/ContainerNeomorphism.js

var ContainerNeo = function ContainerNeo(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-6 bg-gray-200 rounded-lg border border-gray-300 shadow-lg shadow-gray-500/50 ".concat(className)
  }, children);
};
var _default = exports["default"] = ContainerNeo;