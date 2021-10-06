export default (theme) => {
	return {
		menu: {
			padding:    '0',
			marginLeft: '5em',
			display:    'flex'
		},

		menuItemWrapper: {
			margin: '0 2em'
		},

		menuItem: {
			'padding':      '1.5em 0',
			'borderBottom': theme.menu.linkBorder,
			'color':        theme.menu.linkColor,
			'transition':   theme.transitions.create('all', {
				easing:   theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen
			}),

			'&:hover': {
				color:        theme.menu.linkActiveColor,
				borderBottom: theme.menu.linkActiveBorder
			}
		},

		menuItemSelected: {
			color:           theme.menu.linkActiveColor,
			borderBottom:    theme.menu.linkActiveBorder,
			backgroundColor: 'transparent'
		}
	};
};
