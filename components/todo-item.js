import React, { Component } from 'react';
import styled from 'styled-components';

export default class TodoItem extends Component {
	handleRemove = () => {
		const { todolist, onRemove } = this.props;
		onRemove(todolist.id);
	};

	render() {
		const { date, todo } = this.props.todolist;

		return (
			<TodoItemWrapper>
				<Todo>{todo}</Todo>
				<Date>
					{date}
					<Button onClick={this.handleRemove}>완료</Button>
				</Date>
			</TodoItemWrapper>
		);
	}
}
const Date = styled.div`
	font-size: 1.5rem;
	display: flex;
	color: white;
	flex-direction: column;
`;
const Todo = styled.div`
	font-size: 1.5rem;
	color: white;
	display: flex;
	flex-direction: column;
`;
const Button = styled.button`
	color: white;
	background-color: rgb(97, 97, 97);
	font-size: 1.5rem;
	outline: none;
	border-width: initial;
	border-style: none;
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
`;
const TodoItemWrapper = styled.div`
	font-size: 18px;
	border: solid 1px black;

	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 3rem;
	padding: 1rem 2rem;
`;
