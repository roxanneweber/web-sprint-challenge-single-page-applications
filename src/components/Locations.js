import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Locations.css';
import '../assets/css/fonts.css';

export default function Locations(props) {
	const { locations } = props;

	return (
		<div className='container'>
			<h1>Select your Restaurant Location</h1>
			<div className='items-list-wrapper'>
				{locations.map((item) => (
					<div className='item-card' key={item.id}>
						<Link to='./pizza'>
							<img
								className='items-list-image'
								src={item.img_URL}
								alt={item.name}
							/>
							<h2>{item.name}</h2>
							<button>Click to Order</button>
						</Link>
					</div>
				))}
			</div>
		</div>
	);
}
