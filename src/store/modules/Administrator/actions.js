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

    async getRemitList({ commit }) {
        return await axiosClient.get('allriders')
            .then((response) => {
                commit('setRemitList', response.data);
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

    async approveRiderRemit({ commit }, approveData) {
        commit('toggleLoader', true, { root: true });
        return await axiosClient.post(`rider/approve-earnings/${approveData.id}`, approveData)
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

    async getAdminList({ commit }) {
        return await axiosClient.get('counts')
            .then((response) => {
                commit('setPeopleList', response.data);
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
 API FOR PAYOUTS
******************************************************************/

    // API for get item list 1
    async getPaymentRequests({ commit }) {
        return await axiosClient.get('payments/pending')
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
            });
    },


    async approvePayment({ commit }, paymentId) {
        commit('toggleLoader', true, { root: true });
        try {
          // Make sure the paymentId is correct (i.e., just the ID)
          const response = await axiosClient.post(`payments/approve/${paymentId}`);
          
          commit('toggleLoader', false, { root: true });
          
          // Show success toast after approval
          setTimeout(() => {
            commit('showToast', { showToast: true, toastMessage: response.data.message, toastType: 'success' }, { root: true });
          }, toastDelay);
          
          // Hide toast after a certain duration
          setTimeout(() => {
            commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });
          }, toastDuration);
          
          return response.data;
        } catch (error) {
          commit('toggleLoader', false, { root: true });
          
          // Handle error and display the message in toast
          const errorMessage = error.response?.data?.message || 'An error occurred';
          setTimeout(() => {
            commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error' }, { root: true });
          }, toastDelay);
          
          // Hide error toast after a duration
          setTimeout(() => {
            commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });
          }, toastDuration);
          
          // Rethrow the error if you want to propagate it
          throw error;
        }
    },
      
    async getApproveRequests({ commit }) {
        return await axiosClient.get('payments/approved')
            .then((response) => {
                commit('setApproveList', response.data);
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

  
}