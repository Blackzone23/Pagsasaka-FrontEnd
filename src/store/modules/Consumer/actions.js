import axiosClient from '@/axios/axios';
import { toastDelay } from '@/components/composable/GlobalVariables';
import { toastDuration } from '@/components/composable/GlobalVariables';

export default {
    
/******************************************************************
API FOR Market Page 1
******************************************************************/

//API for get item list 1
async getItemList({commit}) {
    return await axiosClient.post('list')
    .then((response) => {
        commit('setViewListData', response.data.products);
        return response.data.products;
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

// API for get item list info
async getItemListInfo({commit}, productId) {
    commit('toggleLoader', true, { root: true })
    return await axiosClient.get(`by-id/${productId}`, productId)
    .then((response) => {
        commit('toggleLoader', false, { root: true });
        commit('setGetViewList', response.data.product);
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

// API for get more list info
 async getMoreList({commit}, { currentPage, search }) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post('product-list-id', { search, page:currentPage } )
        .then((response) => {
            commit('toggleLoader', false, { root: true })
            commit('setGetMoreList', response.data.products);
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

/******************************************************************
API FOR ADD TO CART
******************************************************************/

//api for getting list
async getCartList({commit}) {
    return await axiosClient.post('product/cart-list')
    .then((response) => {
        commit('setCarListt', response.data.cart);
        return response.data.cart;
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

//api for add to cart button
async getAddToCart({ commit }, productId) {
    commit('toggleLoader', true, { root: true });
    try {
        const response = await axiosClient.post(`product/cart/${productId.id}`, productId);
        commit('toggleLoader', false, { root: true });
        // ✅ Update cart state
        commit('setCartList', response.data.cart); // Assuming response.data.cart contains updated cart items

        setTimeout(() => {
            commit('showToast', { showToast: true, toastMessage: response.data.message, toastType: 'success'}, { root: true });}, toastDelay);

        setTimeout(() => {
            commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });
        }, toastDuration);

        return response.data;
    } catch (error) {
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
    }
}


}