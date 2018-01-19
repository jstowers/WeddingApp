import React, { Component } from 'react';
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
		console.log('==> onSubmit()')
		console.log('this.state.name =', this.state.name);
		console.log('this.state.email =', this.state.email);

		let url = "http://localhost:3050/api/guests";

		let body = {
			'name': this.state.name,
			'email': this.state.email
		};

		console.log('body =', body);

		let reqBody = JSON.stringify(body);
		console.log('reqBody =', reqBody);

		fetch(url, {
			method: 'POST',
			body: JSON.stringify(body),
			//JSON.stringify(body),
			// //headers: new Headers({
			// 	'Content-Type': 'application/json'
			// })
			mode:'no-cors'
		})
		.then(res => {
			console.log('Inside .then');
			res.json();
		})
		.catch(err => {
			console.error('Error:', err);
		})
		.then(res => {
			res.json();
			console.log('Response:', res);
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