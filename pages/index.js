import React, { useState } from 'react';
import styled from 'styled-components';

import TodoInput from '../components/todo-input';
import TodoList from '../components/todo-list';

export default function Home() {
	const [todos, setTodos] = useState([]);

	const handleDelete = (index) => () => {
		setTodos([
			...todos.slice(0, index),
			...todo.slice(index + 1, todos.length),
		]);
	};
	const handleAdd = (newtodo) => {
		const { todo, date } = newtodo;
		if (todo === '' || date === '') {
			alert('모든 항목을 입력해주세요!');
			return;
		} else if (date.length !== 8) {
			alert('날짜를 올바른 형식으로 입력해주세요!');
			return;
		} else {
			setTodos(todos.concat({ date, todo }));
			alert('입력되었습니다!');
		}
	};

	return (
		<Wrapper>
			<Title>리액트-투두</Title>
			<Contents>
				<TodoInput
					date={date}
					todo={todo}
					onChangeDate={changeDate}
					onChangeTodo={changeTodo}
					onSubmit={submitTodo}
				/>
				<Space />
				<TodoList data={todos} onRemove={removeTodo} />
			</Contents>
		</Wrapper>
	);
}
const Space = styled.div`
	flex: 1;
`;

const Wrapper = styled.div`
	height: 100vh;
	font-size: 20px;
	background-color: rgb(155, 197, 195);
	padding: 4rem 5rem;
`;
const Title = styled.h1`
	font-size: 3rem;
	font-weight: 600;
	margin-bottom: 3rem;
	color: white;
`;
const Contents = styled.div`
	font-size: 0.1rem;
	display: flex;
	flex-direction: row;
`;
