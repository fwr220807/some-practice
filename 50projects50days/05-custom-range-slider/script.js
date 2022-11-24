const rangeEl = document.querySelector('input[type="range"]')
const labelEl = document.querySelector('input[type="range"]+label')

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const in_min = rangeEl.min
const in_max = rangeEl.max

console.dir(rangeEl);

const range_width = getComputedStyle(rangeEl).getPropertyValue('width')
const num_range_width = +range_width.substring(0, range_width.length - 2)
const label_width = getComputedStyle(labelEl).getPropertyValue('width')
const num_label_width = +label_width.substring(0, label_width.length - 2)

rangeEl.addEventListener('input', (e) => {
    // 12.5 为滚动小球的半径 25px / 2
    labelEl.style.left = `${(scale(e.target.value, in_min, in_max, 12.5, num_range_width - 12.5)) - num_label_width / 2}px`
    labelEl.innerText = e.target.value
})

