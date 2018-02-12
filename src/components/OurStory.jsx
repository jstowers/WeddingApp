// January 27, 2018
// Our Story

import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import ourStoryStyle from '../../style/04-ourstory.css';
import {
	Thanksgiving2017,
	Phoenix2015,
	Easter2017,
	Proposal2017,
	Engagement2017,
	SanFran2017
} from '../../img/ourstory/indexOurStory';

const ivyStory = [
	{
		para: 'Nuestra historia empezó en Houston una tarde de verano en Junio de 2014.  ' +
		 	  'Quién se iba a imaginar que encontraría al amor de mi vida en una clase de cocina!',
 	    img:  '/images/001-Thanksgiving2017.jpg',
 	    name: 'Thanksgiving 2017'
	},
	{
		para: 'Joe se acercó al final de la clase para pedir mi número. ' + 
		      'Empezamos a salir y el resto es historia . . .',
      	img:  '/images/002-Phoenix2015.jpg',
      	name: 'Phoenix 2015'
	},
	{
		para: 'Joe me ha enseñado que el verdadero amor se fortalece y crece día a día. A base de detalles, ' +
              'respeto, comprensión y apoyo mutuo. Estos cuatro años han sido intensos, llenos de lecciones ' +
			  'de vida para ambos. Hemos aprendido a amarnos en las buenas y en las malas, en la cercanía y ' +
              'la distancia, en la salud y la enfermedad, en la cima de una montaña y en la quietud de nuestro hogar.',
      	img:  '/images/003-Easter2017.jpg',
      	name: 'Easter 2017'
	},
	{
		para: 'Estamos infinitamente emocionados de formalizar nuestra unión y compartir con ustedes nuestra dicha.',
		img:  '/images/004-Proposal2017.jpg',
		name: 'Glacier Proposal 2017'
	},
	{
		para: 'Gracias familia y amigos por ser parte de nuestra vida.  ' +
			  'Los esperamos en Albuquerque para celebrar nuestro amor!!',
		img:  '/images/005-Engagement2017.jpg',
		name: 'Holding Hands 2017'
	}
]

const ivyStoryDisplay = ivyStory.map((item, index) => {
	return (
		<Row key={ index } className="rowDetail">
			<Col xs={6} md={6} lg={6}>
				<h4>{ item.para }</h4>
			</Col>
			<Col xs={6} md={6} lg={6}>
				<img src = { item.img }
				     alt = { item.name } />
			</Col>
		</Row>
	);
});


class OurStory extends Component {

	render() {
		return (
			<div className = { ourStoryStyle }>
				<Grid className = "gridContainer">
					{ ivyStoryDisplay }
				</Grid>
			</div>
		);
	}
}

export default OurStory;