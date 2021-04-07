'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
//统一暴露
var data = 'module1';

function demo1() {
    console.log('我是module1');
}
function test1() {
    console.log('我也是Module1');
}

exports.data = data;
exports.demo1 = demo1;
exports.test1 = test1;