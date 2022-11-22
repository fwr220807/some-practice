const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const progress = document.querySelector('#progress')
const circleList = document.querySelectorAll('.circle')

const target = {}

// 根据指针删除、添加 active 样式
const toggleActive = function (point) {
    for (let i = 0; i < circleList.length; i++) {
        if (i <= point) {
            circleList[i].classList.add('active')
        } else {
            circleList[i].classList.remove('active')
        }
    }
}
// 添加代理
const proxy = new Proxy(target, {
    set(target, property, value, receiver) {
        if (value === 3) {
            nextBtn.disabled = true
        } else if (nextBtn.disabled) {
            nextBtn.disabled = false
        }

        if (value === 0) {
            prevBtn.disabled = true
        } else if (prevBtn.disabled) {
            prevBtn.disabled = false
        }

        toggleActive(value)
        progress.style.width = `${100 / 3 * value}%`

        return Reflect.set(target, property, value, receiver)
    }
})
// 初始化样式
proxy.point = 0
// 添加监听器
nextBtn.addEventListener('click', () => {
    proxy.point++
})
prevBtn.addEventListener('click', () => {
    proxy.point--
})