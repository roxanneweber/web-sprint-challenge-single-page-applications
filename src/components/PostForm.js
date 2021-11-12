import React from 'react';

const PostForm = (props) => {
	const { update, submit, values, locations } = props;
	console.log(props);

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
			<h1>Build your Pizza!</h1>

			<form className='form container' onSubmit={onSubmit}>
				<div className='form-group inputs'>
					<p>Choice of Size *required </p>
					<label>
						<select value={values.size} name='size' onChange={onChange}>
							<option value=''>---select size---</option>
							<option value='largestSize'>LARGEST Sprint Size</option>
							<option value='xLarge'>X-Large</option>
							<option value='Medium'>Medium</option>
							<option value='Small'>Small</option>
						</select>
					</label>

					<div className='submit'>
						<h1>
							<button>Send your order!</button>
						</h1>
					</div>
				</div>
			</form>
		</div>
	);
};

export default PostForm;
