import MyPromise from './MyPromise3.js';

let promise1 = new MyPromise((resolve, reject) => {
    resolve('promise1')
    // reject('Error')
})

let promise2 = promise1.then(value => {
    // return new Error('Error')
    return new MyPromise((resolve, reject) => {
        setTimeout(() => {
            resolve(
                new MyPromise((resolve, reject) => {
                    resolve(
                        new MyPromise((resolve) => {
                            resolve('resolve')
                        })
                    )
                })
            )
        }, 2000)

        // throw new Error('Error')

        // resolve('resolve')

        // reject('reject')
    })
}, reason => {
    return reason
})

promise2.then().then().then(value => {
    // throw Error('error2')
    console.log(value);
}, reason => {
    console.log(reason);
}).catch(e => {
    console.log(e);
})