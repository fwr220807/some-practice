const fs = require('fs');

let num = 1

function readFile(path, isSetError) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', function (err, data) {
            if (err || isSetError) {
                reject('承诺石沉大海～～～' + num++)
            }

            const resData = JSON.parse(data)

            resolve(resData)
        })
    })
}

// readFile('./data/user.json').then(res => {
//     console.log(res);
// })

// readFile('./data/userCourse.json').then(res => {
//     console.log(res);
// })

// readFile('./data/course.json').then(res => {
//     console.log(res);
// })

// 合并三个文件内部的内容为一个数组并且按照顺序排列，如果一个读取失败，让这个数组集合返回一个 rejected
// 接收参数：iterable 类型的数组 -> Array Set Map
// Promise.all([
//     readFile('./data/user.json'),
//     readFile('./data/userCourse.json', true),
//     readFile('./data/course.json', true)
// ]).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })

// 用多个异步任务并发运行，他的结果创建承诺之后使用，等待所有任务结果的完成
// iterable 内部元素传递的是 promise 对象集合，如果不是 promise，则直接 resolve -> Promise.resolve(0 || '123')
// iterable 内部没有元素，则返回空数组
// 只要有一个 promise 是 rejected ，则实例回调 rejected
// 适用于一个页面发起多个请求同时发起，并控制多个请求，如果出现一个请求失败则可认为页面请求失败

readFile('./data/user.json').then(res => {
    console.log(res);

    return Promise.resolve('成功啦～～')
    // = return new Promise((resolve, reject) => { resolve('成功啦～～')})
}).then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
})