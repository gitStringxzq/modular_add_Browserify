import {data,demo1,test1} from './module1'

import {demo2,test2} from './module2'
import module3 from './module3'
import u from 'uniq'

console.log(data);
demo1();
demo2();
test1();
test2();
console.log(module3);
module3.spack();
console.log(u(module3.arr));