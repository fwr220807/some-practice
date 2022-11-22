const bg = document.querySelector('.bg')
const loading = document.querySelector('.loading-text')

let index = 0
let duration = 3000

const oneStep = function (index) {
    loading.innerText = `${index}%`
    bg.style.filter = `blur(${(1 - index / 100) * 30}px)`
    loading.style.opacity = `${1 - index / 100}`

    if (index < 100) {
        setTimeout(() => {
            oneStep(index + 1)
        }, duration / 100)
    }
}

oneStep(0)