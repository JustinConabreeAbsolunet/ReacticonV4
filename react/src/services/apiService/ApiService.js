import AbstractApiService from '../AbstractApiService';

class ApiService extends AbstractApiService {

	constructor() {
		super();

		this._cachedRoutes = {};
	}

	async getCatalog() {
		const { data } = await this.api.get('catalog');

		return data;
	}

	async getRouteInformation(url) {
		if (typeof this._cachedRoutes[url] === 'undefined') {
			const encodedUrl = encodeURIComponent(url);
			const { data } = await this.api.get(`route-info?type=${encodedUrl}`);
			this._cachedRoutes[url] = data;
		}

		return this._cachedRoutes[url];
	}

}

export default ApiService;
