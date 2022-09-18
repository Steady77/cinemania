import axios from 'axios';

import { API_KEY, API_URL, SERVER_URL } from '@/config/api.config';

export const axiosAPI = axios.create({
	baseURL: API_URL,
	headers: {
		'X-API-KEY': API_KEY,
		'Content-Type': 'application/json',
	},
});

export const axiosServer = axios.create({
	baseURL: SERVER_URL,
	headers: {
		'Content-Type': 'application/json',
	},
});
