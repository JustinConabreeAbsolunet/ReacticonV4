import React, { Fragment } from 'react';
import { Skeleton }      from '@material-ui/lab';

const ItemShimmer = () => {
	// Reacticon: Item shimmer (image, name, add to cart)
	return (
		<Fragment>
			<Skeleton variant="rect" width="100%" height={350} style={{ marginBottom: 10 }} />
			<Skeleton variant="rect" width="50%" height={60} style={{ marginBottom: 10 }} />
			<Skeleton variant="rect" width="100%" height={40} />
		</Fragment>
	);
};

export default ItemShimmer;
