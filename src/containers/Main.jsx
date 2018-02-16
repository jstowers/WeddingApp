// January 27, 2018
// Routes Defined With React Router v.4

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import OurStory from '../components/OurStory';
import RSVPForm from '../components/RSVPForm';
import RSVPFormNew from '../components/RSVPFormNew';
import RSVPConfirm from '../components/RSVPConfirm';
import YourStay from '../components/YourStay';
import ToDo from '../components/ToDo';
import Restaurants from '../components/Restaurants';

// Main implements the new React Router v.4
// Official documentation: https://reacttraining.com/react-router/web/api/
const Main = () => (
	<Switch>
		<Route exact={true} path ='/' component = { Home } />
		<Route path ='/Home' component = { Home } />
		<Route path ='/OurStory' component = { OurStory } />
		<Route path ='/RSVPFormNew' component = { RSVPFormNew } />
		<Route path ='/RSVPConfirm' component = { RSVPConfirm } />
		<Route path ='/YourStay' component = { YourStay } />
		<Route path ='/ToDo' component = { ToDo } />
		<Route path ='/Restaurants' component = { Restaurants } />
	</Switch>
);

export default Main;

/*
	<Route path ='/RSVP' component = { RSVPForm } />
	

*/
