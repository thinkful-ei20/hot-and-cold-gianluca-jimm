import React from 'react';

import Feedback from './Feedback';
import Form from './Form';
import History from './History';

export default class Game extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			answer: 25,
			guessList:[12,19,30]
		};
	}

	render() {
		const currentGuess = this.state.guessList.length - 1;
		return(<div>
			<Feedback answer={this.state.answer} guess={this.state.guessList[currentGuess]}/>
			<Form/>
			<History guessList={this.status.guessList}/>
		</div>);
	}
}