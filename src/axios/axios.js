import axios from 'axios';
import store from '@/store';
import state from '@/store/state';

const axiosClient = axios.create({
     
    baseURL: '',
    headers: {
        'Content-Type': 'Application/json',
        'X-Requested-With': 'XMLHttpRequest',

    }
})

axiosClient.interceptors.request.use((config) => {
    const token = store.state.userData.data.token;
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
})

axiosClient.defaults.withCredentials = false

export default axiosClient