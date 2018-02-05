// January 27, 2018
// Homepage

import React, { Component } from 'react';
import homeStyle from '../../style/03-home.css';

class Home extends Component {

	render() {
		
		return (
			<div className={ homeStyle }>
				<div className="datetime">
					<h2>Saturday, April 28, 2018</h2>
					<h3>4:00 pm</h3>
				</div>
				<div className="ceremony">
					<h2>Ceremony</h2>
					<h3>Ranchito de Los Cuates</h3>
					<h3>813 Ranchitos Rd. NW</h3>
					<h3>Los Ranchos, NM 87114</h3>
				</div>
				<div className="reception">
					<h2>Reception</h2>
					<h3>El Pinto</h3>
					<h3>10500 4th St. NW</h3>
					<h3>Albuquerque, NM 87114</h3>
				</div>	
			</div>
		);
	}
}

export default Home;