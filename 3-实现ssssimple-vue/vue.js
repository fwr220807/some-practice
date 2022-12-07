export class Vue {
    constructor({ el, data, template, methods }) {
        this.$el = document.querySelector(el)
        this.$data = data()

        this._init(template, methods)
    }
    // 总初始化
    _init(template, methods) {
        const oContainer = document.createElement('div')
        oContainer.innerHTML = template
        const showPool = new Map()
        const eventPool = new Map()

        this.initData(showPool)
        this.initPool(oContainer, methods, showPool, eventPool)
        this.bind(eventPool)

        this.render(showPool, oContainer)
    }
    // 初始化数据，建立响应式数据
    initData(showPool) {
        const _data = this.$data

        for (const key in _data) {
            Object.defineProperty(this, key, {
                get() {
                    return _data[key]
                },
                set(newValue) {
                    _data[key] = newValue
                    this.update(key, showPool)
                }
            })
        }
    }

    // 收集 template 中的事件和属性和对应的 dom
    initPool(container, methods, showPool, eventPool) {
        const nodes = container.getElementsByTagName('*')
        for (let node of nodes) {
            const vIf = node.getAttribute('v-if')
            const vShow = node.getAttribute('v-show')
            const vEvent = node.getAttribute('@click')

            if (vIf) {
                showPool.set(node, {
                    type: 'if',
                    prop: vIf
                })

                node.removeAttribute('v-if')
            }

            if (vShow) {
                showPool.set(node, {
                    type: 'show',
                    prop: vShow
                })

                node.removeAttribute('v-show')
            }

            if (vEvent) {
                eventPool.set(node, {
                    type: 'click',
                    handler: methods[vEvent]
                })

                node.removeAttribute('@click')
            }
        }
    }
    // 给 dom 绑定事件
    bind(eventPool) {
        for (const [node, info] of eventPool) {
            const { type, handler } = info
            this[handler.name] = handler

            node.addEventListener(type, this[handler.name].bind(this))
        }
    }

    // 渲染
    render(showPool, container) {
        const _data = this.$data
        const _el = this.$el

        for (const [node, info] of showPool) {
            const { type, prop } = info
            switch (type) {
                case 'if':
                    info.comment = document.createComment('v-if')
                    if (!_data[prop]) {
                        // 替换原有的 dom
                        node.parentNode.replaceChild(info.comment, node)
                    }
                    break
                case 'show':
                    if (!_data[prop]) {
                        node.style.display = 'none'
                    }
                    break
                default:
                    break
            }
        }

        _el.appendChild(container)
    }

    update(key, showPool) {
        const _data = this.$data
        for (const [node, info] of showPool) {
            if (info.prop === key) {
                const { type } = info
                switch (type) {
                    case 'if':
                        !_data[key] ? node.parentNode.replaceChild(info.comment, node)
                            : info.comment.parentNode.replaceChild(node, info.comment)
                        break
                    case 'show':
                        !_data[key] ? node.style.display = 'none'
                            : node.style.display = ''
                        break
                    default:
                        break
                }
            }
        }
    }
}