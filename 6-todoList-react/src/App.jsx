import React, { Component } from 'react'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import List from './components/List/List';
import './App.css';

export default class App extends Component {
    state = {
        todos: [{ id: '1', name: '吃饭', done: true }, { id: '2', name: '睡觉', done: true }, { id: '3', name: '打游戏', done: false }]
    }

    addTodo = (todoObj) => {
        const { todos } = this.state
        const newTodos = [todoObj, ...todos]

        this.setState({ todos: newTodos })
    }

    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => todo.id !== id)

        this.setState({ todos: newTodos })
    }

    deleteFinishTodos = () => {
        const { todos } = this.state
        const newTodos = todos.filter((todo) => todo.done !== true)

        this.setState({ todos: newTodos })
    }

    setAllTodosDone = (done) => {
        const { todos } = this.state
        todos.forEach((todo) => todo.done = done)

        this.setState({ todos })
    }

    changeDone = (id) => {
        const { todos } = this.state
        todos.forEach((todo) => {
            if (todo.id === id) {
                todo.done = !todo.done
            }
        })

        this.setState({ todos })
    }

    render() {
        const { todos } = this.state
        return (
            <div>
                <div className="todo-container">
                    <div className="todo-wrap">
                        <Header addTodo={this.addTodo}></Header>
                        <List todos={todos} deleteTodo={this.deleteTodo} changeDone={this.changeDone}></List>
                        <Footer todos={todos} deleteTodo={this.deleteTodo} deleteFinishTodos={this.deleteFinishTodos} setAllTodosDone={this.setAllTodosDone}></Footer>
                    </div>
                </div>
            </div>
        )
    }
}