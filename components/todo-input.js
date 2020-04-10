import React, { Component } from 'react';
import styled from 'styled-components';

export default class TodoInput extends Component {
	state = {
		date: '',
		todo: '',
	};
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		if (this.state.todo === '' || this.state.date === '') {
			alert('모든 항목을 입력해주세요!');
			return false;
		} else if (this.state.date.length != 8) {
			alert('날짜를 올바른 형식으로 입력해주세요!');
			return false;
		} else alert('입력되었습니다!');
		this.props.onCreate(this.state);
		this.setState({ date: '', todo: '' });
	};
	maxLengthCheck(object) {
		if (object.value.length > object.maxLength) {
			object.value = object.value.slice(0, object.maxLength);
		}
	}

	render() {
		const { date, todo } = this.state;
		return (
			<Form onSubmit={this.handleSubmit}>
				<InputSection>
					<P>시간</P>
					<Input
						maxlength="8"
						oninput="maxLengthCheck(this)"
						type="number"
						placeholder="날짜를 입력하세요 (ex.20200404)"
						value={date}
						onChange={this.handleChange}
						name="date"
					/>
				</InputSection>

				<InputSection>
					<P>TODO</P>
					<TextArea
						placeholder="할 일을 입력하세요"
						value={todo}
						onChange={this.handleChange}
						name="todo"
					/>
				</InputSection>
				<Button type="submit" onClick={this.warn}>
					등록
				</Button>
			</Form>
		);
	}
}

const Input = styled.input`
	width: 80%;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(97, 97, 97);
	border-image: initial;
	padding: 0.5rem 0.8rem;
`;
const TextArea = styled.textarea`
	width: 80%;
	height: 30vh;
	resize: none;
	border-width: 1px;
	border-style: solid;
	border-color: rgb(97, 97, 97);
	padding: 0.5rem 0.8rem;
`;
const P = styled.p`
	font-size: 1.5rem;
	color: white;
	margin: 0;
`;
const InputSection = styled.div`
	color: white;
	width: 100%;
	display: flex;
	flex-direction: row;
	-webkit-box-pack: justify;
	justify-content: space-between;
	align-items: flex-start;
	margin-bottom: 3rem;
`;
const Form = styled.form`
	font-size: 18px;

	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 37rem;
	flex: 1;
	border-width: 1px;
	border-style: solid;
	padding: 1rem 2rem;
`;
const Button = styled.button`
	color: white;
	background-color: rgb(97, 97, 97);
	font-size: 1.5rem;
	outline: none;
	border-width: initial;
	border-style: none;
	//border-color: initial;
	//border-image: initial;
	padding: 0.5rem 1rem;
	border-radius: 0.3rem;
`;
