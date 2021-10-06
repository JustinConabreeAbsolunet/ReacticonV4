export default (theme) => {
	return {
		button: {
			'padding': 0,
			'display': 'inline-block',
			'backgroundColor': 'transparent',
			'border': '0px',
			'color': theme.typography.fontColors.link,
			'fontSize': theme.typography.fontSizes.regular,
			'textDecoration': 'underline',
			'&:hover, &:active, &:focus': {
				backgroundColor: 'transparent',
				color: theme.typography.fontColors.linkHover,
				textDecoration: 'none',
				cursor: 'pointer'
			},
			'&:disabled': {
				backgroundColor: 'transparent',
				border: 'none'
			},
			'&:focus $label': {
				textDecoration: 'none'
			}
		},
		label: {
			'textDecoration': 'underline',
			'&:hover, &:focus': {
				textDecoration: 'none'
			}
		}
	};
};
