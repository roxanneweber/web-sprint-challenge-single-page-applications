import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import { Forms } from 'react-bootstrap';
import axios from 'axios';

import './assets/css/App.css';
import './assets/css/fonts.css';

import Home from './components/Home';
import Locations from './components/Locations';
import Success from './components/Success';
import PostForm from './components/PostForm';

// pull in my dummy location data
import data from './assets/data';

// create initial values for each form field
const initialFormValues = {
	orderLocation: '',
	size: '',
	pepperoni: false,
	sausage: false,
};

export default function App() {
	//console.log(props);

	// set the slices of state for locations, orders and formInputs
	// set the slices of state for locations, orders and formInputs
	const [locations, setLocations] = useState([]);
	const [orders, setOrders] = useState([]);
	const [formValues, setFormValues] = useState(initialFormValues);

	// location data
	function fetchLocations() {
		return Promise.resolve({ success: true, data });
	}
	useEffect(() => {
		fetchLocations().then((res) => setLocations(res.data));
	}, []);

	//form update handler
	const updateForm = (name, value) => {
		setFormValues({ ...formValues, [name]: value });
	};

	// submit form handler
	const submitForm = () => {
		const newOrder = {
			orderLocation: formValues.orderLocation,
			size: formValues.size,
			pepperoni: formValues.pepperoni,
			sausage: formValues.sausage,
		};
		//then post the information
		axios
			.post('https://reqres.in/', newOrder)
			.then((res) => {
				//console.log(res);
				const order = res.data;
				setOrders([newOrder, ...orders]);
			})
			.catch((err) => console.error(err));
	};

	return (
		<div className='App'>
			<nav>
				<div className='w3-top w3-bar w3-xlarge w3-black w3-opacity-min'>
					<Link to='./' className='w3-bar-item w3-button'>
						HOME
					</Link>
					<Link to='./locations' className='w3-bar-item w3-button'>
						LOCATIONS
					</Link>
					<Link
						to='./pizza'
						className='w3-bar-item w3-button'
						id='order-pizza'
					>
						ORDER PIZZA
					</Link>
				</div>
			</nav>

			{/* 👉 STEP 4 - Build a Switch with a Route for each of the components imported at the top */}
			<Switch>
				<Route path='/locations/:itemId'>
					<Locations locations={locations} />
				</Route>
				<Route path='/locations'>
					<Locations locations={locations} />
				</Route>
				<Route path='/pizza'>
					<PostForm
						update={updateForm}
						submit={submitForm}
						values={formValues}
					/>
				</Route>
				<Route path='/success'>
					<Success />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}
