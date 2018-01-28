// January 27, 2018
// Routes Defined Using React Router v.4

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import OurStory from '../components/OurStory';
import RSVPForm from '../components/RSVPForm';

// Main implements the new React Router v.4
// https://reacttraining.com/react-router/web/api/
const Main = () => (
	<Switch>
		<Route exact path ='/' component = { Home } />
		<Route path ='/OurStory' component = { OurStory } />
		<Route path ='/RSVP' component = { RSVPForm } />
	</Switch>
);

export default Main;
