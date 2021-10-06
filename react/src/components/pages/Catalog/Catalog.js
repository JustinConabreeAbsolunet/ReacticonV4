import React, { useState, useEffect, useMemo } from 'react';
import Grid            from '@material-ui/core/Grid';
import Typography      from '@material-ui/core/Typography';
import makeStyles      from '@material-ui/styles/makeStyles';
import apiService      from '../../../services/apiService';
import Gallery, { GalleryShimmer } from '../../ui/Gallery';
import styles          from './style';

const useStyles = makeStyles(styles);

export default () => {
	const classes = useStyles();
	const [loading, setLoading] = useState(false);
	const [catalogData, setCatalogData] = useState(null);

	useEffect(() => {
		(async () => {
			setLoading(true);
			// Reacticon: Simple fetch of items
			const catalog = await apiService.getCatalog();
			setCatalogData(catalog);
			setLoading(false);
		})();
	}, []);

	const gallery = useMemo(() => {
		if (!catalogData && !loading) {
			// Reacticon: If there's no content, return null or some sort of message
			return null;
		}

		if (loading) {
			// Reacticon: Use the gallery's shimmer component while loading data
			return <GalleryShimmer />;
		}

		// Reacticon: Once data is available, use the real component
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
					<Typography variant="h1" className={classes.headerText}>Catalog Page</Typography>
				</div>
			</Grid>
			<Grid item xs={12}>
				{gallery}
			</Grid>
		</Grid>
	);
};
