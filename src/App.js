import React, { useState, useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import './assets/css/App.css';
import './assets/css/fonts.css';

import Home from './components/Home';
import Locations from './components/Locations';
import OrderForm from './components/OrderForm';
import Success from './components/Success';
import Contact from './components/Contact';

// pull in my dummy location data
import data from './assets/data';

export default function App() {
	//console.log(props);

	// set the slices of state for locations, orders and formInputs
	const [locations, setLocations] = useState([]);

	function fetchLocations() {
		return Promise.resolve({ success: true, data });
	}

	// where to get location and story location info
	useEffect(() => {
		fetchLocations().then((res) => setLocations(res.data));
	}, []);

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
						ORDER FORM
					</Link>
					<Link to='./contact' className='w3-bar-item w3-button'>
						CONTACT
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
					<OrderForm />
				</Route>
				<Route path='/success'>
					<Success />
				</Route>
				<Route path='/contact'>
					<Contact />
				</Route>
				<Route path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
}
