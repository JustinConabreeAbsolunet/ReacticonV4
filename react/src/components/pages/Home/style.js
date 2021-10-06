export default (theme) => {
	return {
		root: {
			width: '100%',
			maxWidth: 'none !important'
		},

		header: {
			width: '100%',
			minHeight: 'calc(80vh - 80px)',
			justifyContent: 'center',
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center',
			backgroundImage: 'url(/media/homepage.jpg)',
			backgroundSize: 'cover',
			'&::before': {
				position: 'absolute',
				content: '',
				left: 0,
				top: 0,
				width: '100%',
				height: '100%',
				background: 'rgba(33,33,33, 0.5)'
			}
		},

		headerContent: {
			zIndex: 1
		},

		headerText: {
			textAlign: 'center',
			color: 'white'
		},

		section: {
			padding: theme.spacing(10),
			textAlign: 'center'
		},

		sectionHeader: {
			textAlign: 'center',
			marginBottom: theme.spacing(6)
		},

		sectionLabel: {
			textAlign: 'center',
			color: theme.typography.fontColors.fontColor1,
			margin: theme.spacing(3, 0, 2)
		},

		sectionLink: {
			color: theme.typography.fontColors.fontColor1
		}
	};
};
