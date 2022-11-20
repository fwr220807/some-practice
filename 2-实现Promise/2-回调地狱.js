/**
 * 通过根据 uid 分别读取 user.json -> userCourse.json -> course.json 并输出文件如 lamu.json
 * {
 *  "username": "lamu",
 *  "courses": [
 *      "JavaScript",
 *      "HTML",
 *      "React"
 *      ]
 *  }
*/
const fs = require('fs');

let uid = 3

fs.readFile('./data/user.json', 'utf-8', function (err, data) {
    const userData = JSON.parse(data)
    const userInfo = userData.filter(item => item.id === uid)[0]

    fs.readFile('./data/userCourse.json', 'utf-8', function (err, data) {
        const userCourseData = JSON.parse(data)
        const userId = userInfo.id
        const userCourse = userCourseData.filter(item => item.uid === userId)[0]

        fs.readFile('./data/course.json', 'utf-8', function (err, data) {
            const courseData = JSON.parse(data)
            const userCourses = userCourse.courses

            let _arr = []
            userCourses.forEach(id => {
                courseData.find(item => {
                    if (item.id == id) {
                        return _arr.push(item.name)
                    }
                })
            })

            const userCourseInfo = {
                username: userInfo.username,
                courses: _arr
            }

            fs.writeFileSync(`./data/${userInfo.username}.json`, JSON.stringify(userCourseInfo))
        })
    })
})
