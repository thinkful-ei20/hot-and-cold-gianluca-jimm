import React from 'react';
import GameHeader from './GameHeader';
import Game from './Game';
import About from './About';

export default class HotColdApp extends React.Component {
	render(){
		return(
			<div>
				<GameHeader/>
				<About/>
				<Game/>
			</div>);
	}
}