import React, { Component } from 'react'
import header from './header.module.css';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

export default class Header extends Component {
    // 对接收的 props 进行类型以及必要性的限制
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }

    handleKeyup = (e) => {
        const { addTodo } = this.props
        const { key, target } = e
        if (key !== 'Enter') return
        if (target.value.trim() === '') {
            alert('输入内容不能为空')
            return
        }

        const todoObj = { id: nanoid(), name: target.value, done: false }
        addTodo(todoObj)
        target.value = ''
    }

    render() {
        return (
            <div className={header['todo-header']}>
                <input onKeyUp={this.handleKeyup} type="text" placeholder="请输入你的任务名称，按回车键确认" />
            </div>
        )
    }
}
