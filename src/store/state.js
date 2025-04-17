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
    userId: JSON.parse(decryptData(sessionStorage.getItem('USER')))?.id || null,
    

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
    currentPage: 1,

    totalPages: 1,

    itemsPerPage: 10,

}