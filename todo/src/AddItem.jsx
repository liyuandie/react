import React from "react";
import styled from 'styled-components';

const TodoInput = styled.input`
padding: 16px 16px 16px 60px;
border: none;
background: rgba(0, 0, 0, 0.003);
box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
position: relative;
margin: 0;
width: 100%;
font-size: 24px;
font-style: italic;
font-family: inherit;
font-weight:  100;
line-height: 1.4em;
outline: none;
color: black;
box-sizing: border-box;
font-smoothing: antialiased;
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
            let newTodoItem = {
                text: value,
                isDone: false,
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