import React                 from 'react';
import Grid                  from '@material-ui/core/Grid';
import makeStyles            from '@material-ui/styles/makeStyles';
import { GALLERY_PAGE_SIZE } from '../../../constants';
import ItemShimmer           from './Item.shimmer';
import { galleryStyles }     from './style';

// Reacticon: Use real component's styles
const useStyles = makeStyles(galleryStyles);

const GalleryShimmer = () => {
	const classes = useStyles();
	// Reacticon: Generate an array of dummy items
	const items = Array.from({ length: GALLERY_PAGE_SIZE }).fill(null);

	// Reacticon: Shimmer of Gallery with items
	return (
		<Grid
			container
			className={classes.root}
			justifyContent="center"
			alignItems="center"
			spacing={2}
		>
			{items.map((item, index) => {
				const key = `key-${index}`;

				return (
					<Grid item xs={2} md={3} lg={4} key={key}>
						<ItemShimmer />
					</Grid>
				);
			})}
		</Grid>
	);
};

export default GalleryShimmer;
