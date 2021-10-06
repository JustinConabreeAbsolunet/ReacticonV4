import { useEffect }   from 'react';
import { useDispatch } from 'react-redux';
import { setTitle }    from '../../store/app';


export default (title) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setTitle(title));
	}, []);
};
