import { setThemeMapper } from '../../mappers';


export default (title) => {
	return (dispatch) => {
		dispatch(setThemeMapper(title));
	};
};
