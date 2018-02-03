import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';
import { Nav, NavItem } from 'react-bootstrap';
import headerStyle from '../../style/01-main.css';

class NavBar extends Component {

	constructor(props) {
		super(props);

		this.state = {
			tabs: {
				'1': 'active',
				'2': '',
				'3': '',
				'4': '',
				'5': '',
				'6': ''
			}
		}
		
	}

	// changes the selected tab from inactive to active
	handleSelect = (selectedKey) => {
	
		console.log('typeof(selectedKey) =', typeof(selectedKey));

		let tabs = this.state.tabs;

		for (let tab in tabs) {
			if (tab == selectedKey) {
				tabs[tab] = 'active';
			} else {
				tabs[tab] = ''
			}
		}

		this.setState({ tabs:tabs });

	}

	render() {
		return (
			<Nav bsStyle="tabs"
				 justified
				 onSelect={ this.handleSelect } >

			  	<LinkContainer to='Home'
		     	               className={ this.state.tabs[1] }>
			     	<NavItem eventKey={1}>Home</NavItem>
		     	</LinkContainer>

		     	<LinkContainer to='OurStory'
		     	               className={ this.state.tabs[2] }>
			     	<NavItem eventKey={2}>Our Story</NavItem>
		     	</LinkContainer>

		     	<LinkContainer to='RSVP'
		     	               className={ this.state.tabs[3] }>
			     	<NavItem eventKey={3}>RSVP</NavItem>
		     	</LinkContainer>

		     	<LinkContainer to='YourStay'
		     	               className={ this.state.tabs[4] }>
			     	<NavItem eventKey={4}>Your Stay</NavItem>
		     	</LinkContainer>
		     	
		     	<LinkContainer to='ToDo'
		     	               className={ this.state.tabs[5] }>
			     	<NavItem eventKey={5}>To Do</NavItem>
		     	</LinkContainer>

		     	 <LinkContainer to='Restaurants'
		     	               className={ this.state.tabs[6] }>
			     	<NavItem eventKey={6}>Restaurants</NavItem>
		     	</LinkContainer>
			</Nav>
		);
	}


	/*

   <LinkContainer to='/' className={ this.state.oneActive }>
			     	<NavItem eventKey={1}>Home</NavItem>
		     	</LinkContainer>

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
					<Link to='OurStory'>Our Story</Link>
				</NavItem>
				<NavItem eventKey={3}>
					<Link to='RSVP'>RSVP</Link>
				</NavItem>
				<NavItem eventKey={4}>
					<Link to='YourStay'>Your Stay</Link>
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
	*/
}

export default NavBar;
