/**
 * 用 Promise 解决 2-回调地狱.js 的问题
*/

const fs = require('fs');

function readFile(path, prevData) {
    return new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', function (err, data) {
            if (err) {
                reject(err)
            }

            const resData = JSON.parse(data)
            resolve({
                prevData,
                resData
            })
        })
    })
}

let uid = 3

readFile('./data/user.json').then(res => {
    const { resData } = res,
        userInfo = resData.filter(item => item.id === uid)[0]

    return readFile('./data/userCourse.json', userInfo)
}).then(res => {
    const { prevData, resData } = res,
        uid = prevData.id,
        userCourse = resData.filter(item => item.uid === uid)[0]

    return readFile('./data/course.json', {
        username: prevData.username,
        userCourse
    })
}).then(res => {
    const { prevData, resData } = res,
        userCourses = prevData.userCourse.courses

    let _arr = []
    userCourses.forEach(id => {
        resData.find(item => {
            if (item.id == id) {
                return _arr.push(item.name)
            }
        })
    })

    const userCourseInfo = {
        username: prevData.username,
        courses: _arr
    }

    fs.writeFileSync(`./data/${userCourseInfo.username}.json`, JSON.stringify(userCourseInfo))
}).catch(err => {
    console.log(err);
})