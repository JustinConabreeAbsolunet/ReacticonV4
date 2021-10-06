import React from 'react';
import PropTypes         from 'prop-types';
import { useRouteMatch } from 'react-router';
import { Link }          from 'react-router-dom';
import ListItem          from '@material-ui/core/ListItem';


const ListItemLink = ({ exact, selected, to, ...props }) => {
	const match  = useRouteMatch(to);

	const isSelected = Boolean(typeof selected === 'undefined' ? match && (!exact || match.isExact) : selected);

	return (
		<ListItem component={Link} selected={isSelected} to={to} {...props} />
	);
};


ListItemLink.propTypes = {
	to:       PropTypes.string.isRequired,
	exact:    PropTypes.bool,
	selected: PropTypes.bool
};

ListItemLink.defaultProps = {
	exact:    false,
	selected: undefined
};


export default ListItemLink;
