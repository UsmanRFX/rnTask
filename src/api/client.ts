import axios from 'axios';
import { API_BASE_URL } from './config';

const apiClient = axios.create({
  baseURL: API_BASE_URL, // 'https://technology.lastminute.com/api'
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
