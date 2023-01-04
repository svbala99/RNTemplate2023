// library imports
import axios from 'axios';

// constants
import { RoutingConstants, BASE_URL } from '../constants';

/**
 * @function login
 * @param {Object} payload
 * @returns {JSON}
 */
const loginApiService = async (payload = {}) => {
	const { login } = RoutingConstants;
	const loginUrl = `${BASE_URL}${login}`;
	try {
		const response = await axios.post(loginUrl, payload, { timeout: 10000 });
		return response.data;
	} catch (error) {
		return error;
	}
};

export default loginApiService;
