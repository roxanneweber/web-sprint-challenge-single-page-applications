import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Locations.css';
import '../assets/css/fonts.css';

export default function Locations(props) {
	const { locations } = props;

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
