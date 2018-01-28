import React, { Component } from 'react';
import headerStyle from '../../style/01-main.css';

class Header extends Component {

	render() {
		return (
			<div className = { headerStyle }>
				<h1>Ivy Calderon & Joe Stowers</h1>
				<h2>April 28, 2018</h2>
				<h3>Albuquerque, New Mexico</h3>
			</div>
		);
	}
}

export default Header;