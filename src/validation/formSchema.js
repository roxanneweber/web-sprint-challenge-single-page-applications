import * as yup from 'yup'; // * means give us everything

const formSchema = yup.object().shape({
	name: yup
		.string()
		.trim()
		.required('Your name is required')
		.min(3, 'Name must be at least 3 characters long.'),
	size: yup
		.string()
		.oneOf(
			['medium', 'small', 'large', 'largest'],
			'Sauce choice is required'
		),
	sauce: yup
		.string()
		.oneOf(
			['original', 'garlicRanch', 'bbq', 'sprinachAlfredo'],
			'Sauce choice is required'
		),
	pepperoni: yup.boolean(),
	tomatoes: yup.boolean(),
	sausage: yup.boolean(),
	blackOlives: yup.boolean(),
	canadianBacon: yup.boolean(),
	roastedGarlic: yup.boolean(),
});

export default formSchema;
