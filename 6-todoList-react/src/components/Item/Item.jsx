import React, { Component } from 'react'
import './item.module.css';

export default class Item extends Component {
    state = {
        buttonDisplay: false
    }

    handleMouse = (buttonDisplay) => {
        return () => {
            this.setState({
                buttonDisplay
            })
        }
    }

    handleChecked = () => {
        const { changeDone, id } = this.props
        changeDone(id)
    }

    handleButtonClick = (id) => {
        return () => {
            const { deleteTodo } = this.props
            deleteTodo(id)
        }
    }

    render() {
        const { id, name, done } = this.props
        const { buttonDisplay } = this.state
        return (
            <li onMouseOver={this.handleMouse(true)} onMouseOut={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleChecked} />
                    <span>{name}</span>
                </label>
                <button className="btn btn-danger" onClick={this.handleButtonClick(id)} style={{ display: buttonDisplay ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
