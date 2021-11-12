import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Locations.css';
import '../assets/css/fonts.css';
import axios from 'axios';

// create initial values for each form field
const initialFormValues = {
	orderLocation: '',
	size: '',
	pepperoni: false,
	sausage: false,
};

export default function Locations(props) {
	const { locations } = props;

	// set slices of state
	const [orders, setOrders] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);

	// create functions to update and submit the form
	const updateForm = (inputName, inputValue) => {
		setFormValues({ ...formValues, [inputName]: inputValue });
	};

	const submitForm = () => {
		const newOrder = {
			orderLocation: '{locations.name}',
			size: formValues.size,
			pepperoni: formValues.pepperoni,
			sausage: formValues.sausage,
		};

		axios
			.post('https://reqres.in/api/orders', newOrder)
			.then((res) => {
				const orderData = res.data;
				setOrders([orderData, ...orders]);
			})
			.catch((err) => console.error(err));
	};

	//reset the data?
	useEffect(() => {
		axios
			.get('https://reqres.in/api/orders')
			.then((res) => setOrders(res.data));
	}, []);

	return (
		<div className='container'>
			<h1>Select your Restaurant</h1>
			<div className='items-list-wrapper'>
				{locations.map((item) => (
					<div className='item-card' key={item.id}>
						<Link to='./pizza'>
							<img
								className='items-list-image'
								src={item.img_URL}
								alt={item.name}
							/>
							<p>Click to select >></p>
							<h2>{item.name}</h2>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
