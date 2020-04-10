import React, { Component } from 'react';
import styled from 'styled-components';

import TodoItem from './todo-item';

export default class TodoList extends Component {
	render() {
		const { data, onRemove } = this.props;
		const list = data.map((todolist) => (
			<TodoItem key={todolist.id} todolist={todolist} onRemove={onRemove} />
		));
		return <TodoListWrapper> {list} </TodoListWrapper>;
	}
}

const TodoListWrapper = styled.div`
	font-size: 18px;
	flex: 1;
`;
