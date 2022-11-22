# progress-steps

![pic](https://typora-picgo-1312201263.cos.ap-guangzhou.myqcloud.com/img/202211212315287.gif)

## 知识点

### CSS

`.btn:active {...}` ：active 伪类选择器，可以设置元素激活时的样式，实现点击按钮的特效，对应 JS 中鼠标事件 `mousedown` 和 `mouseup`；

### JavaScript

`proxy` ：

```js
const target = {}
const handler = {
  get(){...},
  set(){...}
}
// 代理的创建，target 为目标对象，handler 为捕获器，是一个对象
const proxy = new Proxy(target, handler)
```