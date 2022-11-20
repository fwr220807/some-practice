const PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'


class MyPromise3 {
    constructor(executor) {
        this.status = PENDING
        this.value = undefined
        this.reason = undefined

        this.onFulfilledCallBacks = []
        this.onRejectedCallBacks = []

        const resolve = (value) => {
            if (this.status === PENDING) {
                this.status = FULFILLED
                this.value = value
                // 发布
                this.onFulfilledCallBacks.forEach(fn => fn())
            }
        }

        const reject = (reason) => {
            if (this.status === PENDING) {
                this.status = REJECTED
                this.reason = reason
                // 发布
                this.onRejectedCallBacks.forEach(fn => fn())
            }
        }

        try {
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }

    // x 可能是 普通值 或 promise,then 函数会返回一个 promise
    then(onFulfilled, onRejected) {
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
        onRejected = typeof onRejected === 'function' ? onRejected : reason => { throw reason }

        let promise2 = new MyPromise3((resolve, reject) => {
            if (this.status === FULFILLED) {
                setTimeout(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)
            }

            if (this.status === REJECTED) {
                setTimeout(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                }, 0)

            }
            // 订阅发布模式
            // 当 PENDING 状态时，先收集 then 之后的执行函数，等状态确定后再执行
            if (this.status === PENDING) {
                // 订阅
                this.onFulfilledCallBacks.push(() => {
                    try {
                        let x = onFulfilled(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
                this.onRejectedCallBacks.push(() => {
                    try {
                        let x = onRejected(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (e) {
                        reject(e)
                    }
                })
            }
        })
        return promise2
    }

    // 调用 then 函数
    catch(errorCallback) {
        return this.then(null, errorCallback)
    }
}

// 判断 x 是不是 promise 并进行处理
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        return reject(new TypeError('Chaining cycle detected for promise #<MyPromise3>'))
    }

    let called = false // 控制 then 函数返回 Promise 时重复调用 resolve 和 reject 的情况

    if ((typeof x === 'object' && x !== null) || (typeof x === 'function')) {
        try { // 预防 x.then 读取时抛出异常
            let then = x.then

            if (typeof then === 'function') { // 认定为 Promise，所以执行 then 函数o取出 Promise 中的值
                then.call(x, (y) => { // 即相当于在 then 函数中 return new Promise((resolve, reject) => { resolve(a)}) a的值传递到 y
                    if (called) return
                    called = true
                    resolvePromise(promise2, y, resolve, reject)
                }, (r) => {
                    if (called) return
                    called = true
                    reject(r)
                })
            } else { // 不是 Promise，是一个普通对象
                resolve(x)
            }
        } catch (e) {
            if (called) return
            called = true
            reject(e)
        }
    } else { // 不是一个对象或函数，是一个普通值
        resolve(x)
    }
}

export default MyPromise3