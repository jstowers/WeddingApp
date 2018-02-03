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
					<Link to='/RSVP'>RSVP</Link>
				</NavItem>
				<NavItem eventKey={4}>
					<Link to='/YourStay'>Your Stay</Link>
				</NavItem>
				<NavItem eventKey={5}>
					<Link to='ToDo'>To Do</Link>
				</NavItem>
				<NavItem eventKey={6}>
					<Link to='Restaurants'>Restaurants</Link>
				</NavItem>
			</Nav>
		);
	}
}

export default NavBar;
