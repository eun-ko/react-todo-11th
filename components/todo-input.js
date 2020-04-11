import React from 'react';
import styled from 'styled-components';

export default function TodoInput(props) {
	const [newTodo, setNewTodo] = useState({ date: '', todo: '' });
	const { onSubmit } = props;

	const handleFormChange = (e) => {
		setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
	};

	const maxLengthCheck = (object) => {
		if (object.value.length > object.maxLength) {
			object.value = object.value.slice(0, object.maxLength);
		}
	};

	return (
		<Wrapper>
			<Row>
				<Label>시간</Label>
				<Input
					maxlength="8"
					oninput="maxLengthCheck(this)"
					type="number"
					placeholder="날짜를 입력하세요 (ex.20200404)"
					value={date}
					onChange={onChangeDate}
				/>
			</Row>

			<Row>
				<Label>TODO</Label>
				<TextArea
					placeholder="할 일을 입력하세요"
					value={todo}
					onChange={onChangeTodo}
				/>
			</Row>
			<SubmitButton onClick={onSubmit}>등록</SubmitButton>
		</Wrapper>
	);
}

const Input = styled.input`
	width: 80%;
	border: 1px solid rgb(97, 97, 97);
	padding: 0.5rem 0.8rem;
`;
const TextArea = styled.textarea`
	width: 80%;
	height: 30vh;
	resize: none;
	border: 1px solid rgb(97, 97, 97);
	padding: 0.5rem 0.8rem;
`;
const Label = styled.label`
	font-size: 1.5rem;
	color: white;
	margin: 0;
`;
const Row = styled.div`
	color: white;
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 3rem;
`;
const Wrapper = styled.form`
	font-size: 18px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 37rem;
	border: 1px solid black;
	padding: 1rem 2rem;
`;
const SubmitButton = styled.button`
	color: white;
	background-color: rgb(97, 97, 97);
	font-size: 1.5rem;
	outline: none;
	border: none;
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
`;
