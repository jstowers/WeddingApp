// January 28, 2018
// rev. February 10, 2018
// To Do

import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import toDoStyle from '../../style/07-todo.css';
import {
	BioParkAquarium,
	BioParkGarden,
	DaVinci,
	OldTown,
	SanFelipe,
	SandiaTram
} from '../../img/todo/indexTodos';

const toDoArray = [
	{
		name: 'Da Vinci - The Genius',
		location: 'New Mexico Museum of Natural Science',
		img: '/images/DaVinci.jpg',
		url: 'http://bit.ly/2F8G1bh',
		address1: '1801 Mountain Rd. NW',
		address2: 'Albuquerque, NM 87104',
		phone: '505-841-2800',
		note: 'A 15,000 sq. ft. special exhibit with more than 200 pieces showcasing Leonardo Da Vinci\'s art, designs, and inventions.',
		cost1: '$22 adults, $20 seniors, $12 children',
		cost2: ''
	},
	{
		name: 'Sandia Peak Tramway',
		location: 'Base of the Sandia Mountains',
		img: '/images/SandiaTram.jpg',
		url: 'http://bit.ly/2BSBBrG',
		address1: '30 Tramway Rd. NE',
		address2: 'Albuquerque, NM 87122',
		phone: '505-856-7325',
		note: 'A scenic 2.7 mi tram ride to the top of Sandia Peak (10,378 ft).  Breathtaking views from the observation deck.',
		cost1: '$25 adults, $20 seniors and students, $15 children',
		cost2: ''
	},
	{
		name: 'ABQ BioPark Botanic Garden',
		location: 'South of Old Town',
		img: '/images/BioParkGarden.jpg',
		url: 'https://www.cabq.gov/culturalservices/biopark/garden',
		address1: '2601 Central Ave. NW',
		address2: 'Albuquerque, NM 87104',
		phone: '505-768-2000',
		note: 'More than 1.5 mi of paths through beautiful gardens.  A delight to the senses.',
		cost1: '$14.50 adults, $7.50 seniors, $6 children',
		cost2: 'combo tickets available for Aquarium'
	},
	{
		name: 'ABQ BioPark Aquarium',
		location: 'South of Old Town',
		img: '/images/BioParkAquarium.jpg',
		url: 'http://www.cabq.gov/culturalservices/biopark/aquarium',
		address1: '2601 Central Ave. NW',
		address2: 'Albuquerque, NM 87104',
		phone: '505-768-2000',
		note: 'Captivating marine habitats featuring sharks, fish, stingrays, and turtles.',
		cost1: '$14.50 adults, $7.50 seniors, $6 children',
		cost2: 'combo tickets available for Botanic Garden'
	},
	{
		name: 'Old Town',
		location: '',
		img: '/images/OldTown.jpg',
		url: 'http://www.albuquerqueoldtown.com/',
		address1: '200 N. Plaza St. NW',
		address2: 'Albuquerque, NM 87104',
		phone: '505-373-9123',
		note: 'Historic plaza dating back to the city\'s founding in 1706.',  
		cost1: 'ABQ\'s cultural mecca filled with shops, restaurants, Indian jewelry, and art galleries.',
		cost2: '',
	},
	{
		name: 'San Felipe de Neri Catholic Church',
		location: 'Old Town',
		img: '/images/SanFelipe.jpg',
		url: 'https://sanfelipedeneri.org/',
		address1: '2005 N. Plaza St. NW',
		address2: 'Albuquerque, NM 87104',
		phone: '505-243-4628',
		note: 'Traditional adobe Catholic church built in 1792.',  
		cost1: '',
		cost2: '',
	},

];

const toDoItems = toDoArray.map((item, index) => {
	return (
		<Row key={ index } className="rowDetail">
			<Col xs={4} md={4} lg={4}>
				<div className="photoDetail">
					<a href={ item.url } target="_blank">
						<img src = { item.img }
						     alt = { item.name } />
			     	</a>
				</div>
			</Col>
			<Col xs={8} md={8} lg={8}>
				<div className="toDoDetail">
					<h2>{ item.name }</h2>
					<a href={ item.url } target="_blank">
						{ item.url}
					</a>
					<h3>{ item.location }</h3>
					<h3>{ item.address1 }</h3>
					<h3>{ item.address2 }</h3>
					<h4>{ item.phone }</h4>
					<h4>{ item.note }</h4>
					<h4>{ item.cost1 }</h4>
					<h4>{ item.cost2 }</h4>
				</div>
			</Col>
		</Row>
	);
});

class ToDo extends Component {

	render() {
		return (
			<div className={ toDoStyle }>
				<div className = "toDoHeader">
					<h3>Albuquerque offers an abundance of fun experiences!<br/><br/>
						Hay una abundancia de diversiones y entretenimiento en Albuquerque!
					</h3>
				</div>
				<Grid className = "gridContainer">
					{ toDoItems }
				</Grid>
			</div>
		)
	}
}

export default ToDo;