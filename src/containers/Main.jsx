// January 27, 2018
// Routes Defined With React Router v.4

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';
import OurStory from '../components/OurStory';
import RSVPForm from '../components/RSVPForm';
import YourStay from '../components/YourStay';
import ToDo from '../components/ToDo';
import Restaurants from '../components/Restaurants';

// Main implements the new React Router v.4
// Official documentation: https://reacttraining.com/react-router/web/api/
const Main = () => (
	<Switch>
		<Route exact={true} path ='/' component = { Home } />
		<Route path ='/OurStory' component = { OurStory } />
		<Route path ='/RSVP' component = { RSVPForm } />
		<Route path ='/YourStay' component = { YourStay } />
		<Route path ='/ToDo' component = { ToDo } />
		<Route path ='/Restaurants' component = { Restaurants } />
	</Switch>
);

export default Main;
