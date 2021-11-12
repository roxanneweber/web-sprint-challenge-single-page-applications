import React from 'react';

const PostForm = (props) => {
	const { change, submit, values } = props;

	const onChange = (e) => {
		const { name, value } = e.target;
		change(name, value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		submit();
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
