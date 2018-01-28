import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';
import headerStyle from '../../style/01-main.css';
import NavBar from './NavBar';

const Header = () => (
	<header className = { headerStyle }>
		<div className = { headerStyle }>
			<h1>Ivy Calderon & Joe Stowers</h1>
			<h2>April 28, 2018</h2>
			<h3>Albuquerque, New Mexico</h3>
		</div>
		<NavBar />
	</header>
)

export default Header;
