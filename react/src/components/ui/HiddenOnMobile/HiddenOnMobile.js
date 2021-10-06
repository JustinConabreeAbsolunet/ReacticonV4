import React    from 'react';
import Hidden   from '@material-ui/core/Hidden';
import useTheme from '@material-ui/core/styles/useTheme';


export default (props) => {
	const query = `${useTheme().breakpoints.tablet}Down`;

	return (
		<Hidden {...{ [query]: true, ...props }} />
	);
};
