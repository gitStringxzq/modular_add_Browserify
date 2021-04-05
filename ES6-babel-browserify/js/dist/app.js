'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 分别暴露和统一暴露使用同一种方法
console.log(_module2.data);

// 最后默认暴露使用
// 分别暴露和统一暴露使用同一种方法

(0, _module2.demo1)();
(0, _module.demo2)();
(0, _module2.test1)();
(0, _module.test2)();
console.log(_module4.default.age, _module4.default.name);
_module4.default.spack();

// // 接着安装babel-cli, babel-preset-es2015和browserify:
// 第一步，全局安装：```npm install babel-cli browserify -g ```
// 第二步，局部安装：```npm install babel-preset-es2015 --save-dev```
// 备注：若全局已经安装过browserify，可以在第一步中去除browserify