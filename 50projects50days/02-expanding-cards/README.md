# 02-expanding-cards

![pic](https://typora-picgo-1312201263.cos.ap-guangzhou.myqcloud.com/img/202211221131240.gif)

## 知识点

### CSS

```css
.container {
  display: flex;
}

.pic {
  /* 在 flex 容器的子项设置 flex: 0.5 ，会根据这个数自动计算宽度 */
  flex: 0.5;
  /* transition 可对 flex 进行平滑过度 */
  transition: flex 0.7s ease-in;
  /* no-reapeat 不重复 center 背景剧中 */
  background: no-repeat center;
  /* cover 缩放背景图片以完全覆盖背景区 contain 缩放背景图片以完全装入背景区，可能背景区部分空白。 */
  background-size: cover;
}
```

