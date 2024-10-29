import axios from 'axios';
const BACKEND_API = import.meta.env.VITE_BACKEND_URL;
const api = axios.create({
    baseURL: BACKEND_API,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default api;