import React, { Fragment, useEffect, useState } from 'react';
import clsx                                     from 'clsx';
import PropTypes                                from 'prop-types';
import { useLocation }                          from 'react-router';
import Drawer                                   from '@material-ui/core/Drawer';
import IconButton                               from '@material-ui/core/IconButton';
import List                                     from '@material-ui/core/List';
import ListItem                                 from '@material-ui/core/ListItem';
import ListItemText                             from '@material-ui/core/ListItemText';
import makeStyles                               from '@material-ui/core/styles/makeStyles';
import useTheme                                 from '@material-ui/core/styles/useTheme';
import useMediaQuery                            from '@material-ui/core/useMediaQuery';
import CloseIcon                                from '@material-ui/icons/Close';
import MenuIcon                                 from '@material-ui/icons/Menu';
import HiddenOnDesktop                          from '../../ui/HiddenOnDesktop';
import ListItemLink                             from '../../ui/ListItemLink';
import style                                    from './style';


const useStyles = makeStyles(style);


const MobileMenu = ({ pages }) => {
	const classes         = useStyles();
	const theme           = useTheme();
	const isOnDesktop     = useMediaQuery(theme.breakpoints.desktopOnly());
	const location        = useLocation();
	const [open, setOpen] = useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (isOnDesktop) {
			handleDrawerClose();
		}
	}, [isOnDesktop]);

	useEffect(() => {
		handleDrawerClose();
	}, [location]);

	return (
		<Fragment>
			<HiddenOnDesktop>
				<List>
					<ListItem className={clsx(classes.menuButton, {
						[classes.hide]: open
					})}
					>
						<IconButton
							id="open-sidebar-icon"
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={classes.iconButton}
						>
							<MenuIcon className={classes.menuIcon} />
						</IconButton>
					</ListItem>
					<ListItem className={clsx(classes.menuButton, {
						[classes.hide]: !open
					})}
					>
						<IconButton
							id="close-sidebar-icon"
							color="inherit"
							aria-label="close drawer"
							onClick={handleDrawerClose}
							edge="start"
							className={classes.iconButton}
						>
							<CloseIcon className={classes.menuIcon} />
						</IconButton>
					</ListItem>
				</List>
			</HiddenOnDesktop>
			<Drawer
				className={clsx(classes.drawer, classes[`drawer${open ? 'Open' : 'Close'}`])}
				variant="temporary"
				open={open}
				onClose={handleDrawerClose}
				anchor="left"
				ModalProps={{
					BackdropProps: {
						classes: {
							root: classes.backdrop
						}
					}
				}}
				PaperProps={{
					classes: {
						root: clsx(classes.drawerPaper, classes[`drawer${open ? 'Open' : 'Close'}`])
					}
				}}
			>
				<List dense className={classes.drawerList}>
					{pages.map(({ name, to, label, scrollTo }) => {
						return (
							<ListItemLink
								key={name}
								button
								to={to}
								exact
								scrollTo={scrollTo}
								onScroll={handleDrawerClose}
								className={classes.drawerLinkWrapper}
								classes={{ selected: classes.drawerLinkActive }}
							>
								<ListItemText primary={label} classes={{ primary: classes.drawerLink }} />
							</ListItemLink>
						);
					})}
				</List>
			</Drawer>
		</Fragment>
	);
};


MobileMenu.propTypes = {
	pages: PropTypes.arrayOf(PropTypes.shape({
		to:    PropTypes.string.isRequired,
		name:  PropTypes.string.isRequired,
		label: PropTypes.string.isRequired
	})).isRequired
};


export default MobileMenu;
