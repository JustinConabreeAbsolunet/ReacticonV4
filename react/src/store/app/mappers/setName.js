import {
	SET_NAME
} from '../constants';


export default (name) => {
	return { type: SET_NAME, name };
};
