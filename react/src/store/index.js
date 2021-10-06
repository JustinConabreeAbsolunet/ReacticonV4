import StoreManager from './StoreManager';
import appHandlers, { state as appState } from './app';

// Initialize redux store
const store = new StoreManager();
store.handlers('app', appHandlers, appState);

export default store;
