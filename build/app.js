"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("./routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use(_express["default"].json());
app.get('/', function (req, res) {
  return res.status(200).send({
    'message': 'Congratulations!'
  });
});
app.use('/api/v1', _routes["default"]);
app.listen(9000);
console.log('app running on port ', 9000);
var _default = app;
exports["default"] = _default;