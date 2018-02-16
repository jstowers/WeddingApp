import React, { Component } from 'react';
// added for compatibility with Windows Internet Explorer ver. 11
import Promise from 'es6-promise-promise';
import axios from 'axios';
import { Form,
		 Col,
		 FormGroup, 
		 FormControl, 
		 ControlLabel,
		 Modal,
		 ButtonToolbar,
		 ButtonGroup,
		 Button,
		 Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import formStyle from '../../style/05-rsvp.css';

class RSVPForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name:'',
			email:'',
			phone:'',
			numAdults:0,
			numChildren:0,
			songRequest:'',
			despacito:'',
			showModal:false,
			confirmRSVP: false,
			fromRSVP: true
		}

		this.baseState = this.state;

		// defined in webpack.config file
		this.hostUrl = __API__;

	}

	handleInputChange = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const id = target.id;
		this.setState({ [id]:value });
	}

	toggleModal = () => {
		this.setState({ showModal: !this.state.showModal });
	}

	onFormCancel = () => {
		this.setState(this.baseState);
	}

	onFormSubmit = () => {
		this.toggleModal();
	}

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

	checkEvent = (match, location) => {
		// console.log('location =', location);
		// console.log('match =', match);

		return location.state  = {
			fromRSVP: true
		}
	}

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

	render() {

		if (!this.state.confirmRSVP){
			return (
				<div className = { formStyle }>
					<Form horizontal>
						<FormGroup>
							<ControlLabel>Name</ControlLabel>
							<FormControl
								 id="name" 
								 type="text" 
								 value={ this.state.name }
								 placeholder="Name"
								 onChange={ this.handleInputChange }
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Email</ControlLabel>
							<FormControl
								id="email"
								type="email"
								value={ this.state.email }
								placeholder="Please add your email"
								onChange={ this.handleInputChange }
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Number of Adults</ControlLabel>
							<FormControl
								id="numAdults"
								type="number"
								value={ this.state.numAdults }
								placeholder="Number of adults in your party"
								onChange={ this.handleInputChange }
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Number of Children (ages 5-12)</ControlLabel>
							<FormControl
								id="numChildren"
								type="number"
								value={ this.state.numChildren }
								placeholder="Number of children in your party"
								onChange={ this.handleInputChange }
							/>
						</FormGroup>
						<FormGroup>
							<ControlLabel>Song Request</ControlLabel>
							<FormControl
								 id="songRequest" 
								 type="text" 
								 value={ this.state.songRequest }
								 placeholder="Enter your song request"
								 onChange={ this.handleInputChange }
							/>
						</FormGroup>
					</Form>
					<ButtonToolbar>
				        <Button 
				        	bsStyle="danger"
			        		style={{color: 'white', 'textDecoration':'none'}}
			        		onClick= { this.onFormCancel }>Cancel
	        			</Button>
						<Button 
							type="submit"
							bsStyle="primary"
							onClick= { this.onFormSubmit }>Submit
				        </Button>
					</ButtonToolbar>
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

				</div>
			);
		} else {
			return (
				<div>
					{ this.closeRSVP() }
				</div>
			);
		}
	}
}

export default RSVPForm;


/*

  	// USE ONLY TO DELETE THE GUESTS COLLECTION!!
	<ButtonToolbar>
	    <Button 
			type="submit"
			bsStyle="primary"
			onClick= { this.onDelete }>Delete Guests Data
	    </Button>
	</ButtonToolbar>

	onDelete = () => {
		let deleteGuestsPath = 'api/delete';
		let url = this.hostUrl + deleteGuestsPath;
		console.log('url onDelete =', url);

		axios.get(url)
		.then(res => {
			console.log('res =', res);
		})
		.catch(err => {
			console.log('err =', err);
		})
	}

	// Used to Get All Guests from Database
	onClick = () => {

		let getGuestsPath = 'api/data';
		let url = this.hostUrl + getGuestsPath;
		console.log('url onClick =', url);

		axios.get(url)
		.then(res => {
			console.log('res =', res);
		})
		.catch(err => {
			console.log('err =', err);
		})
	}

	// Did not work => a proposed Dev Button Toolbar
	showDevButtons = () => {

		if (process.env.NODE_ENV === 'develop') {
			console.log('inside showDevButtons');
			return (
				<div>
					<ButtonToolbar>

				        <Button 
							type="submit"
							bsStyle="primary"
							onClick= { this.onClick }>Get Data
				        </Button>
					</ButtonToolbar>
				</div>
			)
		}
	}
*/