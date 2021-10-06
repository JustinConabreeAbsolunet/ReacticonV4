import { setGlobalLoadingMapper } from '../../mappers';


export default (isLoading) => {
	return setGlobalLoadingMapper(isLoading);
};
