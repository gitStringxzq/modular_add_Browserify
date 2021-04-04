let module1 = require('./module/module1');
let module2 = require('./module/module2');
let module3 = require('./module/module3');
let u = require('uniq');

module1.test();
console.log(module1.data);
module2();
console.log(module3.a);
console.log(u(module3.a));