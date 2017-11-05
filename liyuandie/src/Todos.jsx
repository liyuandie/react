import React from "react";

import AddItem from "./AddItem.jsx";
import TodoList from "./TodoList.jsx";
import TodoFoot from "./TodoFoot.jsx";
import styled from 'styled-components';

const Title = styled.h1`
position: top;;
top: 0px;
width: 100%;
font-size: 100px;
font-weight: 100;
text-align: center;
color: rgba(175, 47, 47, 0.15);
`
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
`
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

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [],
        };
    }

    addTodo = (todoItem) => {
        this.state.todos.push(todoItem);

        this.setState({ todos: this.state.todos });
    }

    changeTodoState = (index, isDone) => {
        this.state.todos[index].isDone = isDone;
        this.setState({ todos: this.state.todos });
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

    /*filterAll = () => {
        let newtodos = this.state.todos;
        this.setState({ todos: newtodos });
    }

    filterActive = () => {
        let newtodos = this.state.todos.filter((todo) => !todo.isDone);
        this.setState({ todos: newtodos });
    }*/

    filterTodo = (p) => {
        let newtodos = [];
        if (p === "active") {
            newtodos = this.state.todos.filter((todo) => !todo.isDone);
        } else if (p === "completed") {
            newtodos = this.state.todos.filter((todo) => todo.isDone);
        } else if (p === "all") {
            newtodos = this.state.todos;
        }
        this.setState({ todos: newtodos });
    }



    render() {
        let props = {
            todoDoneCount: (this.state.todos && this.state.todos.filter((todo) => !todo.isDone)).length || 0
        };
        return (
            <TodoApp>
                <Title>todos</Title>
                <Container>
                    <AddItem addTodo={this.addTodo} />
                    <TodoList deleteTodo={this.deleteTodo} todos={this.state.todos} changeTodoState={this.changeTodoState} />
                    <TodoFoot clearDone={this.clearDone} {...props} filterTodo={this.filterTodo} /*filterAll={this.filterAll} filterActive={this.filterActive}*/ />
                </Container>
                <AnotherFooter>
                    <p>Created by Yanzu.Lee</p>
                </AnotherFooter>
            </TodoApp>
        )
    }
}
export default App;