import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import makeStyles from '@material-ui/styles/makeStyles';
import useGlobalLoading from '../../../hooks/useGlobalLoading';
import styles from './style';

const useStyles = makeStyles(styles);

export default () => {
	const classes = useStyles();
	const isLoading = useGlobalLoading();

	if (!isLoading) {
		// Reacticon: To avoid CLS score penalties, it should render an element that takes the same amount of space, not null
		return null;
	}

	return (
		<div className={classes.root}>
			<LinearProgress />
		</div>
	);
};
