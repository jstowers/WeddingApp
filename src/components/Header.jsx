import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import headerStyle from '../../style/01-main.css';
import NavBar from './NavBar';

/*
const Header = () => (
	<header>
		<div className = { headerStyle }>
			<h1>Ivy Calderon & Joe Stowers</h1>
			<h2>April 28, 2018</h2>
			<h3>Albuquerque, New Mexico</h3>
		</div>
		<NavBar />
	</header>
)
*/

const Header = () => (
	<header>
		<div className = { headerStyle }>
			<h1>Ivy Calderon & Joe Stowers</h1>
			<h2>April 28, 2018</h2>
			<h3>Albuquerque, New Mexico</h3>
			<Nav bsStyle="tabs" justified activeKey={1}>
				<NavItem eventKey={1}>
					<Link to='/'>Home</Link>
				</NavItem>
				<NavItem eventKey={2}>
					Our Story
				</NavItem>
				<NavItem eventKey={3}>
					<Link to='/RSVP'>RSVP</Link>
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
		</div>
	</header>
);

export default Header;