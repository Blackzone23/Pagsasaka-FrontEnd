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
// async logout ({commit} ) {
// commit('toggleLoader', true, { root: true })
// return await axiosClient.post('logout')
// .then((response) => {
//     commit('toggleLoader', false, { root: true })
//     commit('setLogout');
//     return response.data;
// })
// .catch((error) => {
//     commit('toggleLoader', false, { root: true })
//     if(error.response && error.response.data) {
//         const errorMessage = error.response.data.message;
//         setTimeout(() => {
//             commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error'}, { root: true });
//         }, toastDelay);

//         setTimeout(() => {
//             commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
//         }, toastDuration);
//     }   
// })

// },


}