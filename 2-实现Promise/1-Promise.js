// 执行 t 次 doSth 函数之后，才执行 cb
// function doSth(t, cb) {
//     return function () {
//         if (--t === 0) {
//             cb()
//         }
//     }
// }

// function logSth(cb) {
//     console.log('我终于找到女朋友了！芜湖～～');
//     cb()
// }

// function logSth2(cb) {
//     console.log('我分手了，呜呜...');
//     cb()
// }

// function logSth3() {
//     console.log('我们又和好了');
// }

// 回调地狱：出现在异步任务中的同步任务
// function doSth(t) {
//     return function () {
//         if (--t === 0) {
//             logSth(function () {
//                 logSth2(function () {
//                     logSth3()
//                 })
//             })
//         }
//     }
// }

// let fn = doSth(4)

// let fn = doSth(4, logSth.bind(null, logSth2.bind(null, logSth3)))

// fn()
// fn()
// fn()
// fn()

// promise 承诺： 解决异步流程化的一种手段
// Promise 构造函数
// Promise 只有参数 executor 执行器
// executor 的参数 -> resolve、reject
// executor 在 new Promise 时调用

// executor 是同步执行
// let promise = new Promise((resolve, reject) => {
//     resolve('承诺实现')
//     // reject('承诺石沉大海')
// })
// then 是异步调用
// promise.then((res) => {
//     console.log('Then');
//     // console.log(res);
// }, (err) => {
//     console.log(err);
// })

// console.log('Global');