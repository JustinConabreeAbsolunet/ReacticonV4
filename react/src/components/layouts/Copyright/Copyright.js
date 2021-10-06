import React from 'react';
import Typography from '@material-ui/core/Typography';

export default () => {
	const currentYear = new Date().getFullYear();

	return (
		<Typography variant="body2" color="textSecondary" align="center">
			Copyright ©
			&nbsp;
			Absolunet
			&nbsp;
			{ currentYear }
			.
		</Typography>
	);
};
