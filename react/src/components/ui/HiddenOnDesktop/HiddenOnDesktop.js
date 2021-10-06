import React    from 'react';
import Hidden   from '@material-ui/core/Hidden';
import useTheme from '@material-ui/core/styles/useTheme';


export default (props) => {
	const query = `${useTheme().breakpoints.desktop}Up`;

	return (
		<Hidden {...props} {...{ [query]: true }} />
	);
};
