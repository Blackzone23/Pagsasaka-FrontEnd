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
            commit('setCartList', response.data.cart);
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
    },

    async checkBox({ commit }, productId) {
        commit('toggleLoader', true, { root: true });
        try {
            const response = await axiosClient.get(`cart-item-details/${productId.id}`, productId);
            commit('toggleLoader', false, { root: true });
            // ✅ Update cart state
            commit('setCartList', response.data.cart_items_details); // Assuming response.data.cart contains updated cart items

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
    },

    //API for delete cartlist
    async deleteCart({commit}, deleteCartData) {
        return await axiosClient.post(`product/cart-remove/${deleteCartData}`)
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

    //api for add to buy now button
    async getBuyNow({ commit }, productId) {
        commit('toggleLoader', true, { root: true });
        try {
            const response = await axiosClient.post(`product/buynow/${productId.id}`, productId);
            commit('toggleLoader', false, { root: true });
            
            
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
    },

    //checkout button
    async Checkout({ commit }, productId) {
        commit('toggleLoader', true, { root: true });
        try {
            const response = await axiosClient.post(`product/checkout/item/${productId.id}`, productId);
            commit('toggleLoader', false, { root: true });
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
    },
    
    // Checkout list
    async getCheckoutList({ commit }) {
        commit('toggleLoader', true, { root: true });
        return await axiosClient.get(`product/list-cart-status`)
            .then((response) => {
                commit('toggleLoader', false, { root: true });
                commit('setCheckout', response.data.cart_statuses);
                setTimeout(() => {
                    commit('showToast', { showToast: true, toastMessage: response.data.message, toastType: 'success' });
                }, toastDelay);
                setTimeout(() => {
                    commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
                }, toastDuration);
                return response.data;
            })
            .catch((error) => {
                commit('toggleLoader', false, { root: true });
                if (error.response && error.response.data) {
                    const errorMessage = error.response.data.message;
                    setTimeout(() => {
                        commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error' });
                    }, toastDelay);
                    setTimeout(() => {
                        commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
                    }, toastDuration);
                }
            });
    },

    // Place COD order
    async placeCODOrder({ commit, state }) {
        commit('SET_CHECKOUT_LOADING', true);
        commit('toggleLoader', true, { root: true });
    
        const items = state.checkout.data.map(item => ({
            product_id: item.product_id,
            quantity: item.quantity,
        }));
        console.log('Items being sent:', items);
    
        if (items.length === 0) {
            commit('SET_CHECKOUT_ERROR', 'No items to order');
            commit('toggleLoader', false, { root: true });
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: 'No items to order', toastType: 'error' });
            }, toastDelay);
            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
            }, toastDuration);
            return;
        }
    
        try {
            const response = await axiosClient.post('orders/cod', {
                items: items,
            });
            commit('SET_CHECKOUT_SUCCESS', response.data);
            commit('CLEAR_CHECKOUT_DATA'); // Clear checkout data after success
            commit('toggleLoader', false, { root: true });
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: response.data.message, toastType: 'success' });
            }, toastDelay);
            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
            }, toastDuration);
            return response.data;
        } catch (error) {
            console.error('COD order error:', error.response?.data);
            commit('SET_CHECKOUT_ERROR', error.response?.data?.message || 'Failed to place COD order');
            commit('toggleLoader', false, { root: true });
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.message || 'Failed to place COD order';
                setTimeout(() => {
                    commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error' });
                }, toastDelay);
                setTimeout(() => {
                    commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
                }, toastDuration);
            }
        }
    },


     //place order button
     async placeOrderSelected({ commit }, checkoutId) {
        commit('toggleLoader', true, { root: true });
        try {
            const response = await axiosClient.post(`pay/${checkoutId.id}`, checkoutId);
            commit('toggleLoader', false, { root: true });
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
    },

    // Place GCash order (updated to return checkout_url)
    async placeGCashOrder({ commit, state }) {
        commit('SET_CHECKOUT_LOADING', true);
        commit('toggleLoader', true, { root: true });
    
        const items = state.checkout.data.map(item => ({
            product_id: item.product_id,
            quantity: item.quantity,
        }));
        console.log('Items being sent for GCash:', items);
    
        if (items.length === 0) {
            commit('SET_CHECKOUT_ERROR', 'No items to order');
            commit('toggleLoader', false, { root: true });
            setTimeout(() => {
                commit('showToast', { showToast: true, toastMessage: 'No items to order', toastType: 'error' });
            }, toastDelay);
            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
            }, toastDuration);
            return { isSuccess: false, message: 'No items to order' };
        }
    
        try {
            const response = await axiosClient.post('pay', {
                items: items,
            });
            commit('SET_CHECKOUT_SUCCESS', response.data);
            commit('CLEAR_CHECKOUT_DATA'); // Clear checkout data after success
            commit('toggleLoader', false, { root: true });
            return response.data; // Return the response containing checkout_url
        } catch (error) {
            console.error('GCash order error:', error.response?.data);
            commit('SET_CHECKOUT_ERROR', error.response?.data?.message || 'Failed to place GCash order');
            commit('toggleLoader', false, { root: true });
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.message || 'Failed to place GCash order';
                setTimeout(() => {
                    commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error' });
                }, toastDelay);
                setTimeout(() => {
                    commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' });
                }, toastDuration);
            }
            return { isSuccess: false, message: error.response?.data?.message || 'Failed to place GCash order' };
        }
    },

