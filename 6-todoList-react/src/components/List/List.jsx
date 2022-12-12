import React, { Component } from 'react'
import Item from '../Item/Item';
import listCss from './list.module.css';

export default class List extends Component {

    render() {
        const { todos, deleteTodo, changeDone } = this.props

        return (
            <ul className={listCss["todo-main"]}>
                {todos.map((item) => <Item id={item.id} name={item.name} done={item.done} key={item.id} deleteTodo={deleteTodo} changeDone={changeDone} ></Item>)}
            </ul>
        )
    }
}
