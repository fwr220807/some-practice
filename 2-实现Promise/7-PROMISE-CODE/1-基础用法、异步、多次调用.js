import MyPromise1 from './MyPromise1.js';
// 基础、异步、多次调用用例
let promise = new MyPromise1((resolve, reject) => {
    // resolve('success')
    // reject('Error')
    // throw new Error('Exception: Error')
    setTimeout(() => {
        resolve('Success')
    }, 2000)
})

promise.then(value => {
    console.log('FullFilled1: ' + value);
}, reason => {
    console.log('Rejected1: ' + reason);
})

promise.then(value => {
    console.log('FullFilled2: ' + value);
}, reason => {
    console.log('Rejected2: ' + reason);
})