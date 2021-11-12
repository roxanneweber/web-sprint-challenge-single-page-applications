import React from 'react';
// We'll need React Router's own version of the History API
import { useHistory } from 'react-router-dom';
import '../assets/css/Home.css';
import background from '../assets/img_pizza.jpg';
import '../assets/css/fonts.css';

export default function Home() {
	const history = useHistory();
	const routeToMenu = () => {
		history.push('/locations');
	};

	return (
		<div
			className='display-container w3-display-container w3-grayscale-min'
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className='w3-display-bottomleft'>
				<span className='x-large-tag'>Open from 10am to 12pm</span>
			</div>

			<div className='w3-display-middle w3-center display-middle-font'>
				<span className='w3-text-white font-change'>
					Casey's
					<br />
					PIZZA PUB
				</span>
				<p>
					<button
						onClick={routeToMenu}
						className='w3-button w3-xxlarge w3-black'
					>
						Pick a Location --> Order a Pizza!
					</button>
				</p>
			</div>
		</div>
	);
}
