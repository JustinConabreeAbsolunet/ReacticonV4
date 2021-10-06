import React      from 'react';
import Typography from '@material-ui/core/Typography';
import useTitle   from '../../../hooks/useTitle';


export default (props) => {
	const title = useTitle();

	return (
		<Typography variant="h3" component="h1" {...props}>
			{title}
		</Typography>
	);
};
