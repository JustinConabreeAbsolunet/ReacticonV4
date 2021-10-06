const SET = '_set';
const RESET = '_reset';

export default (mainReducer) => {
	return (state, action) => {
		const { type } = action;

		if (type === SET) {
			return action.state;
		}

		return mainReducer(type === RESET ? undefined : state, action);
	};
};
