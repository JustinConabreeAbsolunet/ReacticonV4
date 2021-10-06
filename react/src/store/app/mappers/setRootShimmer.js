import {
	SET_ROOT_SHIMMER
} from '../constants';


export default (rootShimmer) => {
	return { type: SET_ROOT_SHIMMER, rootShimmer };
};
