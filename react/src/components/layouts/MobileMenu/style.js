export default (theme) => {
	const drawerWidth                  = 270;
	const { minHeight: toolbarHeight } = theme.mixins.toolbar;

	return {
		drawer: {
			width:      drawerWidth,
			flexShrink: 0,
			whiteSpace: 'nowrap'
		},

		backdrop: {
			top: toolbarHeight
		},

		drawerOpen: {
			top:        `${toolbarHeight}px !important`,
			width:      drawerWidth,
			transition: theme.transitions.create('width', {
				easing:   theme.transitions.easing.sharp,
				duration: theme.transitions.duration.enteringScreen
			})
		},

		drawerClose: {
			top:        `${toolbarHeight}px !important`,
			transition: theme.transitions.create('width', {
				easing:   theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen
			}),
			overflowX:  'hidden',
			width:      0
		},

		drawerPaper: {
			border:          'none',
			height:          `calc(100vh - ${toolbarHeight}px)`,
			backgroundColor: theme.palette.background.paper,
			boxShadow:       theme.boxShadow.common
		},

		drawerList: {
			padding: '0'
		},

		drawerLinkWrapper: {
			borderBottom: theme.menu.linkMobileBorder,
			borderLeft:   theme.menu.linkInactiveBorder
		},

		drawerLinkActive: {
			borderLeft: theme.menu.linkActiveBorder
		},

		drawerLink: {
			'color':      theme.menu.linkColorMobile,
			'fontSize':   theme.menu.linkFontSizeMobile,
			'height':     '2em',
			'transition': theme.transitions.create('background-color', {
				easing:   theme.transitions.easing.easeInOut,
				duration: theme.transitions.duration.short
			}),

			'&:hover': {
				color: theme.palette.primary.main
			}
		},

		menuIcon: {
			'color':      theme.menu.linkColor,
			'transition': theme.transitions.create('color', {
				easing:   theme.transitions.easing.easeInOut,
				duration: theme.transitions.duration.short
			}),

			'&:active': {
				color: theme.palette.primary.main
			}
		},

		iconButton: {
			padding: '0'
		},

		hide: {
			display: 'none'
		}
	};
};
