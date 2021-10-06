import konstan from '~konstan';


//-- Colors

const blue       = konstan.colors.blue.main;
// const darkBlue   = konstan.colors.blue.dark;
// const lightBlue  = konstan.colors.blue.light;

const green      = konstan.colors.green.main;
// const darkGreen  = konstan.colors.green.dark;
// const lightGreen = konstan.colors.green.light;

const red      = konstan.colors.red.main;
const darkRed  = konstan.colors.red.main;
const lightRed = konstan.colors.red.main;
const orange   = konstan.colors.orange.main;

const { black }  = konstan.colors.gray;
const darkGray   = konstan.colors.gray.dark;
const mediumGray = konstan.colors.gray.medium;
const lightGray  = konstan.colors.gray.transparentBlack;
const lightGray2 = konstan.colors.gray.light;
const coolGray   = konstan.colors.gray.lighter;
const { white }  = konstan.colors.gray;

//-- Box Shadows
const commonBoxShadow = '9px 10px 8px -8px rgba(115,116,115,0.15)';
const smallBoxShadow = '6px 7px 8px -8px rgba(115,116,115,0.15)';
const inverseBoxShadow = '-9px -10px 8px -8px rgba(115,116,115,0.15)';
const darkerBoxShadow = '9px 10px 8px -8px rgba(115,116,115,0.4)';
const smallDarkerBoxShadow = '6px 7px 8px -8px rgba(115,116,115,0.4)';
const darkerCardBoxShadow = '0px 4px 1px -1px rgba(0,0,0,0.4), 0px 1px 1px 0px rgba(0,0,0,0.34), 0px 1px 3px 0px rgba(0,0,0,0.32)';

//-- Loader
const loaderBgColor = konstan.colors.gray.transparentWhite;

//-- Breakpoints
const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl']; // This variable is not exported by MUI

const tabletBreakpoint  = 'md';
const desktopBreakpoint = 'lg';


export default {
	breakpoints:  {
		tablet:  tabletBreakpoint,
		desktop: desktopBreakpoint,
		mobileOnly() {
			return this.down(breakpointKeys[breakpointKeys.indexOf(this.tablet) - 1]);
		},
		tabletDown() {
			return this.down(this.tablet);
		},
		tabletOnly() {
			return this.between(this.tablet, breakpointKeys[breakpointKeys.indexOf(this.desktop) - 1]);
		},
		tabletUp() {
			return this.up(this.tablet);
		},
		desktopDown() {
			return this.down(this.desktop);
		},
		desktopOnly() {
			return this.up(this.desktop);
		}
	},
	spacing:      8,
	palette:      {
		primary:    {
			main: red,
			dark: darkGray
		},
		secondary:  {
			main: blue,
			dark: black
		},
		background: {
			'main':      'transparent',
			'secondary': 'transparent',
			'paper':     white,
			'dark':      darkRed,
			'medium':    lightRed,
			'default':   white
		},
		success:    {
			main: green,
			dark: darkGray
		},
		alert: {
			main: red
		},
		warning: {
			main: orange
		}
	},
	appContainer: {
		maxWidth: '1450px'
	},
	boxShadow: {
		common:     commonBoxShadow,
		darker:     darkerBoxShadow,
		inverse:    inverseBoxShadow,
		small:      smallBoxShadow,
		smallDark:  smallDarkerBoxShadow,
		darkerCard: darkerCardBoxShadow
	},
	typography:   {
		fontFamily:  '"Muli", sans-serif',
		h1:          {
			fontSize:   '3rem',
			fontWeight: '500',
			color:      darkGray
		},
		h3:          {
			fontSize:   '2rem',
			fontWeight: '400',
			color:      red
		},
		fontWeights: {
			light:    '300',
			medium:   '400',
			semiBold: '500',
			bold:     '600'
		},
		fontSizes:   {
			xxlarge:    '10rem',
			xlarge:     '5rem',
			large:      '3rem',
			semiLarge:  '2rem',
			medium:     '1.5rem',
			semiMedium: '1.2rem',
			regular:    '1rem',
			small:      '.9rem',
			xsmall:     '.8rem'
		},
		fontColors:  {
			fontColor1: black,
			fontColor2: mediumGray,
			fontColor3: lightGray,
			fontColor4: darkGray,
			link:       lightGray2,
			linkHover:  coolGray,
			alertLink:  white,
			alertLinkHover: white
		}
	},
	border: {
		commonBorder:   `1px solid ${lightGray}`,
		mediumBorder:   `2px solid ${black}`,
		thickBorder:    `3px solid ${black}`,
		separatorColor: black
	},
	shape:        {
		borderRadius: 0
	},
	button: {
		padding:      '.5em 1em',
		borderRadius: '4px',
		primary: {
			bgColor:         red,
			bgHoverColor:    darkRed,
			labelColor:      white,
			labelColorHover: white,
			border:          `1px solid ${red}`,
			borderHover:     `1px solid ${darkRed}`,
			outline:         `2px solid ${red}`,
			outlineOffset:   '5px'
		},
		secondary:  {
			bgColor:         white,
			bgHoverColor:    mediumGray,
			labelColor:      black,
			labelColorHover: black,
			border:          `1px solid ${darkGray}`,
			borderHover:     `1px solid ${darkGray}`,
			outline:         `2px solid ${black}`,
			outlineOffset:   '5px'
		},
		dark:       {
			primary: {
				bgColor:         white,
				bgHoverColor:    red,
				labelColor:      red,
				labelColorHover: white,
				border:          `1px solid ${red}`,
				borderHover:     `1px solid ${red}`,
				outline:         `2px solid ${white}`
			}
		},
		disabled:   {
			labelColor: darkGray,
			border:     `1px solid ${lightGray2}`
		},
		buttonIcon: {
			color:    red,
			fontSize: '1.3rem'
		},
		important:  {
			bgColor:         red,
			bgHoverColor:    darkRed,
			labelColor:      white,
			labelColorHover: white,
			border:          `1px solid ${red}`,
			borderHover:     `1px solid ${darkRed}`
		},
		focus: {
			bgColor:     red,
			labelColor:  white,
			darkBgColor: lightGray
		}
	},
	menu:         {
		linkColor:          darkGray,
		linkColorHover:     black,
		linkColorMobile:    black,
		linkFontSizeMobile: '1.3em',
		linkActiveColor:    red,
		linkActiveBorder:   `4px solid ${red}`,
		linkInactiveBorder: `4px solid ${mediumGray}`,
		linkBorder:         `4px solid ${white}`,
		linkMobileBorder:   `1px solid ${mediumGray}`
	},
	pagination:   {
		numberColor:         mediumGray,
		numberColorHover:    red,
		numberBgColorHover:  lightGray2,
		numberColorActive:   mediumGray,
		numberBgColorActive: red
	},
	transitions:  {
		tableRowTransition: 'background-color ease-in .2s'
	},
	loader:       {
		loaderBackgroundColor: loaderBgColor
	},
	skeleton: {
		bgColor: lightGray2
	},
	datePicker:   {
		fontColor:        white,
		bgColor:          red,
		currentFontColor: red
	},
	toolTip: {
		backgroundColor: darkGray,
		fontSize: '.8rem'
	},
	input: {
		backgroundColor: white,
		disabledBackgroundColor: lightGray2
	}
};
