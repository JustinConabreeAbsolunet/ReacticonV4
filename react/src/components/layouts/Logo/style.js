export default (theme) => {
	const defaultStyle = {
		fontSize: theme.typography.fontSizes.medium
	};

	return {
		reacticon: {
			...defaultStyle
		},
		absolunet: {
			...defaultStyle,
			color: '#ff5252'
		},
		adobe: {
			...defaultStyle,
			color: '#FA0F00'
		}
	};
};
