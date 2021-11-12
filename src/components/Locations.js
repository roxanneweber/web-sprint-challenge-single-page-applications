import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import '../assets/css/Locations.css';
import '../assets/css/fonts.css';

export default function Locations(props) {
	const { locations } = props;
	const { url } = useRouteMatch();

	return (
		<div className='items-list-wrapper'>
			{locations.map((item) => (
				<div className='item-card' key={item.id}>
					<Link to={`${url}/${item.id}`}>
						<img
							className='items-list-image'
							src={item.img_URL}
							alt={item.name}
						/>
						<h3>Click to selection location:</h3>
						<h2>{item.name}</h2>
					</Link>
				</div>
			))}
		</div>
	);
}
