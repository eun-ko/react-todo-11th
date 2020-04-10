import React, { Component } from 'react';
import styled from 'styled-components';

import TodoInput from '../components/todo-input';
import TodoList from '../components/todo-list';

export default class Home extends Component {
	id = 0;
	state = {
		todos: [],
	};

	handleCreate = (data) => {
		const { todos } = this.state;
		this.setState({
			todos: todos.concat({ id: this.id++, ...data }),
		});
	};
	handleRemove = (id) => {
		const { todos } = this.state;
		this.setState({
			todos: todos.filter((info) => info.id !== id),
		});
	};

	render() {
		const { todos } = this.state;

		return (
			<Wrapper>
				<Subject>리액트-투두</Subject>
				<Contents>
					<TodoInput onCreate={this.handleCreate}></TodoInput>
					<Space />
					<TodoList data={todos} onRemove={this.handleRemove} />
				</Contents>
			</Wrapper>
		);
	}
}
const Space = styled.div`
	flex: 0.3;
`;

const Wrapper = styled.div`
	height: 100vh;
	font-size: 20px;
	background-color: rgb(155, 197, 195);
	padding: 4rem 5rem;
`;
const Subject = styled.div`
	font-size: 3rem;
	font-weight: 600;
	padding: 0px;
	margin: 0px 0px 3rem;
	color: white;
`;
const Contents = styled.div`
	font-size: 0.1rem;

	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
