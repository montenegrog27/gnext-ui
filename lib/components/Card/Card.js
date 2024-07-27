"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Card = function Card(_ref) {
  var image = _ref.image,
    title = _ref.title,
    subtitle = _ref.subtitle,
    content = _ref.content,
    icons = _ref.icons;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "max-w-xs rounded-lg border border-gray-300 shadow-md overflow-hidden bg-white"
  }, image && /*#__PURE__*/_react["default"].createElement("img", {
    className: "w-full h-48 object-cover",
    src: image.src,
    alt: title
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "px-6 py-4"
  }, title && /*#__PURE__*/_react["default"].createElement("div", {
    className: "font-bold text-xl mb-1 text-gray-900"
  }, title), subtitle && /*#__PURE__*/_react["default"].createElement("div", {
    className: "text-gray-600 text-sm mb-2"
  }, subtitle), content && /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-gray-700 text-base mb-4"
  }, content), icons && /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex space-x-4"
  }, icons.map(function (icon, index) {
    return /*#__PURE__*/_react["default"].createElement("a", {
      key: index,
      href: icon.link,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "text-gray-600 hover:text-gray-800"
    }, /*#__PURE__*/_react["default"].createElement("i", {
      className: "fas fa-".concat(icon.icon, " text-lg")
    }));
  }))));
};
var _default = exports["default"] = Card;