import HomePage from './components/pages/Home';
import Shimmer from './components/pages/Shimmer';
import Static from './components/pages/Static';
import Fallback from './components/pages/Fallback';

const routes = [
	{ name: 'home', path: '/', component: HomePage, exact: true }, // Reacticon: Homepage
	{ name: 'shimmer', path: '/shimmer', component: Shimmer, exact: true }, // Reacticon: Shimmer UX
	{ name: 'static', path: '/static-route', component: Static, exact: true }, // Reacticon: A known route
	{ name: 'fallback', component: Fallback, alwaysAccessible: true } // Reacticon: Fallback route for dynamic routes and not-found
];

export default routes;
