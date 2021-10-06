import React             from 'react';
import PropTypes         from 'prop-types';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const Router = ({ router: RouterComponent, routes, layout: Layout }) => {
	// Register custom user confirmation handler
	const getUserConfirmation = (message, callback) => {
		if (typeof globalThis.handleRouteChangeConfirmation === 'function') {
			// Call our handler if it exists (depending on render cycle it may not)
			return globalThis.handleRouteChangeConfirmation(message, callback);
		}

		return callback(globalThis.confirm(message));
	};

	return (
		<RouterComponent getUserConfirmation={getUserConfirmation}>
			<Layout>
				<Switch>
					{routes
						.map((route) => {
							return (route.middleware || []).reduce((processedRoute, middleware) => {
								return middleware(processedRoute);
							}, route);
						})
						.filter(Boolean)
						.map((route) => {
							return (
								<Route key={route.name} {...route} />
							);
						})}
				</Switch>
			</Layout>
		</RouterComponent>
	);
};


Router.propTypes = {
	routes: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		path: PropTypes.string
	})).isRequired,
	layout: PropTypes.elementType.isRequired,
	router: PropTypes.elementType
};

Router.defaultProps = {
	router: BrowserRouter
};


export default Router;
