import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';

class CommentForm extends Component {
	
	// я всё правильно понимаю, что тут проптайпсов нет и это можно не писать?
	// да, но я обычно оставляю, чтоб видеть что сюда ничего передавать не надо
	static propType = {

	}

	state = {
		name: '',
		message: ''
	}

	handleChange = val => ev => {
		let newValue = {};
		
		newValue[val] = ev.target.value;
		this.setState(newValue);
	}

	handleChangeName = this.handleChange('name');
	handleChangeMessage = this.handleChange('message');

	handleSend = ev => {
		let userName = this.state.name;
		let userMessage = this.state.message;

		console.log('User Name:', userName);
		console.log('User Message:', userMessage);
	}

	render() {		
		return (
			<div className='write-comment-box'>
				Name
				<input type="text"
					value={this.state.name}
					onChange={this.handleChangeName}
				/>
				Message
				<textarea
					value={this.state.message}
					onChange={this.handleChangeMessage}
				/>
				<button onClick={this.handleSend}>send comment</button>
			</div>
		)
	}
}

export default CommentForm;
