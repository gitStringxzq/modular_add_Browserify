//统一暴露
let data = 'module1';

function demo1 (){
    console.log('我是module1');
}
function test1() {
    console.log('我也是Module1');
}

export {data,demo1,test1}