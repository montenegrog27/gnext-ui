"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
// src/components/ButtonNeomorphism.js

var ButtonNeo = function ButtonNeo(_ref) {
  var children = _ref.children,
    onClick = _ref.onClick,
    className = _ref.className;
  return /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onClick,
    className: "bg-gray-200 shadow-inner shadow-gray-500/50 border border-gray-300 text-gray-900 font-bold py-2 px-4 rounded-lg hover:shadow-lg transition-all ".concat(className)
  }, children);
};
var _default = exports["default"] = ButtonNeo;