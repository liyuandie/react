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
font-family: inherit;
font-weight: inherit;
line-height: 1.4em;
outline: none;
color: inherit;
box-sizing: border-box;
font-smoothing: antialiased;
`

class AddTodo extends React.Component {
    keyUp = (event) => {
        if (event.keyCode === 13) {
            let value = event.target.value;

            if (!value) return false;

            let newTodoItem = {
                text: value,
                isDone: false
            };
            event.target.value = "";
            this.props.addTodo(newTodoItem);
        }
    }

    render() {
        return (
            <div>
                <TodoInput onKeyUp={this.keyUp} type="text" placeholder="what needs to be done ?" className="add"/>
            </div>
        )
    }
}

export default AddTodo;