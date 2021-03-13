"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Input;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Input(_ref) {
  var type = _ref.type,
      value = _ref.value,
      onChangeText = _ref.onChangeText;

  var onChange = function onChange(_ref2) {
    var target = _ref2.target;
    onChangeText(target.value);
  };

  return /*#__PURE__*/_react.default.createElement("input", {
    type: type,
    value: value,
    onChange: onChange
  });
}