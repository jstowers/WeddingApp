import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import headerStyle from '../../style/01-main.css';
import { Nav, NavItem } from 'react-bootstrap';

class NavBar extends Component {

	render() {
		return (
			<Nav bsStyle="tabs" justified activeKey={1}>
				<NavItem eventKey={1}>
					<Link to='/'>Home</Link>
				</NavItem>
				<NavItem eventKey={2}>
					Our Story
				</NavItem>
				<NavItem eventKey={3}>
					<Link to='/RSVP'>RSVPForm</Link>
				</NavItem>
				<NavItem eventKey={4}>
					Your Stay
				</NavItem>
				<NavItem eventKey={5}>
					To Do
				</NavItem>
				<NavItem eventKey={6}>
					Restaurants
				</NavItem>
			</Nav>
		);
	}
}

export default NavBar;
