import '../css/Header.css';
import '../css/fonts.css';

export default function MenuForm() {
	return (
		<div className='w3-container w3-black w3-xxlarge w3-padding-64'>
			<h1 class='w3-center w3-jumbo w3-padding-32'>THE MENU</h1>

			<div className='w3-container w3-white w3-padding-32'>
				<div class='w3-row w3-center w3-border w3-border-dark-grey'>
					<h2 className='w3-third w3-padding-large w3-red'>Pizza</h2>
				</div>

				<h3>
					<b>Margherita</b>{' '}
					<span class='w3-right w3-tag w3-dark-grey w3-round'>$12.50</span>
				</h3>
				<p class='w3-text-grey'>
					Fresh tomatoes, fresh mozzarella, fresh basil
				</p>
				<hr />

				<h3>
					<b>Formaggio</b>{' '}
					<span class='w3-right w3-tag w3-dark-grey w3-round'>$15.50</span>
				</h3>
				<p class='w3-text-grey'>
					Four cheeses (mozzarella, parmesan, pecorino, jarlsberg)
				</p>
				<hr />

				<h3>
					<b>Meat Town</b> <span class='w3-tag w3-red w3-round'>Hot!</span>
					<span class='w3-right w3-tag w3-dark-grey w3-round'>$20.00</span>
				</h3>
				<p class='w3-text-grey'>
					Fresh tomatoes, mozzarella, hot pepporoni, hot sausage, beef,
					chicken
				</p>
			</div>

			<div class='w3-row w3-center w3-border w3-border-dark-grey'>
				<h2 className='w3-third w3-padding-large w3-red'>Pasta</h2>
			</div>

			<div class='w3-container w3-white w3-padding-32'>
				<h3>
					<b>Lasagna</b>{' '}
					<span class='w3-tag w3-grey w3-round'>Popular</span>
					<span class='w3-right w3-tag w3-dark-grey w3-round'>$13.50</span>
				</h3>
				<p class='w3-text-grey'>
					Special sauce, mozzarella, parmesan, ground beef
				</p>
				<hr />

				<h3>
					<b>Ravioli</b>{' '}
					<span class='w3-right w3-tag w3-dark-grey w3-round'>$14.50</span>
				</h3>
				<p class='w3-text-grey'>Ravioli filled with cheese</p>
				<hr />

				<h3>
					<b>Spaghetti Classica</b>{' '}
					<span class='w3-right w3-tag w3-dark-grey w3-round'>$11.00</span>
				</h3>
				<p class='w3-text-grey'>Fresh tomatoes, onions, ground beef</p>
			</div>
		</div>
	);
}
