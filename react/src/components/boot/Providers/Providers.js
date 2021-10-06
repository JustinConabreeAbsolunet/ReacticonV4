import React from 'react';
import { Provider as ReduxProvider }   from 'react-redux';
import storeManager from '../../../store';
import childrenPropType from '../../../models/propTypes/children';
import providers from '../../providers';

const store = storeManager.getStore();

const Providers = ({ children }) => {
	// Reacticon: Bootstrap Redux store and other providers (theme, etc)
	return (
		<ReduxProvider store={store}>
			{providers.reduceRight((content, Provider) => {
				return (
					<Provider>
						{content}
					</Provider>
				);
			}, children)}
		</ReduxProvider>
	);
};

Providers.propTypes = {
	children: childrenPropType.isRequired
};

export default Providers;
