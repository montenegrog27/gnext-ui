"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var SwitchGlass = function SwitchGlass(_ref) {
  var checked = _ref.checked,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement("div", {
    onClick: onChange,
    className: "relative inline-flex items-center h-6 rounded-full w-11 cursor-pointer ".concat(checked ? 'bg-blue-500' : 'bg-gray-300'),
    style: {
      backdropFilter: 'blur(10px)',
      borderRadius: '12px'
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out ".concat(checked ? 'translate-x-5' : 'translate-x-0')
  }));
};
var _default = exports["default"] = SwitchGlass;