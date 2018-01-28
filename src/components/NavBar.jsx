import React, { Component } from 'react';
import headerStyle from '../../style/01-main.css';
import { Nav, NavItem } from 'react-bootstrap;'

class NavBar extends Component {

	render() {
		return (
			<Nav bsStyle="tabs" justified activeKey={1}>
				<NavItem eventKey={1}>
					Home
				</NavItem>
				<NavItem eventKey={2}>
					Our Story
				</NavItem>
				<NavItem eventKey={3}>
					RSVP
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
