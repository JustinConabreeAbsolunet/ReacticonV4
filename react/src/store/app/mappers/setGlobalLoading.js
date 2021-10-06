import {
	SET_GLOBAL_LOADING
} from '../constants';


export default (loading) => {
	return { type: SET_GLOBAL_LOADING, loading };
};
