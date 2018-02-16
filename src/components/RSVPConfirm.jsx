// RSVP Confirm
// February 13, 2018

import React, { Component } from 'react';
import formStyle from '../../style/05-rsvp.css';
import { Button, Table } from 'react-bootstrap';

// entry form

// on submit, direct to confirmation component, send request body as props

// on submit, make POST request to database

class RSVPConfirm extends Component {

	constructor(props) {
		super(props);

	}

	goBack = () => {

		let RSVPData = this.props.location.state.RSVPData;

		this.props.history.replace({
			pathname: '/RSVPFormNew',
			state: { RSVPData: RSVPData }
		});
	}

	showConfirmForm = (RSVP) => {

		return (
			<div>
				<h1>RSVP Confirmation</h1>
	  			<h3>Saturday, April 28, 2018 at 4:00 pm</h3>
				<h2>
					<b>{ RSVP.name },</b>
				</h2>
				<h4>
					Your presence is an honor to our families!
					<br />
					<br />
				</h4>
				<Table>
					<tbody>
						<tr>
							<td>Number of Adults</td>
							<td><b>{ RSVP.numAdults }</b></td>
						</tr>
						<tr>
							<td>Number of Children</td>
							<td><b>{ RSVP.numChildren }</b></td>
						</tr>
						<tr>
							<td>Your Song Request</td>
							<td><b>{ RSVP.songRequest }</b></td>
						</tr>
					</tbody>
				</Table>
				<div>
					<Button onClick={ this.goBack }>Go Back</Button>
	      			<Button bsStyle="primary"
	      		  			onClick={ this.onRSVPConfirm }>Confirm RSVP
	      			</Button>
				</div>
			</div>
		);
	}


	render() {

		let RSVPData = this.props.location.state.RSVPData;

		return (
			<div className = { formStyle }>
				{ this.showConfirmForm(RSVPData) }
			</div>
		);
	}

}

/*
const RSVPConfirm = () => {

	console.log('INSIDE RSVPConfirm');

	return (
		<div>
			<h3>You have reached the RSVP Confirm screen!</h3>
		</div>
	);
}
*/

export default RSVPConfirm;

/*

	onRSVPConfirm = () => {

		let addGuestPath = 'api/addGuest';
		let url = this.hostUrl + addGuestPath;
		console.log('RSVPConfirm url =', url);

		let body = {
			'name': this.state.name,
			'email': this.state.email,
			'numAdults': this.state.numAdults,
			'numChildren': this.state.numChildren,
			'songRequest': this.state.songRequest
		};

		// console.log('onRSVPConfirm body =', body);

		axios.post(url, body)
		.then(res => {
			console.log('res =', res);
			this.setState({ confirmRSVP:true });
		})
		.catch(err => {
			console.log('err =', err);
		});
	}


	<Modal show={this.state.showModal} onHide={this.toggleModal}>
	    <Modal.Header>
	  		<h1>RSVP Confirmation</h1>
	  		<h3>Saturday, April 28, 2018 at 4:00 pm</h3>
	    </Modal.Header>
	    <Modal.Body>
	    	{this.modalBody()}
		</Modal.Body>
	    <Modal.Footer>
	      <Button onClick={ this.toggleModal }>Go Back</Button>
	      <Button bsStyle="primary"
	      		  onClick={ this.onRSVPConfirm }>Confirm RSVP
	      </Button>
	    </Modal.Footer>
	</Modal>


	closeRSVP = () => {

		return (
			<Modal show={this.state.showModal} onHide={this.toggleModal}>
			    <Modal.Header>
		      		<h1>RSVP Confirmation</h1>
		      		<h3>Saturday, April 28, 2018 at 4:00 pm</h3>
			    </Modal.Header>
			    <Modal.Body>
			    	<div className="closeRSVP">
				    	<h2>Success!</h2>
				    	<h3>We have received your RSVP.</h3>
			    	</div>
			    	<div className="bienvenidos">
			    		<h3>Bienvenidos a Albuquerque!</h3>
				    	<h3>Nos veremos muy pronto!</h3>
			    	</div>
		    	</Modal.Body>
			    <Modal.Footer>
			      	<Button>
			      		<Link to='/Home'
						>Close</Link>
		      		</Button>
			    </Modal.Footer>
			 </Modal>
		)
	}

	modalBody = () => {
		return (
			<div>
				<h2>
					<b>{this.state.name},</b>
				</h2>
				<h4>
					Your presence is an honor to our families!
					<br />
					<br />
				</h4>
				<Table>
					<tbody>
						<tr>
							<td>Number of Adults</td>
							<td><b>{ this.state.numAdults }</b></td>
						</tr>
						<tr>
							<td>Number of Children</td>
							<td><b>{ this.state.numChildren }</b></td>
						</tr>
						<tr>
							<td>Your Song Request</td>
							<td><b>{ this.state.songRequest }</b></td>
						</tr>
					</tbody>
				</Table>
			</div>
		)
	}




*/