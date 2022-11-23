# 04-auto-text-effect

![pic](https://typora-picgo-1312201263.cos.ap-guangzhou.myqcloud.com/img/202211231045387.gif)

## 知识点

### CSS

```css
/* focus 伪类选择器，在 input 元素被聚焦时取消选中框 */
input:focus {
    outline: none;
}
```

### JS

在实现逐帧动画时，setTimeout 与 setInternal 的选择：

1、setInternal 更适合用于计算好就不会再改变的动画；

2、setTimeout 更适合用于可动态变化的动画，比如本题，可以在动画过车个闹钟功能，控制动画速率；

```js
const textEl = document.querySelector('#text')
const speedEl = document.querySelector('#speed')

let index = 1
let speed = 300 / speedEl.value

const writeText = function () {
    textEl.innerText = text.slice(0, index)

    index++

    if (index > text.length) {
        index = 1
    }
		// 由于每调用完一次，都会再次调用 setTimeout，所以可以修改相应的参数，如 speed
    setTimeout(writeText, speed)
}

writeText()

speedEl.addEventListener('input', (e) => {
    speed = 300 / e.target.value
})
```
