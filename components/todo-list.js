import React from 'react';
import styled from 'styled-components';

import TodoItem from './todo-item';

export default function TodoList(props) {
	const { todos, onDelete } = props;

	return (
		<Wrapper>
			{todos
				.sort((todo1, todo2) => {
					return todo1.date - todo2.date;
				})
				.map((todoObj, index) => (
					<TodoItem
						key={JSON.stringify(todo)}
						{...{ todoObj }}
						onDelete={onDelete(index)}
					/>
				))}
		</Wrapper>
	);
}

const Wrapper = styled.div`
	font-size: 18px;
	flex: 1;
`;
