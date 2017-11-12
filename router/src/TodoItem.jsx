import React from "react";
import styled from 'styled-components';

const CheckBox = styled.input`
    height: 40px;
    text-align: center;
    width: 40px;
    height: auto;
    position: absolute;
    top: 10px;
    bottom: 0;
    margin: auto 0;
    border: none;
    appearance: none;
    :after {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
    }
    :checked:after {
        content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
    }
`
const TodoLi = styled.li`
    position: relative;
    font-size: 24px;
    border-bottom: 1px solid #ededed;
`

const TodoSpan = styled.label`
    white-space: pre-line;
    word-break: break-all;
    padding: 15px 60px 15px 15px;
    margin-left: 45px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
    color:  ${props => props.isDone ? '#d9d9d9' : 'black'};
    text-decoration: ${props => props.isDone ? 'line-through' : 'none'};
`
const Delete = styled.button`
    display: ${props => props.isShowDelete ? 'block': 'none'};
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    margin-bottom: 11px;
    border: none;
    background: none;
    transition: color 0.2s ease-out;
    :hover {
        color: #af5b5e;
    }
    :after {
        content: '×';  
    }
`



class TodoItem extends React.Component {

    constructor() {
        super();
        this.state = {
            isShowDelete: false,
        };
    }

    showDeleteBtn = ()=> {
        this.setState({isShowDelete: true});
    }

    hideDeleteBtn = ()=> {
        this.setState({isShowDelete: false});
    }

    changeState = () => {
        let isDone = !this.props.isDone;
        this.props.changeTodoState(this.props.index, isDone);
    }

    DeleteItem = () => {
        this.props.deleteTodo(this.props.index);
    }

    render() {
        return (
            <TodoLi onMouseEnter = {this.showDeleteBtn} onMouseLeave = {this.hideDeleteBtn}>
                <CheckBox type="checkbox" checked={this.props.isDone} onChange={this.changeState} />
                <TodoSpan isDone={this.props.isDone}>{this.props.text}</TodoSpan>
                <Delete isShowDelete = {this.state.isShowDelete} onClick={this.DeleteItem}></Delete>
            </TodoLi>
        )
    }
}
export default TodoItem;