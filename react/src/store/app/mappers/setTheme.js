import {
	SET_THEME
} from '../constants';


export default (theme) => {
	return { type: SET_THEME, theme };
};
