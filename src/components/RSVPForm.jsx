import React, { Component } from 'react';
import axios from 'axios';
import { Form,
		 Col,
		 FormGroup, 
		 FormControl, 
		 ControlLabel,
		 ButtonToolbar,
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
	}

	handleInputChange = (e) => {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const id = target.id;
		this.setState({ [id]:value });
	}

	onSubmit = () => {
	
		let url = "http://localhost:3000/api/guests";

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

	render() {
		return (
			<div className = { formStyle }>
				<Form horizontal>
					<FormGroup controlId="name">	
						<Col componentClass={ ControlLabel } sm={2}>
							 Name
						</Col>
						<Col sm={10}>
							<FormControl 
								 type="text" 
								 value={ this.state.name }
								 placeholder="Name"
								 onChange={ this.handleInputChange }
							/>
						</Col>
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
				</ButtonToolbar>
			</div>
		);
	}
}

export default RSVPForm;