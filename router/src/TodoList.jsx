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

class Todos extends React.Component {
    TodoList = () => {
        return (
            <Main>
                <TodoUl>
                    {this.props.todos.map((todo, index) => {
                        return <TodoItem {...todo} {...this.props} index={index} key={this.props.id} />
                    })}
                </TodoUl>
            </Main>
        )
    }

    render() {
        return <this.TodoList/>;
    }
}
export default Todos;