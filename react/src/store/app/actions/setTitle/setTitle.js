import { setTitleMapper } from '../../mappers';


export default (title) => {
	return (dispatch, getState) => {
		const { app: { name } } = getState();

		document.title = `${title ? `${title} - ` : ''}${name}`;

		dispatch(setTitleMapper(title));
	};
};
