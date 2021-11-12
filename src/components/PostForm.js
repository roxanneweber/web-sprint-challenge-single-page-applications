import React from 'react';
import '../assets/css/PostForm.css';

const PostForm = (props) => {
	const { values, submit, change } = props;

	const onSubmit = (evt) => {
		evt.preventDefault();
		submit();
	};

	const onChange = (evt) => {
		const { name, value, checked, type } = evt.target;
		const realValue = type === 'checkbox' ? checked : value; // must do this so checkbox shows an actual value
		change(name, realValue);
	};

	return (
		<div className='form-wrapper'>
			<form>
				<input type='submit' value='Send your Order!' />
			</form>
		</div>
	);
};

export default PostForm;
