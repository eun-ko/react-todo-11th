import React, { useState } from 'react';
import styled from 'styled-components';

import TodoInput from '../components/todo-input';
import TodoList from '../components/todo-list';

export default function Home() {
	const [date, setDate] = useState();
	const [todo, setTodo] = useState();
	const [todos, setTodos] = useState([]);
	const [id, setID] = useState(0);

	const changeTodo = (e) => {
		setTodo(e.target.value);
	};

	const changeDate = (e) => {
		setDate(e.target.value);
	};

	const removeTodo = (id) => {
		const newTodos = [...todos];
		setTodos(newTodos.filter((info) => info.id !== id));
	};
	const submitTodo = (e) => {
		e.preventDefault();
		if (todo === '' || date === '') {
			alert('모든 항목을 입력해주세요!');
			return false;
		} else if (date.length != 8) {
			alert('날짜를 올바른 형식으로 입력해주세요!');
			return false;
		} else alert('입력되었습니다!');
		setTodos(todos.concat({ id: id, date: date, todo: todo }));
		setTodo('');
		setDate('');
		setID(id + 1);
	};

	return (
		<Wrapper>
			<Subject>리액트-투두</Subject>
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
