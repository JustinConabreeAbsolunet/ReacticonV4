import React                                         from 'react';
import {
	ThemeProvider as MuiThemeProvider,
	StylesProvider,
	createGenerateClassName,
	createTheme
}                                                    from '@material-ui/core/styles';
import CssBaseline                                   from '@material-ui/core/CssBaseline';
import childrenPropType                              from '../../../models/propTypes/children';
import theme, { overrides as themeOverrides, props } from '../../../config/theme';
import useThemeColor                                 from '../../../hooks/useThemeColor';


const generateClassName = createGenerateClassName({
	disableGlobal: true
});


const ThemeProvider = ({ children }) => {
	const themeColor = useThemeColor();

	const themeWithColor = {
		...theme,
		palette: {
			...theme.palette,
			type: themeColor
		}
	};

	const overrides = {};
	Object.keys(themeOverrides).forEach((overrideComponent) => {
		overrides[overrideComponent] = themeOverrides[overrideComponent](themeColor);
	});

	const muiTheme = createTheme({
		...themeWithColor,
		overrides,
		props
	});

	return (
		<StylesProvider generateClassName={generateClassName}>
			<MuiThemeProvider theme={muiTheme}>
				<CssBaseline />
				{children}
			</MuiThemeProvider>
		</StylesProvider>
	);
};


ThemeProvider.propTypes = {
	children: childrenPropType.isRequired
};


export default ThemeProvider;
