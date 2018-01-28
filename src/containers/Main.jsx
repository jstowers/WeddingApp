// January 27, 2018
// Routes

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../components/Home';


// Main implements the new React Router v.4
const Main = () => (

	<Switch>
		<Route path ='/' component = { Home } />
	</Switch>

);

export default Main;