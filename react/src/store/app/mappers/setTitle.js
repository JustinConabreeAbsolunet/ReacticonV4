import {
	SET_TITLE
} from '../constants';


export default (title) => {
	return { type: SET_TITLE, title };
};
