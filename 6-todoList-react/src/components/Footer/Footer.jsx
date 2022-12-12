import React, { Component } from 'react'
import footer from './footer.module.css';

export default class Footer extends Component {
    handleClick = (isAllFinished) => {
        return () => {
            const { setAllTodosDone } = this.props
            if (isAllFinished) {
                // clear
                setAllTodosDone(false)
            } else {
                // finish All
                setAllTodosDone(true)
            }
        }
    }

    render() {
        const { todos, deleteFinishTodos } = this.props
        let finish = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)
        let all = todos.length
        const checked = finish === all

        return (
            <div className={footer["todo-footer"]}>
                <label>
                    <input type="checkbox" checked={checked && all !== 0} onChange={this.handleClick(checked)} />
                </label>
                <span>
                    <span>已完成{finish}</span> / 全部{all}
                </span>
                <button className="btn btn-danger" onClick={deleteFinishTodos}>清除已完成任务</button>
            </div>
        )
    }
}
