import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import headerStyle from '../../style/01-main.css';

class NavBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			activeKey: 1
		}
	}

	handleSelect = (selectedKey) => {
		this.setState({ activeKey: selectedKey })
	}

	render() {
		return (
			<Nav bsStyle="tabs" 
			     justified 
			     activeKey={ this.state.activeKey }
			     onSelect={ key => this.handleSelect(key) }>
				<NavItem eventKey={1}>
					<Link to='/'>Home</Link>
				</NavItem>
				<NavItem eventKey={2}>
					<Link to='/OurStory'>Our Story</Link>
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
