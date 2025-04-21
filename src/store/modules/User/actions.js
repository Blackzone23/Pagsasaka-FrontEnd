import axiosClient from '@/axios/axios';
import { toastDelay } from '@/components/composable/GlobalVariables';
import { toastDuration } from '@/components/composable/GlobalVariables';


export default {
/******************************************************************
 API FOR PRODUCT
******************************************************************/

    //API for Create Prouduct
    async createProduct({commit}, productdata) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post('product/add', productdata)
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
    
    //API for category dropdown
    async getCategoryDropdown({commit}) {
        return await axiosClient.get('dropdown/category')
        .then((response) => {
            commit('setCategoryDropdown', response.data.category);
            return response.data.category;
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

    //API Farmer Product list
    async getProductList({commit}, { currentPage, search }) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post('product/account', { search, page:currentPage } )
        .then((response) => {
            commit('toggleLoader', false, { root: true })
            commit('setProductListData', response.data.products);
            commit('setCurrentPage', response.data.pagination.current_page, { root: true });
            commit('setItemsPerPage', response.data.pagination.per_page, { root: true });
            commit('setTotalPages', response.data.pagination.last_page, { root: true });
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

    // API for updating product
    async updateProduct({commit}, updatedProduct) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post(`product/edit/${updatedProduct.id}`, updatedProduct)
        .then((response) => {
            commit('toggleLoader', false, { root: true })
            commit('setUpdateData', response.data.product);
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

    // API for delete product
    async deleteProduct({commit}, deleteProductData) {
        return await axiosClient.post(`product/delete/${deleteProductData}`)
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

/******************************************************************
 API FOR SHIPMENT
******************************************************************/

    //API for get order list
    async getOrderList({commit}) {
        return await axiosClient.get('getOrders')
        .then((response) => {
            commit('setShipmentListData', response.data.orders.data);
            return response.data.orders.data;
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

    //API for get cancellation list
    async getCancelList({commit}) {
        return await axiosClient.get('cancelled-sa-seller')
        .then((response) => {
            commit('setCancelListData', response.data.orders.data);
            return response.data.orders.data;
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

    //API for get refund/return list
    async getRefundList({commit}) {
        return await axiosClient.get('refund-farmer')
        .then((response) => {
            commit('setRefundListData', response.data.orders.data);
            return response.data.orders.data;
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

    //API Update status
    async updateStatus({commit}, statusData) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post(`updateOrderStatus/${statusData.id}`, statusData)
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

    //API for get delivery proof
    async getImage({commit}, orderId) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.get(`get-delivery-proof/${orderId}`)
        .then((response) => {
            commit('toggleLoader', false, { root: true });
            commit('setImage', response.data);
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

/******************************************************************
 API FOR PAYMENT
******************************************************************/

//get payment
async getPayMent({commit}) {
    return await axiosClient.get('payment-history')
    .then((response) => {
        commit('setPaymentListData', response.data.transactions);
        return response.data.transactions;
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

async getSlots({commit}) {
    return await axiosClient.get('available-slots')
    .then((response) => {
        commit('setSlotListData', response.data.available_slots);
        return response.data.available_slots;
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

async getCSV({commit}) {
    return await axiosClient.get('export-payment-history')
    .then((response) => {
        commit('setExportListData', response.data.available_slots);
        return response.data.available_slots;
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