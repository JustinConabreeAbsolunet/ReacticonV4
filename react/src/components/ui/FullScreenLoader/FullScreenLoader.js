import React from 'react';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/styles/makeStyles';
import styles from './style';

const useStyles = makeStyles(styles);

export default () => {
	const classes = useStyles();

	return (
		<Backdrop
			className={classes.root}
			open
		>
			<CircularProgress color="inherit" />
		</Backdrop>
	);
};
