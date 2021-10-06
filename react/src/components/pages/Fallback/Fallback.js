import React, { useEffect, useState } from 'react';
import { useDispatch }                from 'react-redux';
import { useLocation }                from 'react-router';
import apiService                     from '../../../services/apiService';
import useRootShimmer                 from '../../../hooks/useRootShimmer';
import setRootShimmer                 from '../../../store/app/actions/setRootShimmer';
import FullScreenLoader               from '../../ui/FullScreenLoader';
import CatalogPage, { CatalogShimmer } from '../Catalog';
import NotFound                       from '../NotFound';

// Reacticon: Page component mapping. Ideally this would live elsewhere and be done asynchronously through some webpack magic
const PAGES = {
	'catalog': CatalogPage
};

// Reacticon: Shimmer component mapping. Ideally this would be done elsewhere, where it's more extensible
const SHIMMERS = {
	'catalog': CatalogShimmer
};

export default () => {
	const [component, setCurrentComponent] = useState(null);
	const dispatch = useDispatch();
	const { pathname } = useLocation();
	const rootShimmer = useRootShimmer();

	useEffect(() => {
		setCurrentComponent(null);
		(async () => {
			// Reacticon: getRouteInformation has a built-in cache, so refetching same path will be instantaneous
			const pageType = await apiService.getRouteInformation(pathname);
			// Reacticon: Reset shimmer when page content loads
			dispatch(setRootShimmer(null));
			setCurrentComponent(pageType);
		})();
	}, [pathname]);

	// Reacticon: Serve real page component if it's available
	if (component && typeof PAGES[component] !== 'undefined') {
		const Component = PAGES[component];

		return <Component />;
	}

	// Reacticon: Serve Shimmer component if it's available
	if (rootShimmer && typeof SHIMMERS[rootShimmer] !== 'undefined') {
		const RootShimmer = SHIMMERS[rootShimmer];

		return <RootShimmer />;
	}

	// Reacticon: Fallback to a loading spinner while loading. Could also serve a general shimmer
	if (component === null) {
		return <FullScreenLoader />;
	}

	// Reacticon: Fallback to no-route when loaded and no match
	return <NotFound />;
};
