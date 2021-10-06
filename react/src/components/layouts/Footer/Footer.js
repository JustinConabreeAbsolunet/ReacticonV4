import React      from 'react';
import Grid       from '@material-ui/core/Grid';
import makeStyles from '@material-ui/styles/makeStyles';
import Copyright  from '../Copyright';
import styles     from './style';

const useStyles = makeStyles(styles);

export default () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Grid>
				<Grid item>
					<Copyright />
				</Grid>
			</Grid>
		</footer>
	);
};
