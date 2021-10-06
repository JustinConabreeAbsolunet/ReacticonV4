import {
	SET_NAME,
	SET_TITLE,
	SET_THEME,
	SET_ROOT_SHIMMER,
	SET_GLOBAL_LOADING
}                           from '../constants';
import setName              from './setName';
import setTitle             from './setTitle';
import setTheme             from './setTheme';
import setRootShimmer       from './setRootShimmer';
import setGlobalLoading     from './setGlobalLoading';


export default {
	[SET_NAME]:  setName,
	[SET_TITLE]: setTitle,
	[SET_THEME]: setTheme,
	[SET_ROOT_SHIMMER]: setRootShimmer,
	[SET_GLOBAL_LOADING]: setGlobalLoading
};
