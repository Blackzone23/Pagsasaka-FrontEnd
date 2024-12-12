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
    isLoggedIn: {
        value:false
    }, // Determine login status from sessionStorage

    userProfilePic: JSON.parse(decryptData(sessionStorage.getItem('USER')))?.profilePic || '', // Replace with actual profile picture logic

    userName: JSON.parse(decryptData(sessionStorage.getItem('USER')))?.name || '', // Replace with actual user name logic

    signup: {
        data:[],
    },
    roleDropdown: {
        data:[],
    },

    securityDropdown: {
        data:[],
    },

    searchTerm: '',

}