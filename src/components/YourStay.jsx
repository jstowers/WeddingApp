// January 28, 2018
// Your Stay Component

import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
// import headerStyle from '../../style/01-main.css';

const hotelsArray = [
	{
		name: 'Nativo Lodge',
		img: '/img/hotels/NativoLodge',
		website: 'http://www.nativolodge.com/',
		address1: '6000 Pan American Freeway, NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-798-4300',
		distance: '6.0 miles'
	},
	{
		name: 'Nativo Lodge',
		img: 'img/hotels/NativoLodge',
		website: 'http://www.nativolodge.com/',
		address1: '6000 Pan American Freeway, NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-798-4300',
		distance: '6.0 miles'
	}

]


const YourStay = () => {

	const hotelItems = hotelsArray.map((hotel,index) => {
		return (
			<Row>
				<Col xs={4} md={4}>
					<h3>Image</h3>
				</Col>
				<Col xs={8} md={8}>
					<h3>Details</h3>
				</Col>
			</Row>
		);

	});

	return (
		<div>
			<Grid>
				{ hotelItems }
			</Grid>
		</div>
	);
}

export default YourStay;