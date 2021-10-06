import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { matchPath } from 'react-router';
import { useHistory, useLocation } from 'react-router-dom';
import setGlobalLoading from '../../store/app/actions/setGlobalLoading';
import apiService from '../../services/apiService';

const DELAY_MESSAGE_PREFIX = 'DELAY:';

const KNOWN_ROUTES = ['', '/', '/static-route', '/shimmer'];

const useDelayedTransition = () => {
	const { pathname } = useLocation();
	const dispatch = useDispatch();
	const history = useHistory();

	const unblock = useRef();

	useEffect(() => {
		// Override globalThis.addEventListener to prevent binding beforeunload while we add our blocker
		const originalWindowAddEventListener = globalThis.addEventListener;
		globalThis.addEventListener = (type, listener, options) => {
			if (type === 'beforeunload') {
				return;
			}

			if (typeof originalWindowAddEventListener === 'function') {
				// eslint-disable-next-line consistent-return
				return originalWindowAddEventListener(type, listener, options);
			}
		};

		unblock.current = history.block((location) => {
			// Ignore query string changes
			if (location.pathname === pathname) {
				return true;
			}

			// Ignore hardcoded routes
			const isInternalRoute = KNOWN_ROUTES.some((path) => {
				return !!matchPath(location.pathname, {
					path,
					exact: true
				});
			});

			if (isInternalRoute) {
				return true;
			}

			return `${DELAY_MESSAGE_PREFIX}${location.pathname}`;
		});

		globalThis.addEventListener = originalWindowAddEventListener;

		return () => {
			if (typeof unblock.current === 'function') {
				unblock.current();
			}
		};
	}, [pathname, history]);

	useEffect(() => {
		// eslint-disable-next-line consistent-return
		globalThis.handleRouteChangeConfirmation = async (message, proceed) => {
			if (globalThis.avoidDelayedTransition) {
				globalThis.avoidDelayedTransition = false;
				if (typeof unblock.current === 'function') {
					unblock.current();
				}

				return proceed(true);
			}

			dispatch(setGlobalLoading(true));

			const nextPathname = message.replace(DELAY_MESSAGE_PREFIX, '');

			// Calling service caches the route result
			await apiService.getRouteInformation(nextPathname);

			dispatch(setGlobalLoading(false));
			if (typeof unblock.current === 'function') {
				unblock.current();
			}
			proceed(true);
		};
	}, [dispatch, setGlobalLoading]);
};

export default useDelayedTransition;
