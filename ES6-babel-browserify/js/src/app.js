// 分别暴露和统一暴露使用同一种方法
import {demo2,test2} from './module1'

// 分别暴露和统一暴露使用同一种方法
import {data,test1,demo1} from './module2';

// 最后默认暴露使用
import module3 from './module3';

// 第三方模块的引入方式
import uniq from 'uniq'
console.log(data);
demo1();
demo2();
test1();
test2()
console.log(module3.age,module3.name);
module3.spack();
console.log(uniq(module3.arr));

// // 接着安装babel-cli, babel-preset-es2015和browserify:
// 第一步，全局安装：```npm install babel-cli browserify -g ```
// 第二步，局部安装：```npm install babel-preset-es2015 --save-dev```
// 备注：若全局已经安装过browserify，可以在第一步中去除browserify

