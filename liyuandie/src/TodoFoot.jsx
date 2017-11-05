import React from "react";
import styled from 'styled-components';

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
	box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2),
	            0 8px 0 -3px #f6f6f6,
	            0 9px 1px -3px rgba(0, 0, 0, 0.2),
	            0 16px 0 -6px #f6f6f6,
	            0 17px 2px -6px rgba(0, 0, 0, 0.2);
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
`
const FilterLi = styled.li`
display: inline;
`
const FilterBtn = styled.button`
color: inherit;
margin: 3px;
padding: 3px 7px;
text-decoration: none;
border: 1px solid transparent;
border-radius: 3px;
border-color: rgba(175, 47, 47, 0.2);
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
`
class TodoFoot extends React.Component {
    clear = () => {
        this.props.clearDone();
    }

    all = () => {
        this.props.filterTodo("all");
    }

    active = () => {
        this.props.filterTodo("active");
    }

    completed = () => {
        this.props.filterTodo("completed");
    }

    render() {
        return (
            <TodoFooter>
                <CountActive>{this.props.todoDoneCount} items left </CountActive>
                <Filter>
                    <FilterLi>
                        <FilterBtn onClick={this.all}>All</FilterBtn>
                    </FilterLi>
                    <span></span>
                    <FilterLi>
                        <FilterBtn onClick={this.active}>Active</FilterBtn>
                    </FilterLi>
                    <span></span>
                    <FilterLi>
                        <FilterBtn onClick={this.completed}>Completed</FilterBtn>
                    </FilterLi>
                </Filter>
                <FilterLi>
                        <Clear onClick={this.clear}>Clear Completed</Clear>
                    </FilterLi>
            </TodoFooter>
        )
    }
}
export default TodoFoot;