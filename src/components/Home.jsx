// January 27, 2018
// Homepage

import React, { Component } from 'react';
import headerStyle from '../../style/01-main.css';

class Home extends Component {

	render() {

		// console.log('Home props =', props);

		return (
			<div>
				<div className="datetime">
					<h3>Saturday, April 28, 2018</h3>
					<h3>4:00 pm</h3>
				</div>
				<div className="ceremony">
					<h3>Ceremony</h3>
					<h2>Ranchitos de Los Cuates</h2>
					<h2>813 Ranchitos Rd. NW</h2>
					<h2>Los Ranchos, NM 87114</h2>
				</div>
				<div className="reception">
					<h3>Reception</h3>
					<h2>El Pinto</h2>
					<h2>10500 4th St. NW</h2>
					<h2>Albuquerque, NM 87114</h2>
				</div>	
			</div>
		);
	}
}

export default Home;