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
			<form onSubmit={onSubmit}>
				<label>
					Title
					<input
						type='text'
						name='title'
						value={values.title}
						onChange={onChange}
						placeholder='Title'
					/>
				</label>
				<label>
					Content
					<textarea
						name='content'
						value={values.content}
						onChange={onChange}
						placeholder='Content'
					/>
				</label>
				<label>
					Tags (separate by commas no space)
					<input
						type='text'
						name='tags'
						value={values.tags}
						onChange={onChange}
						placeholder='Put cha tags here'
					/>
				</label>
				<input type='submit' value='POST IT BOO YAH!' />
			</form>
		</div>
	);
};

export default PostForm;
