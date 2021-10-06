export default (theme) => {
	return {
		notFoundWrapper: {
			marginTop: '5%',
			textAlign: 'center',
			width: '100%',
			minHeight: 'calc(95vh - 80px)'
		},
		notFoundTitle: {
			fontSize: theme.typography.fontSizes.xxlarge,
			color: theme.palette.common.black
		},
		notFoundText: {
			fontWeight: theme.typography.fontWeights.light,
			marginBottom: theme.spacing(4)
		},
		notFoundEmphasis: {
			display: 'block',
			fontSize: theme.typography.fontSizes.large,
			color: theme.typography.h1.color,
			fontWeight: theme.typography.h1.fontWeight
		}
	};
};
