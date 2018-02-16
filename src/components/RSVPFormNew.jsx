import React, { Component } from 'react';
// added for compatibility with Windows Internet Explorer ver. 11
import Promise from 'es6-promise-promise';
import axios from 'axios';
import { 
	Form,
	FormGroup, 
	FormControl, 
	ControlLabel,
	ButtonToolbar,
	Button
} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import formStyle from '../../style/05-rsvp.css';

class RSVPFormNew extends Component {

	constructor(props) {
		super(props);

		this.baseState = {
			name: '',
			email:'',
			numAdults:0,
			numChildren:0,
			songRequest:''
		}

		if (this.props.history.location.state) {
			let RSVPData = this.props.history.location.state.RSVPData;

			this.state = {
				name: RSVPData.name,
				email: RSVPData.email,
				numAdults: RSVPData.numAdults,
				numChildren: RSVPData.numChildren,
				songRequest: RSVPData.songRequest
			}
		} else {
			this.state = this.baseState;
		}

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

	onFormCancel = () => {
		this.setState(this.baseState);
	}

	onFormSubmit = () => {

		let RSVPData = {
			name: this.state.name,
			email: this.state.email,
			numAdults: this.state.numAdults,
			numChildren: this.state.numChildren,
			songRequest: this.state.songRequest
		}
	
		// route to RSVPConfirm page		
		this.props.history.push({
			pathname: '/RSVPConfirm',
			state: { RSVPData: RSVPData }
		});

	}

	outputForm = () => {
		return (
			<div className = { formStyle }>
				<h2>Please RSVP here</h2>
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
			</div>
		);
	}

	render() {

		return (
			<div>
				{ this.outputForm() }
			</div>
		)

	}
}

export default withRouter(RSVPFormNew);


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