import { decryptData } from '@/components/composable/CryptoUtility';

export default {
    showLoading: {
        state: false
    },

    toast:{
        showToast: false,
        toastMessage: '',
        toastType: 'default',
    },
    
    userData: JSON.parse(decryptData(sessionStorage.getItem('USER'))) || {
        data: [],
    },

    request: {
        data:[],
        selectedRequestData:[],
    },
}