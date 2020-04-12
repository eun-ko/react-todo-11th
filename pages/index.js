import React, { useState } from 'react';
import styled from 'styled-components';

import TodoInput from '../components/todo-input';
import TodoList from '../components/todo-list';

export default function Home() {
	const [todos, setTodos] = useState([]);
	console.log(todos);

	const handleDelete = (index) => () => {
		console.log('hi');
		setTodos([
			...todos.slice(0, index),
			...todos.slice(index + 1, todos.length),
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
			console.log(newtodo);
			setTodos([...todos, newtodo]);
			alert('입력되었습니다!');
		}
	};

	return (
		<Wrapper>
			<Title>리액트-투두</Title>
			<Contents>
				<TodoInput onSubmit={handleAdd} />
				<Space />
				<TodoList {...{ todos }} onDelete={handleDelete} />
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
const Title = styled.p`
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
