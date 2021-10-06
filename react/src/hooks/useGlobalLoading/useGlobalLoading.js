import { useSelector } from 'react-redux';


export default () => {
	return useSelector((state) => {
		return state.app.loading;
	});
};
