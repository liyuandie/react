import React from "react";
import TodoItem from "./TodoItem.jsx"
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from 'react-router-dom';

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
/*const Hello = (props) => {
    console.log(1,props)
    return <h1>hello</h1>
}

const Hi = (props) => {
    console.log(2,props)
    return <h1>hi </h1>
}

const Byebye = (props) => {
    console.log(3,props)
    return <h1>byebye</h1>
}*/

class Todos extends React.Component {
    TodoList = () => {
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

    render() {
        return (

            <Router>
                <div>
                    <Switch>
                    <Route path='/' component={this.TodoList} />
                    <Route path='/active' component={this.TodoList} />
                    <Route path='/completed' component={this.TodoList} />
                    </Switch>
                </div>
            </Router>
        )
    }
}
export default Todos;