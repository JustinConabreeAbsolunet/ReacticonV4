import React, { Fragment, StrictMode } from 'react';
import { BrowserRouter }               from 'react-router-dom';
import routes                          from '../../../routes';
import Layout                          from '../../layouts/Main';
import Providers                       from '../Providers';
import Router                          from '../Router';

export default () => {
	const Wrapper = process.env.NODE_ENV !== 'production' ? StrictMode : Fragment;

	// Reacticon: Bootstrap application
	return (
		<Wrapper>
			<Providers>
				<Router
					router={BrowserRouter}
					routes={routes}
					layout={Layout}
				/>
			</Providers>
		</Wrapper>
	);
};
