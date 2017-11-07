import React from "react";

import AddItem from "./AddItem.jsx";
import TodoList from "./TodoList.jsx";
import TodoFoot from "./TodoFoot.jsx";
import styled, { injectGlobal } from 'styled-components';


/*
const Container = styled.div`
font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
line-height: 1.4em;
background: #f5f5f5;
color: #4d4d4d;
min-width: 230px;
max-width: 550px;
margin: 0 auto;
-webkit-font-smoothing: antialiased;
-moz-font-smoothing: antialiased;
font-smoothing: antialiased;
font-weight: 300;
`*/
const TodoApp = styled.div`
background: #fff;
margin: 130px 0 40px 0;
position: relative;
box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
            0 25px 50px 0 rgba(0, 0, 0, 0.1);
            `
const AnotherFooter = styled.footer`
margin: 65px auto 0;
color: #bfbfbf;
font-size: 10px;
text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
text-align: center;
`

injectGlobal`
body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    background: #f5f5f5;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    font-smoothing: antialiased;
    font-weight: 300;
    padding: 0;
}
input:matches([type="radio"], [type="checkbox"]){
    margin-top: 3px;
    margin-right: 2px;
    margin-bottom: 3px;
    margin-left: 2px;
    padding-top: initial;
    padding-right: initial;
    padding-bottom: initial;
    padding-left: initial;
    background-color: initial;
    border-top-color: initial;
    border-top-style: initial;
    border-top-width: initial;
    border-right-color: initial;
    border-right-style: initial;
    border-right-width: initial;
    border-bottom-color: initial;
    border-bottom-style: initial;
    border-bottom-width: initial;
    border-left-color: initial;
    border-left-style: initial;
    border-left-width: initial;
}
input{
    margin-top: 0em;
    margin-right: 0em;
    margin-bottom: 0em;
    margin-left: 0em;
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    font-family: -apple-system;
    font-variant-caps: normal;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    line-height: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-writing-mode: horizontal-tb !important;
    outline: none;
}
ul {
    display: block;
    list-style-type: disc;
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
}
li {
    display: list-item;
    text-align: -webkit-match-parent;
}
label {
    cursor: default;
}
button {
    margin: 0;
    padding: 0;
    border: 0;
    background: none;
    font-size: 100%;
    vertical-align: baseline;
    font-family: inherit;
    font-weight: inherit;
    color: inherit;
    appearance: none;
    font-smoothing: antialiased;
    outline: none;
}
`

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
            filter: 'all',
            isAllChecked: false,
        };
    }


    addTodo = (todoItem) => {
        this.state.todos.push(todoItem);

        this.setState({ todos: this.state.todos });
    }

    changeTodoState = (index, isDone, isChangeAll = false) => {
        if (isChangeAll) {
            this.setState({
                todos: this.state.todos.map((todo) => {
                    todo.isDone = isDone;
                    return todo;
                }),
                isAllChecked: isDone
            })
        } else {
            this.state.todos[index].isDone = isDone;
            this.setState({ todos: this.state.todos });
        }
    }

    clearDone = () => {
        let todos = this.state.todos.filter(todo => !todo.isDone);
        this.setState({
            todos: todos,
        });

    }

    deleteTodo = (index) => {
        this.state.todos.splice(index, 1);
        this.setState({ todos: this.state.todos });
    }


    filterTodo = p => {
        this.setState({
            filter: p,
        })
    }

    newTodo = () => {
        const p = this.state.filter;
        let newtodos = [];
        if (p === "active") {
            newtodos = this.state.todos.filter((todo) => !todo.isDone);
        } else if (p === "completed") {
            newtodos = this.state.todos.filter((todo) => todo.isDone);
        } else if (p === "all") {
            newtodos = this.state.todos;
        }
        return newtodos;
    }


    render() {
        let props = {
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => !todo.isDone)).length || 0,
            isShowClearBtn: this.state.todos.filter((todo) => todo.isDone).length > 0,
        };
        return (
            <div>
                <TodoApp>
                    <AddItem isAllChecked={this.state.isAllChecked} addTodo={this.addTodo} changeTodoState={this.changeTodoState} />
                    <TodoList deleteTodo={this.deleteTodo} todos={this.newTodo()} changeTodoState={this.changeTodoState} />
                    <TodoFoot clearDone={this.clearDone} {...props} filterTodo={this.filterTodo} />
                </TodoApp>
                <AnotherFooter>
                    <p>Created by Yanzu.Lee</p>
                </AnotherFooter>
            </div>
        )
    }
}
export default App;