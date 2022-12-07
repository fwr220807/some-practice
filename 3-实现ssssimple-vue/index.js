import { Vue } from "./vue";

const vm = new Vue({
    el: '#app',
    data() {
        return {
            isShowImg1: true,
            isShowImg2: false
        }
    },
    template: `
    <div>
        <img v-if="isShowImg1" width="200" src="https://wx3.sinaimg.cn/mw2000/73014eably1h8t2q4s64mj227c3ao4qq.jpg">
        <img v-show="isShowImg2" width="200" src="https://wx1.sinaimg.cn/mw2000/007743j8gy1h798c7n1hnj30u018i440.jpg">
    </div>
    <button @click="showImg1">图片1</button>
    <button @click="showImg2">图片2</button>
    `,
    methods: {
        showImg1() {
            this.isShowImg1 = !this.isShowImg1
        },
        showImg2() {
            this.isShowImg2 = !this.isShowImg2
        },
    },
})