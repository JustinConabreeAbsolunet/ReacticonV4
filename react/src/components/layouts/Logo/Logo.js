import React from 'react';
import Typography from '@material-ui/core/Typography';
import makeStyles from '@material-ui/styles/makeStyles';
import HiddenOnDesktop from '../../ui/HiddenOnDesktop';
import HiddenOnMobile from '../../ui/HiddenOnMobile';
import styles from './style';

const useStyles = makeStyles(styles);

export default (props) => {
	const classes = useStyles();

	return (
		<Typography {...props} variant="h1">
			<HiddenOnDesktop>
				<span className={classes.absolunet}>A</span>&nbsp;
				x&nbsp;
				<span className={classes.adobe}>A</span>&nbsp;
				@&nbsp;
				<span className={classes.reacticon}>R</span>
			</HiddenOnDesktop>
			<HiddenOnMobile>
				<span className={classes.absolunet}>Absolunet</span>&nbsp;
				x&nbsp;
				<span className={classes.adobe}>Adobe</span>&nbsp;
				@&nbsp;
				<span className={classes.reacticon}>Reacticon</span>
			</HiddenOnMobile>
		</Typography>
	);
};
