import React from 'react';
//import { Link, useRouteMatch } from 'react-router-dom';
import '../assets/css/Order.css';
import '../assets/css/fonts.css';

export default function OrderForm(props) {
	return (
		<div className='items-list-wrapper'>
			<h1>Casey's Pizza Pub Order Form</h1>
			<section id='form'>
				<form id='pizza-form'></form>
				<button id='order-button'>Submit</button>
			</section>
		</div>
	);
}
