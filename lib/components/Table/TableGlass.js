"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _solid = require("@heroicons/react/24/solid");
var _SwitchGlass = _interopRequireDefault(require("../Switch/SwitchGlass"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var TableGlass = function TableGlass(_ref) {
  var headers = _ref.headers,
    rows = _ref.rows,
    _ref$imageColumns = _ref.imageColumns,
    imageColumns = _ref$imageColumns === void 0 ? [] : _ref$imageColumns,
    _ref$showButton = _ref.showButton,
    showButton = _ref$showButton === void 0 ? true : _ref$showButton,
    _ref$showDelete = _ref.showDelete,
    showDelete = _ref$showDelete === void 0 ? false : _ref$showDelete,
    _ref$showEdit = _ref.showEdit,
    showEdit = _ref$showEdit === void 0 ? false : _ref$showEdit,
    _ref$showSwitch = _ref.showSwitch,
    showSwitch = _ref$showSwitch === void 0 ? false : _ref$showSwitch,
    onDelete = _ref.onDelete,
    onEdit = _ref.onEdit,
    onSwitchChange = _ref.onSwitchChange,
    _ref$headerTitles = _ref.headerTitles,
    headerTitles = _ref$headerTitles === void 0 ? {
      actions: "Actions",
      edit: "Edit",
      "delete": "Delete",
      "switch": "Switch"
    } : _ref$headerTitles;
  var _useState = (0, _react.useState)(rows.map(function () {
      return false;
    })),
    _useState2 = _slicedToArray(_useState, 2),
    switchStates = _useState2[0],
    setSwitchStates = _useState2[1];
  var handleSwitchChange = function handleSwitchChange(rowIndex) {
    var newSwitchStates = _toConsumableArray(switchStates);
    newSwitchStates[rowIndex] = !newSwitchStates[rowIndex];
    setSwitchStates(newSwitchStates);
    if (onSwitchChange) onSwitchChange(rowIndex, newSwitchStates[rowIndex]);
  };
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/_react["default"].createElement("table", {
    className: "min-w-full bg-white/30 backdrop-blur-lg  rounded-lg shadow-lg"
  }, /*#__PURE__*/_react["default"].createElement("thead", {
    className: "bg-white/20 border-b border-gray-300"
  }, /*#__PURE__*/_react["default"].createElement("tr", null, headers.map(function (header, index) {
    return /*#__PURE__*/_react["default"].createElement("th", {
      key: index,
      className: "px-6 py-3 text-left text-gray-900 font-medium"
    }, header);
  }), showButton && /*#__PURE__*/_react["default"].createElement("th", {
    className: "px-6 py-3 text-left text-gray-900 font-medium"
  }, headerTitles.actions), showEdit && /*#__PURE__*/_react["default"].createElement("th", {
    className: "px-6 py-3 text-left text-gray-900 font-medium"
  }, headerTitles.edit), showDelete && /*#__PURE__*/_react["default"].createElement("th", {
    className: "px-6 py-3 text-left text-gray-900 font-medium"
  }, headerTitles["delete"]), showSwitch && /*#__PURE__*/_react["default"].createElement("th", {
    className: "px-6 py-3 text-left text-gray-900 font-medium"
  }, headerTitles["switch"]))), /*#__PURE__*/_react["default"].createElement("tbody", null, rows.map(function (row, rowIndex) {
    return /*#__PURE__*/_react["default"].createElement("tr", {
      key: rowIndex,
      className: "border-b border-gray-300"
    }, headers.map(function (header, headerIndex) {
      return /*#__PURE__*/_react["default"].createElement("td", {
        key: headerIndex,
        className: "px-6 py-4 text-gray-900"
      }, imageColumns.includes(header) && row[header] ? /*#__PURE__*/_react["default"].createElement("img", {
        src: row[header],
        alt: "avatar",
        className: "w-12 h-12 rounded-full"
      }) : row[header]);
    }), showSwitch && /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-6 py-4 text-gray-900"
    }, /*#__PURE__*/_react["default"].createElement(_SwitchGlass["default"], {
      checked: switchStates[rowIndex],
      onChange: function onChange() {
        return handleSwitchChange(rowIndex);
      },
      className: "bg-gray-200 p-1 rounded"
    })), showButton && /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-6 py-4 text-gray-900"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "bg-white/60 backdrop-blur-lg text-gray-900 px-4 py-2 rounded",
      onClick: function onClick() {
        return onButtonClick(rowIndex);
      }
    }, "Button")), showEdit && /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-6 py-4 text-gray-900"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "bg-blue-100 text-blue-500 p-2 rounded-full",
      onClick: function onClick() {
        return onEdit(rowIndex);
      }
    }, /*#__PURE__*/_react["default"].createElement(_solid.PencilIcon, {
      className: "w-5 h-5"
    }))), showDelete && /*#__PURE__*/_react["default"].createElement("td", {
      className: "px-6 py-4 text-gray-900"
    }, /*#__PURE__*/_react["default"].createElement("button", {
      className: "bg-red-100 text-red-500 p-2 rounded-full",
      onClick: function onClick() {
        return onDelete(rowIndex);
      }
    }, /*#__PURE__*/_react["default"].createElement(_solid.TrashIcon, {
      className: "w-5 h-5"
    }))));
  }))));
};
var _default = exports["default"] = TableGlass;