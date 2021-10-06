import apiConnector     from '../apiConnector';


class AbstractApiService {

	setApiClient(apiClient) {
		this._apiClient = apiClient;

		return this;
	}

	get api() {
		return this._apiClient || apiConnector;
	}

}


export default AbstractApiService;
