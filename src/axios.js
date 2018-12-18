import axios from 'axios';

export default axios.create({
	baseURL: 'http://quizzit.test/api',
	headers: {
		Accept: 'application/json',
	},
});