// import fetch from 'node-fetch'
import fetch from 'node-fetch'

function getData() {
    return fetch('http://study.jsplusplus.com/xiaomi/getXiaomiDatas?phone=true')
        .then((res) => {
            return res.json()
        })
        .then((res) => {
            return (res)
        }).catch((err) => {
            return (err)
        })
}
// async 的意思是当前这个异步函数与同一作用域下的程序是异步的关系
async function logData() {
    const data = await getData()
    console.log(data);
}

logData()

console.log('Global');

// await 是一个操作符
// 等待一个 Promise 对象产出结果的操作手段
// 功能是暂停 async 函数的执行，等待 Promise 处理后的结果
// 假如 Promise 处理的结果是 rejected，则会抛出异常
// async 函数是通过一个隐式的 Promise 返回的 Pending 状态