// January 28, 2018
// Your Stay Component

import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import yourstayStyle from '../../style/06-yourstay.css';
// import indexPhotos from '../../img/hotels/indexPhotos.js';
import NativoLodge from './NativoLodge.jpg';


const hotelsArray = [
	{
		name: 'Nativo Lodge',
		img: { NativoLodge },
		url: 'http://www.nativolodge.com/',
		address1: '6000 Pan American Freeway, NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-798-4300',
		distance: '6.0 miles'
	},
	{
		name: 'Nativo Lodge',
		img: { NativoLodge },
		url: 'http://www.nativolodge.com/',
		address1: '6000 Pan American Freeway, NE',
		address2: 'Albuquerque, NM 87109',
		phone: '505-798-4300',
		distance: '6.0 miles'
	}

]


const YourStay = () => {

	// console.log('hotelsArray =', hotelsArray);

	const hotelItems = hotelsArray.map((hotel,index) => {
		return (
			<Row key={ index }>
				<Col xs={4} md={4} lg={4}>
					<a href={ hotel.url } target="_blank">
						<img
						     src = { hotel.img }
						     alt = { hotel.name } />
				    </a>
				</Col>
				<Col xs={8} md={8} lg={8}>
					<div className="hotelDetail">
						<h2>{ hotel.name }</h2>
						<h3>{ hotel.website }</h3>
						<a href= { hotel.url } target="_blank" className="weblink">
							{ hotel.url }
						</a>
						<h3>{ hotel.address1 }</h3>
						<h3>{ hotel.address2 }</h3>
						<h4>{ hotel.phone }</h4>
						<h4>{ hotel.distance }</h4>
					</div>
				</Col>
			</Row>
		);

	});

	return (
		<div className={ yourstayStyle }>
			<Grid>
				{ hotelItems }
			</Grid>
		</div>
	);
}

export default YourStay;