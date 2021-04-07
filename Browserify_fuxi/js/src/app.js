let module1 = require('./module1');
let module2 = require('./module2');
let module3 = require('./module3');
let u = require('uniq');

console.log(module1.data);
module1.test();
module2();
console.log(u(module3.arr));