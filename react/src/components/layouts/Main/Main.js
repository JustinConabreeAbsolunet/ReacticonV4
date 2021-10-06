import React                   from 'react';
import makeStyles              from '@material-ui/core/styles/makeStyles';
import Container               from '@material-ui/core/Container';
import useDelayedTransition    from '../../../hooks/useDelayedTransition';
import childrenPropType        from '../../../models/propTypes/children';
import Header                  from '../Header';
import Footer                  from '../Footer';
import style                   from './style';


const useStyles = makeStyles(style);


const Main = ({ children }) => {
	const classes = useStyles();
	// Reacticon: Needs to be a child of Router. Otherwise we don't have access to location
	useDelayedTransition();

	// Reacticon: Main application layout
	return (
		<div className={classes.root}>
			<div className={classes.pageWrapper}>
				<Header />
				<Container component="main" className={classes.content}>
					{children}
				</Container>
				<Footer />
			</div>
		</div>
	);
};


Main.propTypes = {
	children: childrenPropType.isRequired
};


export default Main;
