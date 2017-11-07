import React from "react";
import TodoItem from "./TodoItem.jsx"
import styled from 'styled-components';

const Main = styled.section`
position: relative;
z-index: 2;
border-top: 1px solid #ededed;
`
const TodoUl = styled.ul`
margin: 0;
padding: 0;
list-style: none;
`
class TodoList extends React.Component {

    render() {
        return (
            <Main>
                <TodoUl>
                    {this.props.todos.map((todo, index) => {
                        return <TodoItem {...todo} {...this.props} index={index} key={index} />
                    })}
                </TodoUl>
            </Main>

        )
    }
}
export default TodoList;