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