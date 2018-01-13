import React, { Component } from 'react';
import Header from '../components/Header';
import RSVPForm from '../components/RSVPForm';

class App extends Component {

  	render() {
	    return (
	      	<div>
	      		<Header />
	      		<RSVPForm />
  			</div>
	    );
  	}
}

export default App;
