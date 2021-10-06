import theme from '../theme';

export default (themeColor) => {
	return {
		root: {
			'borderRadius': theme.button.borderRadius,
			'padding': theme.button.padding,
			'textTransform': 'none',
			'&$disabled': {
				color: theme.button.disabled.labelColor,
				border: theme.button.disabled.border
			}
		},
		text: {
			'&$disabled': {
				border: 0
			}
		},
		containedPrimary: {
			'backgroundColor': themeColor === 'dark' ? theme.button.dark.primary.bgColor : theme.button.primary.bgColor,
			'color': themeColor === 'dark' ? theme.button.dark.primary.labelColor : theme.button.primary.labelColor,
			'border': themeColor === 'dark' ? theme.button.dark.primary.border : theme.button.primary.border,
			'&:hover, &:active, &:focus': {
				color: themeColor === 'dark' ? theme.button.dark.primary.labelColorHover : theme.button.primary.labelColorHover,
				backgroundColor: themeColor === 'dark' ? theme.button.dark.primary.bgHoverColor : theme.button.primary.bgHoverColor,
				border: themeColor === 'dark' ? theme.button.dark.primary.borderHover : theme.button.primary.borderHover
			},
			'&:focus': {
				outline: themeColor === 'dark' ? theme.button.dark.primary.outline : theme.button.primary.outline,
				outlineOffset: theme.button.primary.outlineOffset
			}
		},
		containedSecondary: {
			'backgroundColor': theme.button.secondary.bgColor,
			'color': theme.button.secondary.labelColor,
			'border': theme.button.secondary.border,
			'&:hover, &:active, &:focus': {
				backgroundColor: theme.button.secondary.bgHoverColor,
				color: theme.button.secondary.labelColorHover
			},
			'&:focus': {
				outline: theme.button.secondary.outline,
				outlineOffset: theme.button.secondary.outlineOffset
			}
		}
	};
};
