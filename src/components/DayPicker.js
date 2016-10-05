import React, { Component, PropTypes } from 'react'
import moment from 'moment'
import DayPicker, { DateUtils } from "react-day-picker"
import 'react-day-picker/lib/style.css'

class Calendar extends Component {
	constructor(props) {
		super(props);
	    this.handleDayClick = this.handleDayClick.bind(this);
	    this.handleResetClick = this.handleResetClick.bind(this);
	}

	state = {
		from: null,
		to: null
	}

	handleDayClick(e, day) {
		const range = DateUtils.addDayToRange(day, this.state);
    	this.setState(range);
	}

	handleResetClick(e) {
		e.preventDefault();
		this.setState({
			from: null,
			to: null
		});
	}

	render() {
		const { from, to } = this.state;
		let firstDate = '';
		let lastDate = '';

		if (from) {
			firstDate = moment(from).format('L');
		} else {
			firstDate = 'Enter Date';
		}

		if (to) {
			lastDate = moment(to).format('L');
		} else {
			lastDate = 'Enter Date';
		}

		return (
			<div>
				
				<DayPicker
					onDayClick={ this.handleDayClick }
					selectedDays = { day => DateUtils.isDayInRange(day, {from, to})}
				/>

				From: {firstDate}
				&nbsp;
				To: {lastDate}
				<br />
				<a href="#" onClick={ this.handleResetClick }>Reset</a>
			</div>
		);
	}
}

export default Calendar; 