// 统一暴露
let arr = [1,2,3,42,4];

function demo2() {
    console.log('我是module2');
}
function test2() {
    console.log('w ye shi module2');
}

export {demo2,test2};