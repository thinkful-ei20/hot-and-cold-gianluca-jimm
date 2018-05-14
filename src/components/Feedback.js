
import React from 'react';

export default class Feedback extends React.Component {

	render() {
		function getFeedBack(answer, guess) {
			const difference = answer - guess;
			switch(difference) {
			case (difference === 0):
				return 'You Win';
			case (Math.abs(difference) < 5):
				return 'Hot';
			case (Math.abs(difference) >= 5 && Math.abs(difference) < 10):
				return 'Warm';
			case (Math.abs(difference) >= 10):
				return 'Cold';
			}
		}

		// const answer = this.props.answer;
		// const guess = this.props.guess;

		return(
			<div>
				{/*<h1>{getFeedBack(answer, guess)}</h1>*/}
			</div>);
	}
}