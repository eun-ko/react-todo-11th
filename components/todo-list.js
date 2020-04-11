import React from 'react';
import styled from 'styled-components';

import TodoItem from './todo-item';

export default function TodoList(props) {
	const { data, onRemove } = props;

	const list = data
		.sort((todo1, todo2) => {
			return todo1.date - todo2.date;
		})
		.map((todolist) => (
			<TodoItem key={todolist.id} {...todolist} onRemove={onRemove} />
		));
	return <TodoListWrapper> {list} </TodoListWrapper>;
}

const TodoListWrapper = styled.div`
	font-size: 18px;
	flex: 1;
`;
