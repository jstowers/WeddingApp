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

		const localUrl = 'http://localhost:3000';

		this.state = {
			name:'',
			numGuests:'',
			email:'',
			phone:'',
			songRequest:''
		}

		this.devUrl = 'http://localhost:3000';
		this.prodUrl = 'http://ivyjoe2018.us-east-1.elasticbeanstalk.com';
	}

	handleInputChange = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const id = target.id;
		this.setState({ [id]:value });
	}

	onSubmit = () => {

		let url = '';
		let endpoint = '/api/guests';	

		if (process.env.NODE_ENV === 'production') {
			url = this.prodUrl + endpoint;
			
		} else {
			url = this.devUrl + endpoint;
		}

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

		let url = '';
		let endpoint = '/api/data';

		if (process.env.NODE_ENV === 'production') {
			url = this.prodUrl + endpoint;
		} else {
			url = this.devUrl + endpoint;
		}

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