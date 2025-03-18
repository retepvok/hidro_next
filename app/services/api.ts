import axios from 'axios';
import { getBaseUrl } from '../utils/url';

const api = axios.create({
    baseURL: getBaseUrl(),
});

export default api;
