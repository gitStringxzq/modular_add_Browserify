'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module.data);
(0, _module.demo1)();
(0, _module2.demo2)();
(0, _module.test1)();
(0, _module2.test2)();
console.log(_module4.default);
_module4.default.spack();
console.log((0, _uniq2.default)(_module4.default.arr));