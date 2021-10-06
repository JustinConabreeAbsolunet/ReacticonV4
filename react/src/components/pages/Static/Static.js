import React, { useState, useEffect, useMemo } from 'react';
import Grid            from '@material-ui/core/Grid';
import Typography      from '@material-ui/core/Typography';
import makeStyles      from '@material-ui/styles/makeStyles';
import apiService      from '../../../services/apiService';
import Gallery, { GalleryShimmer } from '../../ui/Gallery';
import styles          from './style';

const useStyles = makeStyles(styles);

// Reacticon: Known page route. Can still have it's own interior shimmers while data loads, but this component will load instantly when route changes
export default () => {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const [catalogData, setCatalogData] = useState(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			const catalog = await apiService.getCatalog();
			setCatalogData(catalog);
			setLoading(false);
		})();
	}, []);

	const gallery = useMemo(() => {
		if (!catalogData && !loading) {
			return null;
		}

		if (loading) {
			return <GalleryShimmer />;
		}

		return <Gallery items={catalogData} />;
	}, [loading, catalogData]);

	return (
		<Grid
			container
			className={classes.root}
			justifyContent="center"
			alignItems="center"
			spacing={0}
		>
			<Grid item className={classes.header} xs={12}>
				<div>
					<Typography variant="h1" className={classes.headerText}>Static Route</Typography>
				</div>
			</Grid>
			<Grid item xs={12}>
				{gallery}
			</Grid>
		</Grid>
	);
};
