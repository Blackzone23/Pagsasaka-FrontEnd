import axiosClient from '@/axios/axios';
import { toastDelay } from '@/components/composable/GlobalVariables';
import { toastDuration } from '@/components/composable/GlobalVariables';

export default {
/******************************************************************
 API FOR LOGIN
******************************************************************/
// API for login
async login ({commit}, formData ) {
    commit('toggleLoader', true, { root: true })
    return await axiosClient.post('login', formData)
    .then((response) => {
        commit('toggleLoader', false, { root: true })
        commit('setUserData', response.data);
        commit('setName', response.data.user);
        return response.data;
        
    })
    .catch((error) => {
        commit('toggleLoader', false, { root: true })
        if(error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error'}, { root: true });
            }, toastDelay);

            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
            }, toastDuration);
        }   
    })
 
},


/******************************************************************
API FOR LOGOUT
******************************************************************/
async logout ({commit} ) {
    commit('toggleLoader', true, { root: true })
    return await axiosClient.post('logout')
    .then((response) => {
        commit('toggleLoader', false, { root: true })
        commit('setLogout');
        return response.data;
    })
    .catch((error) => {
        commit('toggleLoader', false, { root: true })
        if(error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error'}, { root: true });
            }, toastDelay);

            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
            }, toastDuration);
        }   
    })

},

// API for creating user
async createUser({commit}, signdata) {
    commit('toggleLoader', true, { root: true })
    return await axiosClient.post('account/add', signdata)
    .then((response) => {
        commit('toggleLoader', false, { root: true })
        setTimeout(() => {
            commit('showToast', { showToast: true, toastMessage: response.data.message, toastType: 'success'}, { root: true });
        }, toastDelay);

        setTimeout(() => {
            commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
        }, toastDuration);

        return response.data;
    })
    .catch((error) => {
        commit('toggleLoader', false, { root: true })
        if(error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error'}, { root: true });
            }, toastDelay);

            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
            }, toastDuration);
        }   
    })
},

// API for getting division dropdown
async getRoleDropdown({commit}) {
    return await axiosClient.get('dropdown-roles')
    .then((response) => {
        commit('setRoleDropdown', response.data.data);
        return response.data.data;
    })
    .catch((error) => {
        commit('toggleLoader', false, { root: true })
        if(error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error'}, { root: true });
            }, toastDelay);

            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
            }, toastDuration);
        }   
    })
},

// API for getting division dropdown
async getSecurityDropdown({commit}) {
    return await axiosClient.get('questions')
    .then((response) => {
        commit('setSecurityQuestionDropdown', response.data.questions);
        return response.data.questions;
    })
    .catch((error) => {
        commit('toggleLoader', false, { root: true })
        if(error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error'}, { root: true });
            }, toastDelay);

            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
            }, toastDuration);
        }   
    })
},

//verify Otp
async createOTP({commit}, otpdata) {
    commit('toggleLoader', true, { root: true })
    return await axiosClient.post('verify-otp', otpdata)
    .then((response) => {
        commit('toggleLoader', false, { root: true })
        setTimeout(() => {
            commit('showToast', { showToast: true, toastMessage: response.data.message, toastType: 'success'}, { root: true });
        }, toastDelay);

        setTimeout(() => {
            commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
        }, toastDuration);

        return response.data;
    })
    .catch((error) => {
        commit('toggleLoader', false, { root: true })
        if(error.response && error.response.data) {
            const errorMessage = error.response.data.message;
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error'}, { root: true });
            }, toastDelay);

            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
            }, toastDuration);
        }   
    })
},

}