/******************************************************************
API FOR MY PURCHASE
******************************************************************/
   //api for getting list
    async getPurchase({commit}) {
        return await axiosClient.get('my-placed-orders')
        .then((response) => {
            commit('setPurchaseList', response.data.products_ordered);
            return response.data.products_ordered;
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

    async getPurchaseShip({commit}) {
        return await axiosClient.get('toship-orders')
        .then((response) => {
            commit('setPurchaseShipList', response.data.waiting_courrier);
            return response.data.waiting_courrier;
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
     API FOR MESSAGE
    ******************************************************************/
    //conversation list
    async getConversation({commit}) {
        return await axiosClient.get('chat-sessions-lists')
        .then((response) => {
            commit('setConversation', response.data.data);
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

    //message window
    async getMessages({commit}, id) {
        return await axiosClient.get(`chat-view/${id}`)
        .then((response) => {
            commit('setMessages', response.data.data.messages);
            return response.data.data.messages;
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

    //send message
    async sendMessage({ commit }, { id, message }) {
        commit('toggleLoader', true, { root: true });
        return await axiosClient.post(`send/{conversation_id}/messages`,{ message }) // Use `formData`
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


    //delete conversation
    async deleteConversation({commit}, id) {
        return await axiosClient.delete(`chat-delete/${id}`)
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

    //get rating
    async getRating({commit}) {
        return await axiosClient.get('ratings')
        .then((response) => {
            commit('setRatings', response.data.ratings);
            return response.data.ratings;
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

    async createComment({commit}, ratingdata) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post('ratings', ratingdata)
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
     
    //start convo
    async startChatWithShop ({ commit }, id) {
        commit('toggleLoader', true, { root: true });
        try {
            const response = await axiosClient.post(`chat-sessions/${id}`, { id });
            commit('toggleLoader', false, { root: true });
            // ✅ Set initial messages (if returned)
            commit('setMessages', response.data.data.messages);
            // ✅ Show toast
            setTimeout(() => { commit('showToast', { showToast: true, toastMessage: response.data.message,  toastType: 'success'}, { root: true });}, toastDelay);
            setTimeout(() => {commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });}, toastDuration);
        
            return response.data; // This allows your component to act on success

            } catch (error) {
                commit('toggleLoader', false, { root: true });
            
                if (error.response && error.response.data) {
                const errorMessage = error.response.data.message;
            
                setTimeout(() => { commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error' }, { root: true });}, toastDelay);
                setTimeout(() => { commit('showToast', { showToast: false, toastMessage: '', toastType: 'default' }, { root: true });}, toastDuration);}
            }
    },

    
/******************************************************************
 API FOR ADDRESS
******************************************************************/

    //get address list
    async getAddressList({commit}) {
        return await axiosClient.get('billing-address/get')
        .then((response) => {
           commit('setAddressList', [response.data.billing_address]);
            return response.data.billing_address;
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

    //Add address
    async createAddress({commit}, addressData) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post('billing-address/add', addressData)
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
      
    //Update address   
    async updateAddress({commit}, updateAddress) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post(`billing-address/edit/${updateAddress.id}`, updateAddress)
        .then((response) => {
            commit('toggleLoader', false, { root: true })
            commit('setUpdateAddress', response.data.billing_address);
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

    //Delete address
    async deleteAddress({commit}, deleteAddressData) {
        return await axiosClient.post(`billing-address/remove/${deleteAddressData}`)
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
API FOR Ratings
******************************************************************/
    // get rating list
    async getRating({ commit }, productId) {
        try {
            const response = await axiosClient.get(`products/${productId}/ratings`);
            commit('setProductRatings', { productId, ratingsData: response.data });
            return response.data;
        } catch (error) {
            commit('toggleLoader', false, { root: true });
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.message || 'Failed to fetch ratings';
                setTimeout(() => {
                    commit('showToast', { showToast: true, toastMessage: errorMessage,  toastType: 'error', }, { root: true });
                }, 500);
                setTimeout(() => {
                    commit('showToast', { showToast: false, toastMessage: '', toastType: 'default', }, { root: true });
                }, 3000);
            }
            throw error;
        }
    },

    //get product ratings
    async getProductRatings({ commit }, productId) {
        try {
            const response = await axiosClient.get(`products/${productId}/ratings`);
            commit('setProductRatings', { productId, ratingsData: response.data });
            return response.data;
        } catch (error) {
            commit('toggleLoader', false, { root: true });
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.message || 'Failed to fetch ratings';
                setTimeout(() => {
                    commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error', }, { root: true });
                }, 500);
                setTimeout(() => {
                    commit('showToast', {  showToast: false, toastMessage: '', toastType: 'default',}, { root: true });
                }, 3000);
            }
            throw error;
        }
    },

    //create comment
    async createComment({ commit }, payload) {
        try {
            const response = await axiosClient.post(`products/${payload.product_id}/ratings`, {
                rating: payload.rating,
                comment: payload.comment,
            });
            commit('toggleLoader', false, { root: true });
            commit('showToast', { showToast: true, toastMessage: 'Comment added successfully!', toastType: 'success',
            }, { root: true });
            setTimeout(() => {
                commit('showToast', { showToast: false, toastMessage: '', toastType: 'default',
                }, { root: true });
            }, 3000);
            return response.data;
        } catch (error) {
            commit('toggleLoader', false, { root: true });
            const errorMessage = error.response?.data?.message || 'Failed to add comment';
            commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error', }, { root: true });
            throw error;
        }
    },
/******************************************************************
API FOR UPLOADING PROFILE
******************************************************************/
    async addImage({commit}, imageData) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post('avatar', imageData)
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

    async getFarmerInfoList({commit}, productId) {
        commit('toggleLoader', true, { root: true })
        return await axiosClient.post(`product/shop/${productId}`, productId)
        .then((response) => {
            commit('toggleLoader', false, { root: true });
            commit('setFarmerListInfo', response.data.seller.products);
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

    // async getFarmerInfoList({commit}) {
    //     return await axiosClient.post('product/account')
    //     .then((response) => {
    //         commit('setFarmerInfo', response.data.products);
    //         return response.data.products;
    //     })
    //     .catch((error) => {
    //         commit('toggleLoader', false, { root: true })
    //         if(error.response && error.response.data) {
    //             const errorMessage = error.response.data.message;
    //             setTimeout(() => {
    //                 commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error'}, { root: true });
    //             }, toastDelay);

    //             setTimeout(() => {
    //                 commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
    //             }, toastDuration);
    //         }   
    //     })
    // },


}