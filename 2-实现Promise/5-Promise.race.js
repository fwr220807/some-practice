const fs = require('fs')

function readFile(path, isSetError) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
            if (err || isSetError)
                reject('承诺石沉大海~~~')

            const resData = JSON.parse(data)

            resolve(resData)
        })
    })
}

Promise.race([
    readFile('./data/user.json', true),
    readFile('./data/userCourse.json'),
    readFile('./data/course.json'),
]).then((res) => {
    console.log(res)
}).catch((err) => {
    console.log(err)
})

// 谁先完成就返回那个 Promise 的结果，无论是 fulfilled 还是 rejected
// 如果参数为空数组，则返回 pending 状态
// 测试资源或者接口的响应速度
