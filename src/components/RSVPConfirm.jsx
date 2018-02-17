// RSVP Confirm
// February 13, 2018

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { 
	Button,
	ButtonToolbar, 
	Table 
} from 'react-bootstrap';
import formStyle from '../../style/05-rsvp.css';


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

	onRSVPConfirm = () => {

		let RSVPData = this.props.location.state.RSVPData;

		// route to RSVPPost page		
		this.props.history.push({
			pathname: '/RSVPPost',
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
							<td>Song Request for Reception</td>
							<td><b>{ RSVP.songRequest }</b></td>
						</tr>
					</tbody>
				</Table>
				<ButtonToolbar>
					<Button bsStyle="danger"
		        		    style={{color: 'white', 'textDecoration':'none'}}
					        onClick={ this.goBack }>Go Back
			        </Button>
	      			<Button type="submit"
	      					bsStyle="primary"
	      		  			onClick={ this.onRSVPConfirm }>Confirm RSVP
	      			</Button>
				</ButtonToolbar>
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

export default withRouter(RSVPConfirm);

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
*/
