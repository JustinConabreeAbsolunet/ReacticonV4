import React, { Fragment } from 'react';
import { Link }            from 'react-router-dom';
import { useDispatch }     from 'react-redux';
import AppBar              from '@material-ui/core/AppBar';
import Container           from '@material-ui/core/Container';
import makeStyles          from '@material-ui/core/styles/makeStyles';
import Toolbar             from '@material-ui/core/Toolbar';
import setRootShimmer      from '../../../store/app/actions/setRootShimmer';
import DesktopMenu         from '../DesktopMenu';
import MobileMenu          from '../MobileMenu';
import Logo                from '../Logo';
import LoadingIndicator    from '../LoadingIndicator';
import style               from './style';


const useStyles = makeStyles(style);


export default () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const availablePages = [
		{
			name:  'home',
			to:    '/',
			label: 'Home'
		},
		{
			name:  'shimmer',
			to:    '/shimmer',
			label: 'Shimmer'
		},
		{
			name:  'static',
			to:    '/static-route',
			label: 'Static'
		},
		{
			name:  'dynamic',
			to:    '/dynamic-route',
			label: 'Dynamic',
			onClick: () => {
				// Reacticon: for demo purposes, avoid delayed transition for this route
				globalThis.avoidDelayedTransition = true;
			}
		},
		{
			name:  'predictive',
			to:    '/predictive',
			label: 'Predictive',
			onClick: () => {
				// Reacticon: Avoid delayed transition when setting a root shimmer
				globalThis.avoidDelayedTransition = true;
				dispatch(setRootShimmer('catalog'));
			}
		},
		{
			name:  'delay',
			to:    '/delayed',
			label: 'Delayed'
		}
	];

	return (
		<Fragment>
			<AppBar
				position="fixed"
				color="secondary"
				className={classes.appBar}
			>
				<Container className={classes.toolbarWrapper}>
					<Toolbar variant="dense" className={classes.toolbar}>
						<MobileMenu pages={availablePages} />
						<Link to="/" className={classes.logoLink}>
							<Logo className={classes.logo} />
						</Link>
						<div className={classes.separator} />
						<DesktopMenu pages={availablePages} />
					</Toolbar>
					<LoadingIndicator />
				</Container>
			</AppBar>
			<div className={classes.offset} />
		</Fragment>
	);
};
