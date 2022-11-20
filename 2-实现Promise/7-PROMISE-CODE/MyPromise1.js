const PENDING = 'PENDING',
    FULFILLED = 'FULFILLED',
    REJECTED = 'REJECTED'


class MyPromise1 {
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

    then(onFulfilled, onRejected) {
        if (this.status === FULFILLED) {
            onFulfilled(this.value)
        }

        if (this.status === REJECTED) {
            onRejected(this.reason)
        }
        // 订阅发布模式
        // 当 PENDING 状态时，先收集 then 之后的执行函数，等状态确定后再执行
        if (this.status === PENDING) {
            // 订阅
            this.onFulfilledCallBacks.push(() => onFulfilled(this.value))
            this.onRejectedCallBacks.push(() => onRejected(this.reason))
        }
    }
}

export default MyPromise1