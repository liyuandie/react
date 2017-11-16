import React from "react";
import styled from 'styled-components';

const TodoInput = styled.input`
padding: 16px 16px 16px 55px;
margin: 0px;
width: 100%;
border: none;
font-size: 24px;
box-sizing: border-box;
&::-webkit-input-placeholder {
    font-style: italic;
    color: #e6e6e6;
}
&::-moz-input-placeholder {
    font-style: italic;
    color: #e6e6e6;
}
&::input-placeholder {
    font-style: italic;
    color: #e6e6e6;
}
`
const Allchecked = styled.input`
    transform: rotate(90deg);
    appearance: none;
    outline: none;
    position: absolute;
    top: 15px;
    left: -12px;
    width: 60px;
    height: 34px;
    text-align: center;
    border: none;
    background: none;
    :before {
        content: '❯';
        font-size: 22px;
        color: #e6e6e6;
        padding: 10px 27px 10px 27px;
    }
    :checked:before {
        color: #737373;
    }
`
const Title = styled.h1`
    position: absolute;
    top: -155px;
    width: 100%;
    font-size: 100px;
    font-weight: 100;
    text-align: center;
    color: rgba(175, 47, 47, 0.15);
    text-rendering: optimizeLegibility;
    :matches(article, aside, nav, section) {
        font-size: 1.5em;
        -webkit-margin-before: 0.83em;
        -webkit-margin-after: 0.83em;
    }
`

class AddTodo extends React.Component {

    allChangeState = (event) => {
        this.props.changeTodoState(null, event.target.checked, true);
    }

    keyUp = (event) => {
        if (event.keyCode === 13) {
            let value = event.target.value;
            if (!value) return false;
            let newID = 0;
            if(this.props.todos.length > 0) {
                newID = this.props.todos[0].id + 1;
            }
            let newTodoItem = {
                text: value,
                isDone: false,
                id: newID,
            };
            event.target.value = "";
            this.props.addTodo(newTodoItem);
        }
    }

    render() {
        return (
            <header>
                <Title>todos</Title>
                <TodoInput onKeyUp={this.keyUp} type="text" placeholder="what needs to be done ?" />
                <Allchecked type="checkbox" checked={this.props.isAllChecked} onChange={this.allChangeState} />
            </header>
        )
    }
}

export default AddTodo;