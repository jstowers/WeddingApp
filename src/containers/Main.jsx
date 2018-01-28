// January 27, 2018
// Routes

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import RSVPForm from '../components/RSVPForm';

// Main implements the new React Router v.4
const Main = () => (
	<main>
		<Switch>
			<Route path exact ='/' component = { Home } />
			<Route path ='/RSVP' component = { RSVPForm } />
		</Switch>
	</main>
);

export default Main;