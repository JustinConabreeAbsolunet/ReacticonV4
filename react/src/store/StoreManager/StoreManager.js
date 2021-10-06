import {
	applyMiddleware,
	combineReducers,
	compose,
	createStore
}                        from 'redux';
import { handleActions } from 'redux-actions';
import defaultMiddleware from './middleware';
import defaultReducers   from './reducers';


/**
 * Store manager that drives the Redux structure pre-processing.
 */
class StoreManager {

	/**
	 * StoreManager constructor.
	 */
	constructor() {
		this._reducers = {};
		this._middleware = [];
		this._enhancers = [];
		defaultMiddleware.forEach((middleware) => {
			this.middleware(middleware);
		});
	}

	/**
	 * Add a reducer.
	 *
	 * @param {string} name - The reducer name.
	 * @param {function} reducer - The reducer instance.
	 * @returns {StoreManager} The current store manager instance.
	 */
	reducer(name, reducer) {
		this._reducers[name] = reducer;

		return this;
	}

	/**
	 * Add handlers as a reducer through redux-actions.
	 *
	 * @param {string} name - The reducer name.
	 * @param handlers - The action types/handlers mapped object.
	 * @param state - The default state.
	 * @returns {StoreManager} The current store manager instance.
	 */
	handlers(name, handlers, state) {
		return this.reducer(name, handleActions(handlers, state));
	}

	/**
	 * Register a Redux middleware.
	 *
	 * @param {function} middleware - The middleware instance.
	 * @returns {StoreManager} The current store manager instance.
	 */
	middleware(middleware) {
		this._middleware.push(middleware);

		return this;
	}

	/**
	 * Register a Redux enhancer.
	 *
	 * @param {function} enhancer - The enhancer instance.
	 * @returns {StoreManager} The current store manager instance.
	 */
	enhancer(enhancer) {
		this._enhancers.push(enhancer);

		return this;
	}

	/**
	 * Get the store instance.
	 * It will be treated as a singleton.
	 *
	 * @returns {object} The store instance.
	 */
	getStore() {
		if (!this._store) {
			const mainReducer = this.getReducer();
			Object.entries(defaultReducers).forEach(([reducerName, reducer]) => {
				this.reducer(reducerName, reducer(mainReducer));
			});
			this._store = createStore(mainReducer, this.getEnhancers());
		}

		return this._store;
	}

	/**
	 * Get the global reducer that combines all registered reducers.
	 *
	 * @returns {function}
	 */
	getReducer() {
		return combineReducers(this._reducers);
	}

	/**
	 * Get all enhancers that should be applied to the Redux store, including all middleware.
	 *
	 * @returns {function}
	 */
	getEnhancers() {
		return compose(
			applyMiddleware(...this._middleware),
			...this._enhancers
		);
	}

}


export default StoreManager;
