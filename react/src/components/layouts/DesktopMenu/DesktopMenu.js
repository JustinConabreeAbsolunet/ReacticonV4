import React          from 'react';
import PropTypes      from 'prop-types';
import Typography     from '@material-ui/core/Typography';
import makeStyles     from '@material-ui/core/styles/makeStyles';
import List           from '@material-ui/core/List';
import HiddenOnMobile from '../../ui/HiddenOnMobile';
import ListItemLink   from '../../ui/ListItemLink';
import style          from './style';


const useStyles = makeStyles(style);


const DesktopMenu = ({ pages }) => {
	const classes = useStyles();

	return (
		<HiddenOnMobile>
			<nav>
				<List className={classes.menu}>
					{pages.map(({ name, to, label, ...linkProps }) => {
						return (
							<li className={classes.menuItemWrapper} key={name}>
								<ListItemLink
									{...linkProps}
									to={to}
									exact
									className={classes.menuItem}
									classes={{ selected: classes.menuItemSelected }}
								>
									<Typography>{label}</Typography>
								</ListItemLink>
							</li>
						);
					})}
				</List>
			</nav>
		</HiddenOnMobile>
	);
};


DesktopMenu.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.shape({
		to:    PropTypes.string.isRequired,
		name:  PropTypes.string.isRequired,
		label: PropTypes.string.isRequired
	})).isRequired
};


export default DesktopMenu;
