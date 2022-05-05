const axios = require('axios').default;
import { BASE_URL } from '../api/apiConfig'
import store from '../store'

const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
});

instance.defaults.headers.common['Authorization'] = store ? store.state.auth.access_token : "";


instance.interceptors.request.use(function (config) {
    return config;
}, function (error) {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.log(error)
    return Promise.reject(error);
});


export default instance