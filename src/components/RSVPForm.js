import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
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

	handleInputChange(e) {
		e.preventDefault();
		const target = e.target;
		const value = target.value;
		const id = target.id;
		this.setState({ [id]:value });
	}

	render() {
		return (
			<div className = { formStyle }>
				<form>
					<FormGroup>	
						<ControlLabel>Name</ControlLabel>
						<FormControl
							id="name"
							type="text"
							value={ this.state.name }
							placeholder="Please type your name"
							onChange={ this.handleInputChange }
						/>
					</FormGroup>
				</form>
			</div>
		);
	}
}

export default RSVPForm;