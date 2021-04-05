let module1 = require('./module/module1');
let module2 = require('./module/module2');
let module3 = require('./module/module3');
let i = require('uniq');

console.log(module1.data);
module1.test();
module2();
console.log(i(module3.a));