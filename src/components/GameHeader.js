import React from 'react';

export default class GameHeader extends React.Component {
	render(){
		return(<header>
			<nav>
				<ul className="clearfix">
					<a className="about" href="#">what ?</a>
					<a className="new-game" href="#">+ new game</a>
				</ul>
			</nav>
		</header>);
	}
}