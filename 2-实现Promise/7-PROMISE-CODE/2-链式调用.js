let promise = new Promise((resolve, reject) => {
    resolve('First resolve')
})

// First resolve
// promise.then(res => {
//     return res
// }).then(res => {
//     console.log(res);  // First resolve
// })

// 通过新的 promise resolve 结果
// promise.then(res => {
//     return res
// }).then(res => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { resolve(res) }, 2000)
//     })
// }).then(res => {
//     console.log(res); // First resolve
// })

// 通过新的 promise reject 原因
// promise.then(value => {
//     return value
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { reject('ERROR') }, 2000)
//     })
// }).then(value => {
//     console.log(value);
// }, reason => {
//     console.log('Rejected: ' + reason); // Rejected: ERROR
// })

// then 走了失败的回调函数后，再走 then
// promise.then(value => {
//     return value
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { reject('ERROR') }, 2000)
//     })
// }).then(value => {
//     console.log(value);
// }, reason => {
//     console.log('Rejected: ' + reason); // Rejected: ERROR
//     // 默认 return undefined
// }).then((value) => {
//     console.log('Fulfilled: ' + value);
// }, (reason) => {
//     console.log('Rejected: ' + reason); // Fulfilled: undefined
// })

// 在 then 当中 throw Error
// promise.then(value => {
//     return value
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { reject('ERROR') }, 2000)
//     })
// }).then(value => {
//     console.log(value);
// }, reason => {
//     console.log('Rejected: ' + reason); // Rejected: ERROR
//     // 默认 return undefined
// }).then((value) => {
//     throw new Error('Throw Error')
// }).then((value) => {
//     console.log(value);
// }, (reason) => {
//     console.log('Exception: ' + reason); // Exception: Error: Throw Error
// })

// promise.then(value => {
//     return value
// }).then(value => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => { reject('ERROR') }, 2000)
//     })
// }).then(value => {
//     console.log(value);
// }, reason => {
//     console.log('Rejected: ' + reason); // Rejected: ERROR
//     // 默认 return undefined
// }).then((value) => {
//     throw new Error('Throw Error')
// }).then((value) => {
//     console.log(value);
// }, (reason) => {
//     console.log('Then: ' + reason); // Then:  Error: Throw Error
// }).catch((reason) => {
//     console.log('Catch: ' + reason);
// })

// catch 在 Promise 的源码层面上就是一个 then, Catch 也是遵循 then 的运行逻辑

// 成功的条件
// then return 普通的 JavaScript value
// then return 新的 promise 成功态的结果 value

// 失败的条件
// then return 新的 promise 失败态的原因 reason
// then 抛出了异常 throw new Error

// promise 链式调用
// JavaScript JQuery return this
// 但 promise 要求 then 里不具备 this
// return new Promise

// let promise2 = promise.then(value => {
//     console.log(1);
// }).then(value => {
//     console.log(2);
// })

let promise2 = promise.then(value => {
    console.log(1);
})

promise2.then(value => {
    console.log(2);
})