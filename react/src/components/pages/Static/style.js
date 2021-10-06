export default () => {
	return {
		root: {
			width: '100%',
			maxWidth: 'none !important'
		},

		header: {
			width: '100%',
			minHeight: 'calc(40vh - 80px)',
			justifyContent: 'center',
			textAlign: 'center',
			display: 'flex',
			alignItems: 'center'
		},

		headerText: {
			textAlign: 'center'
		}
	};
};
