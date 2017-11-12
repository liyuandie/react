import React from "react";
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

const TodoFooter = styled.footer`
    color: #777;
    padding: 10px 15px;
    height: 20px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
    :before {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
        height: 50px;
        overflow: hidden;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 8px 0 -3px #f6f6f6, 0 9px 1px -3px rgba(0, 0, 0, 0.2), 0 16px 0 -6px #f6f6f6, 0 17px 2px -6px rgba(0, 0, 0, 0.2);
    }
`
const CountActive = styled.span`
    float: left;
    text-align: left;
`
const Filter = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    position: absolute;
    right: 0;
    left: 0;
    height: 19.2px;
`
const FilterLi = styled.li`
    display: inline;
`
const FilterBtn = styled(Link) `
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
    cursor: pointer;
    border-color:${props => props.checked ? 'rgba(175, 47, 47, 0.5)' : '#ffffff'};
    :hover {
        border-color: rgba(175, 47, 47, 0.1);
    }
`
const Clear = styled.button`
    float: right;
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
    position: relative;
    display:${props => props.isShowClearBtn ? 'block' : 'none'};
    :hover {
	    text-decoration: underline;
    }
`

class TodoFoot extends React.Component {

    constructor() {
        super();
        this.state = {
            isOnClick: '',

        };
    }

    clear = () => {
        this.props.clearDone();
    }

    all = () => {
        this.props.filterTodo("all");
        this.setState({ isOnClick: 'all' });
    }


    active = () => {
        this.props.filterTodo("active");
        this.setState({ isOnClick: 'active' });
    }

    completed = () => {
        this.props.filterTodo("completed");
        this.setState({ isOnClick: 'completed' });
    }

    render() {
        return (
            <TodoFooter>
                <CountActive>{this.props.todoDoneCount} items left </CountActive>
                <Router>
                    <Filter>
                        <FilterLi>
                            <FilterBtn to='/' onClick={this.all} checked={this.state.isOnClick === 'all'}>All</FilterBtn>
                            <FilterBtn to='/active' onClick={this.active} checked={this.state.isOnClick === 'active'}>Active</FilterBtn>
                            <FilterBtn to='/completed' onClick={this.completed} checked={this.state.isOnClick === 'completed'}>Completed</FilterBtn>
                        </FilterLi>
                    </Filter>
                </Router>
                <Clear onClick={this.clear} isShowClearBtn={this.props.isShowClearBtn}>Clear Completed</Clear>
            </TodoFooter>
        )
    }
}
export default TodoFoot;