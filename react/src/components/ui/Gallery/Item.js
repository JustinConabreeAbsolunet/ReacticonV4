import React from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';

const Item = ({ item }) => {
	return (
		<Card>
			<CardMedia
				component="img"
				height="350"
				image={item.image}
				alt={`${item.name} Image`}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{item.name}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					variant="contained"
					size="small"
					color="secondary"
					fullWidth
				>
					Add to Cart
				</Button>
			</CardActions>
		</Card>
	);
};

Item.propTypes = {
	item: PropTypes.shape({
		id: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string
	}).isRequired
};

export default Item;
