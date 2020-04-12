import React from 'react';
import styled from 'styled-components';

export default function TodoItem(props) {
	const { todoObj, onDelete } = props;
	const { todo, date } = todoObj;
	return (
		<Wrapper>
			<Row>
				<P>{todo}</P>
				<P>{date}</P>
			</Row>
			<DeleteButton onClick={onDelete}>??</DeleteButton>
		</Wrapper>
	);
}
const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
const P = styled.p`
	font-size: 1.5rem;
	color: white;
`;
const DeleteButton = styled.button`
	display: block;
	color: white;
	background-color: rgb(97, 97, 97);
	font-size: 1.5rem;
	outline: none;
	border: none;
	border-radius: 0.3rem;
	padding: 0.5rem 1rem;
	width: fit-content;
	margin-left: auto;
`;
const Wrapper = styled.div`
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
