export default (theme) => {
	return {
		appBar: {
			zIndex:          theme.zIndex.drawer + 1,
			padding:         '0',
			boxShadow:       theme.boxShadow.common,
			backgroundColor: theme.palette.common.white
		},

		toolbarWrapper: {
			maxWidth: 'none',
			position: 'relative'
		},

		toolbar: {
			padding: '0'
		},

		logoLink: {
			textDecoration: 'none'
		},

		logo: {
			height:  theme.spacing(4),
			fontSize: theme.typography.fontSizes.semiMedium,
			lineHeight: 0,
			fontWeight: theme.typography.fontWeights.bold,
			display: 'flex',
			alignItems: 'center',
			[theme.breakpoints.desktopOnly()]: {
				lineHeight: theme.typography.fontSizes.medium
			}
		},

		separator: {
			flexGrow: 1
		},

		offset: {
			width: '100%',
			minHeight: '60px',
			[theme.breakpoints.desktopOnly()]: {
				minHeight: '70px'
			}
		}
	};
};
