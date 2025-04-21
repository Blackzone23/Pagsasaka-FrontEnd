import axiosClient from '@/axios/axios';
import { toastDelay } from '@/components/composable/GlobalVariables';
import { toastDuration } from '@/components/composable/GlobalVariables';

export default {
/******************************************************************
 API FOR ADMINISTRATOR LIST
******************************************************************/

    // API for get item list 1
    async getRiderList({ commit }) {
        return await axiosClient.get('riders/pending')
            .then((response) => {
                commit('setRiderList', response.data);
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

    // Approve button
    async approveRider({ commit }, approveData) {
        commit('toggleLoader', true, { root: true });
        return await axiosClient.post(`rider/approve/${approveData.id}`, approveData)
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

    // Delete button
    async deleteRider({ commit }, deleteRiderData) {
        return await axiosClient.post(`ridersinvalidate/${deleteRiderData}`)
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
 API FOR PROFILE
******************************************************************/

/******************************************************************
 API FOR PAYOUTS
******************************************************************/

     // Fetch all payment requests (pending payouts)
     async getPaymentRequests({ commit }, params = {}) {
        return await axiosClient.get('payments/pending', { params })
            .then((response) => {
                commit('setPaymentList', response.data);
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
                throw error;
            });
    },

    // Approve a payment by ID
    async approvePayment({ commit }, paymentId) {
        commit('toggleLoader', true, { root: true });
        return await axiosClient.post(`payments/approve/${paymentId}`, {})
            .then((response) => {
                commit('toggleLoader', false, { root: true });
                // Remove the approved payout from the state
                commit('removePayment', paymentId);
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
                throw error;
            });
    }

}