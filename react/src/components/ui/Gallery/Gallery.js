import React           from 'react';
import PropTypes       from 'prop-types';
import Grid            from '@material-ui/core/Grid';
import makeStyles      from '@material-ui/styles/makeStyles';
import { galleryStyles } from './style';
import Item from './Item';

const useStyles = makeStyles(galleryStyles);

const Gallery = ({ items }) => {
	const classes = useStyles();

	return (
		<Grid
			container
			className={classes.root}
			justifyContent="center"
			alignItems="center"
			spacing={2}
		>
			{items.map((item) => {
				return (
					<Grid item xs={2} md={3} lg={4} key={item.id}>
						<Item item={item} />
					</Grid>
				);
			})}
		</Grid>
	);
};

Gallery.propTypes = {
	items: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string
	})).isRequired
};

export default Gallery;
