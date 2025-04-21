import axiosClient from '@/axios/axios';
import { toastDelay } from '@/components/composable/GlobalVariables';
import { toastDuration } from '@/components/composable/GlobalVariables';


export default {
/******************************************************************
 API FOR PRODUCT LIST
******************************************************************/ 

    //order list
    async getDeliveryList({commit}) {
        return await axiosClient.get('orders-for-pickup')
        .then((response) => {
            commit('setClaimedProductData', response.data.orders);
            return response.data.orders;
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

    //claim button function
    async claimedProduct({commit}, claimedData) {
            commit('toggleLoader', true, { root: true })
            return await axiosClient.post(`pickupOrder/${claimedData.id}`, claimedData)
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

    //get intransit list
    async getIntransitList({commit}) {
        return await axiosClient.get('orders-in-transit')
        .then((response) => {
            commit('setIntransitList', response.data.orders);
            return response.data.orders;
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

    //uploading image
    async sendImage({ commit }, { id, formData }) {
        commit('toggleLoader', true, { root: true });
        return await axiosClient.post(`uploadDeliveryProof/${id}`, formData) // Use `formData`
        .then((response) => {
            commit('toggleLoader', false, { root: true });
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: response.data.message, toastType: 'success' }, { root: true });
            }, toastDelay);
    
            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });
            }, toastDuration);
    
            return response.data;
        })
        .catch((error) => {
            commit('toggleLoader', false, { root: true });
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.message;
                setTimeout(() => {
                    commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error' }, { root: true });
                }, toastDelay);
    
                setTimeout(() => {
                    commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });
                }, toastDuration);
            }
        });
    },

/******************************************************************
 API FOR CREATING RIDER ACCOUNT
******************************************************************/ 

    // API for creating user
    async createRider({commit}, riderdata) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post('rider/apply', riderdata)
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

     async addImage({commit}, imageData) {
            commit('toggleLoader', true, { root: true })
            return await axiosClient.post('avatar-rider', imageData)
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