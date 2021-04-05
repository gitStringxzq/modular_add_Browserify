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