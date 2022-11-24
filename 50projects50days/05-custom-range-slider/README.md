# 05-custom-range-slider

![pic](https://typora-picgo-1312201263.cos.ap-guangzhou.myqcloud.com/img/202211241741864.gif)

## 知识点

### CSS

1、`linear-gradient()`：[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/gradient/linear-gradient)

```css
/* linear-gradient() 为渐变色生成函数，135 度方向渐变，从 0% 以 rgb(245, 247, 250) 变化，到 100% 以 rgb(195, 207, 226) 变化*/
body {
    background-image: linear-gradient(135deg, rgb(245, 247, 250) 0%, rgb(195, 207, 226) 100%);
}
```

2、`-webkit-appearance: none, type="range"`

```css
/* range 类型为滚动条*/
input[type="range"] {
    -webkit-appearance: none; /* 清除 input 的默认样式 */
}
```

3、`input[type="range"]+label{}`： 相邻兄弟选择器

```css
/* 相邻兄弟选择器 +, 选中恰好处于另一个在继承关系上同级的元素旁边的物件 */
input[type="range"]+label {
}
```

4、`input[type="range"]::-webkit-slider-thumb`：按钮的伪元素样式

### JS

由于除非用内联样式设置的 width，否则无法通过元素的 `element.style.width` 获取 `width`，下面给出的两种获取方法：

1、`element.offsetWidth`，返回 number 类型，比如 `300`；

2、`getComputedStyle(element).getPropertyValue('width')`，返回 string 类型，比如 `300px`；并且 `getComputedStyle()` 方法可以**<u>获取元素的伪元素</u>** DOM，比如 `getComputedStyle(element, '::before')`。

