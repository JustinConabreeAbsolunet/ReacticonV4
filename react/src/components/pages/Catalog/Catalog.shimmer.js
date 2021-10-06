import React              from 'react';
import Grid               from '@material-ui/core/Grid';
import Typography         from '@material-ui/core/Typography';
import makeStyles         from '@material-ui/styles/makeStyles';
import { Skeleton }       from '@material-ui/lab';
import { GalleryShimmer } from '../../ui/Gallery';
import styles             from './style';

const useStyles = makeStyles(styles);

export default () => {
	// Reacticon: Shimmer can use same classes as real component
	const classes = useStyles();

	// Reacticon: A shimmer version of the catalog layout
	return (
		<Grid
			container
			className={classes.root}
			justifyContent="center"
			alignItems="center"
			spacing={0}
		>
			<Grid item className={classes.header} xs={12}>
				<Typography variant="h1" className={classes.headerText}>
					<Skeleton />
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<GalleryShimmer />
			</Grid>
		</Grid>
	);
};
