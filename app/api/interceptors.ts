import axios from 'axios';

import { API_KEY, API_URL } from '@/config/api.config';

export const axiosAPI = axios.create({
  baseURL: API_URL,
  headers: {
    'X-API-KEY': API_KEY,
    'Content-Type': 'application/json',
  },
});
