import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Grid            from '@material-ui/core/Grid';
import Typography      from '@material-ui/core/Typography';
import Switch          from '@material-ui/core/Switch';
import Button          from '@material-ui/core/Button';
import makeStyles      from '@material-ui/styles/makeStyles';
import apiService      from '../../../services/apiService';
import Gallery, { GalleryShimmer } from '../../ui/Gallery';
import styles          from './style';
import FullScreenLoader from '../../ui/FullScreenLoader';

const useStyles = makeStyles(styles);

// Reacticon: Demonstrating the UX difference between a loading spinner and a shimmer effect.
export default () => {
	const classes = useStyles();
	const [isShimmer, setIsShimmer] = useState(false);
	const [loading, setLoading] = useState(false);
	const [catalogData, setCatalogData] = useState(null);

	const loadData = useCallback(async () => {
		setLoading(true);
		const catalog = await apiService.getCatalog();
		setCatalogData(catalog);
		setLoading(false);
	}, []);

	useEffect(() => {
		loadData();
	}, [isShimmer]);

	const gallery = useMemo(() => {
		if (!catalogData && !loading) {
			return null;
		}

		if (loading) {
			return isShimmer ? <GalleryShimmer /> : <FullScreenLoader />;
		}

		return <Gallery items={catalogData} />;
	}, [isShimmer, loading, catalogData]);

	const handleChange = useCallback((event) => {
		setIsShimmer(event.target.checked);
	}, []);

	const handleReload = useCallback(() => {
		loadData();
	}, []);

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
					<Typography variant="h1" className={classes.headerText}>Spinner Vs Shimmer</Typography>
					<Switch onChange={handleChange} />
					<div>
						<Button
							onClick={handleReload}
							variant="contained"
							color="primary"
						>
							Reload Data
						</Button>
					</div>
				</div>
			</Grid>
			<Grid item xs={12}>
				{gallery}
			</Grid>
		</Grid>
	);
};
