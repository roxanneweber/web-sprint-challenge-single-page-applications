import React from 'react';

const PostForm = (props) => {
	const { update, submit, values, disabled, errors } = props;
	//console.log(props);

	const onChange = (evt) => {
		const { name, value } = evt.target;
		update(name, value);
	};

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	return (
		<div className='form-wrapper'>
			<h1 className='top'>Build your Pizza!</h1>

			<form className='form container' id='pizza-form' onSubmit={onSubmit}>
				<label>
					Your name:
					<input
						id='name-input'
						type='text'
						name='name'
						onChange={onChange}
					/>
				</label>
				<div className='form-group inputs'>
					<p>Choice of Size *required </p>
					<label>
						<select
							value={values.size}
							name='size'
							id='size-dropdown'
							onChange={onChange}
						>
							<option value=''>---select size---</option>
							<option value='largest'>LARGEST Sprint Size</option>
							<option value='large'>X-Large</option>
							<option value='medium'>Medium</option>
							<option value='small'>Small</option>
						</select>
					</label>
					<div className='form-group inputs radio'>
						<p>Choice of Sauce *required</p>
						<label>
							Original Red
							<input
								type='radio'
								name='sauce'
								value='original'
								onChange={onChange}
								checked={values.sauce === 'original'}
							/>
						</label>
						<br />
						<label>
							Garlic Ranch
							<input
								type='radio'
								name='sauce'
								value='garlicRanch'
								onChange={onChange}
								checked={values.sauce === 'garlicRanch'}
							/>
						</label>
						<br />
						<label>
							BBQ Sauce
							<input
								type='radio'
								name='sauce'
								value='bbq'
								onChange={onChange}
								checked={values.sauce === 'bbq'}
							/>
						</label>
						<br />
						<label>
							Spinach Alfredo
							<input
								type='radio'
								name='sauce'
								value='spinachAlfredo'
								onChange={onChange}
								checked={values.sauce === 'spinachAlfredo'}
							/>
						</label>
					</div>
					<div className='form-group inputs'>
						<p>Add Toppings *choose up to 10</p>
						<div className='some-page-wrapper'>
							<div className='row'>
								<div className='column'>
									{' '}
									<label>
										Pepperoni
										<input
											type='checkbox'
											name='pepperoni'
											checked={values.pepperoni}
											onChange={onChange}
										/>
									</label>
								</div>
								<div className='column'>
									{' '}
									<label>
										Diced Tomatoes
										<input
											type='checkbox'
											name='tomatoes'
											checked={values.tomatoes}
											onChange={onChange}
										/>
									</label>
								</div>
							</div>

							<div className='row'>
								<div className='column'>
									{' '}
									<label>
										Sausage
										<input
											type='checkbox'
											name='sausage'
											checked={values.sausage}
											onChange={onChange}
										/>
									</label>
								</div>
								<div className='column'>
									{' '}
									<label>
										Black Olives
										<input
											type='checkbox'
											name='blackOlives'
											checked={values.blackOlives}
											onChange={onChange}
										/>
									</label>
								</div>
							</div>

							<div className='row'>
								<div className='column'>
									{' '}
									<label>
										Canadian Bacon
										<input
											type='checkbox'
											name='canadianBacon'
											checked={values.canadianBacon}
											onChange={onChange}
										/>
									</label>
								</div>
								<div className='column'>
									{' '}
									<label>
										Roasted Garlic
										<input
											type='checkbox'
											name='roastedGarlic'
											checked={values.roastedGarlic}
											onChange={onChange}
										/>
									</label>
								</div>
							</div>
						</div>
					</div>
					<div className='form-group inputs'>
						<p>Special Instructions</p>
						<label>
							<input
								id='special-text'
								type='textarea'
								name='instructions'
								onChange={onChange}
							/>
						</label>
					</div>

					<div className='submit'>
						<h1>
							<button disabled={disabled} id='submit-btn'>
								Send your order!
							</button>
						</h1>
						<div className='errors'>
							<div>{errors.name}</div>
							<div>{errors.size}</div>
							<div>{errors.sauce}</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PostForm;
