import React, { Component } from 'react';
import axios from 'axios';
import { Form,
		 Col,
		 FormGroup, 
		 FormControl, 
		 ControlLabel,
		 ButtonToolbar,
		 ButtonGroup,
		 Button } from 'react-bootstrap';
import formStyle from '../../style/01-main.css';

class RSVPForm extends Component {

	constructor(props) {
		super(props);

		this.state = {
			name:'',
			numGuests:'',
			email:'',
			phone:'',
			songRequest:''
		}

		this.hostUrl = __API__;

	}

	handleInputChange = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const id = target.id;
		this.setState({ [id]:value });
	}

	onSubmit = () => {

		let newGuestPath = 'api/guests';
		let url = this.hostUrl + newGuestPath;
		console.log('url onSubmit =', url);

		let body = {
			'name': this.state.name,
			'email': this.state.email
		}

		axios.post(url, body)
		.then(res => {
			console.log('res =', res);	
		})
		.catch(err => {
			console.log('err =', err);
		})
	}

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

	render() {
		return (
			<div className = { formStyle }>
				<Form horizontal>
					<FormGroup controlId="name">
						<ControlLabel>Name</ControlLabel>
						<FormControl 
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
					<ButtonToolbar>
						<ControlLabel># Adults</ControlLabel>

						<ButtonGroup>
							<Button>1</Button>
							<Button>2</Button>
							<Button>3</Button>

						</ButtonGroup>


					</ButtonToolbar>
				</Form>
				<ButtonToolbar>
			        <Button 
			        	bsStyle="danger"
		        		style={{color: 'white', 'textDecoration':'none'}}>Cancel
        			</Button>
					<Button 
						type="submit"
						bsStyle="primary"
						onClick= { this.onSubmit }>Submit
			        </Button>
			        <Button 
						type="submit"
						bsStyle="primary"
						onClick= { this.onClick }>Get Data
			        </Button>
				</ButtonToolbar>
			</div>
		);
	}
}

export default RSVPForm;