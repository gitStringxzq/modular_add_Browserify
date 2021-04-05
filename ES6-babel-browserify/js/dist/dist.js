(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _module = require('./module1');

var _module2 = require('./module2');

var _module3 = require('./module3');

var _module4 = _interopRequireDefault(_module3);

var _uniq = require('uniq');

var _uniq2 = _interopRequireDefault(_uniq);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 最后默认暴露使用
// 分别暴露和统一暴露使用同一种方法
console.log(_module2.data);

// 第三方模块的引入方式


// 分别暴露和统一暴露使用同一种方法

(0, _module2.demo1)();
(0, _module.demo2)();
(0, _module2.test1)();
(0, _module.test2)();
console.log(_module4.default.age, _module4.default.name);
_module4.default.spack();
console.log((0, _uniq2.default)(_module4.default.arr));

// // 接着安装babel-cli, babel-preset-es2015和browserify:
// 第一步，全局安装：```npm install babel-cli browserify -g ```
// 第二步，局部安装：```npm install babel-preset-es2015 --save-dev```
// 备注：若全局已经安装过browserify，可以在第一步中去除browserify
},{"./module1":2,"./module2":3,"./module3":4,"uniq":5}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 统一暴露
var arr = [1, 2, 3, 42, 4];

function demo2() {
    console.log('我是module2');
}
function test2() {
    console.log('w ye shi module2');
}

exports.demo2 = demo2;
exports.test2 = test2;
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.demo1 = demo1;
exports.test1 = test1;
//分别暴露
var data = exports.data = 'xzq';
function demo1() {
    console.log('w sjo module1'.toUpperCase());
}
function test1() {
    console.log('w ye shi module1'.toUpperCase());
}
},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// 默认暴露 只能暴露一次
exports.default = {
    name: 'xzq',
    age: 12,
    spack: function spack() {
        console.log('\u6211\u7684\u540D\u5B57\u662F' + this.name + ',\u6211\u7684\u5E74\u9F84\u662F' + this.age);
    },

    arr: [1, 2, 3, 4, 543, 4, 4, 4, 4, 56]
};
},{}],5:[function(require,module,exports){
"use strict"

function unique_pred(list, compare) {
  var ptr = 1
    , len = list.length
    , a=list[0], b=list[0]
  for(var i=1; i<len; ++i) {
    b = a
    a = list[i]
    if(compare(a, b)) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique_eq(list) {
  var ptr = 1
    , len = list.length
    , a=list[0], b = list[0]
  for(var i=1; i<len; ++i, b=a) {
    b = a
    a = list[i]
    if(a !== b) {
      if(i === ptr) {
        ptr++
        continue
      }
      list[ptr++] = a
    }
  }
  list.length = ptr
  return list
}

function unique(list, compare, sorted) {
  if(list.length === 0) {
    return list
  }
  if(compare) {
    if(!sorted) {
      list.sort(compare)
    }
    return unique_pred(list, compare)
  }
  if(!sorted) {
    list.sort()
  }
  return unique_eq(list)
}

module.exports = unique

},{}]},{},[1]);
