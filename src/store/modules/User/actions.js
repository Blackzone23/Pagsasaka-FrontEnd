import axiosClient from '@/axios/axios';

// Define toast timing constants at the top of the file
const toastDuration = 3000; // 3 seconds
const toastDelay = 0; // No delay

export default {
  /******************************************************************
   API FOR PRODUCT
  ******************************************************************/

  // API for Create Product
  async createProduct({ commit }, productdata) {
    commit('toggleLoader', true, { root: true });
    return await axiosClient.post('product/add', productdata)
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
        throw error;
      });
  },

  // API for category dropdown
  async getCategoryDropdown({ commit }) {
    return await axiosClient.get('dropdown/category')
      .then((response) => {
        commit('setCategoryDropdown', response.data.category);
        return response.data.category;
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

  // API Farmer Product list
  async getProductList({ commit }, { currentPage, search }) {
    commit('toggleLoader', true, { root: true });
    return await axiosClient.post('product/account', { search, page: currentPage })
      .then((response) => {
        commit('toggleLoader', false, { root: true });
        commit('setProductListData', response.data.products);
        commit('setCurrentPage', response.data.pagination.current_page, { root: true });
        commit('setItemsPerPage', response.data.pagination.per_page, { root: true });
        commit('setTotalPages', response.data.pagination.last_page, { root: true });
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

  // API for updating product
  async updateProduct({ commit }, updatedProduct) {
    commit('toggleLoader', true, { root: true });
    return await axiosClient.post(`product/edit/${updatedProduct.id}`, updatedProduct)
      .then((response) => {
        commit('toggleLoader', false, { root: true });
        commit('setUpdateData', response.data.product);
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
  },

  // API for delete product
  async deleteProduct({ commit }, deleteProductData) {
    return await axiosClient.post(`product/delete/${deleteProductData}`)
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
        throw error;
      });
  },

  /******************************************************************
   API FOR SHIPMENT
  ******************************************************************/

  // API for get order list
  async getOrderList({ commit }) {
    return await axiosClient.get('getOrders')
      .then((response) => {
        commit('setShipmentListData', response.data.orders.data);
        return response.data.orders.data;
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

  // API for get cancellation list
  async getCancelList({ commit }) {
    return await axiosClient.get('cancelled-sa-seller')
      .then((response) => {
        commit('setCancelListData', response.data.orders.data);
        return response.data.orders.data;
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

  // API for get refund/return list
  async getRefundList({ commit }) {
    return await axiosClient.get('refund-farmer')
      .then((response) => {
        commit('setRefundListData', response.data.orders.data);
        return response.data.orders.data;
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

  // API Update status
  async updateStatus({ commit }, statusData) {
    commit('toggleLoader', true, { root: true });
    return await axiosClient.post(`updateOrderStatus/${statusData.id}`, statusData)
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
        throw error;
      });
  },

  // API for get delivery proof
  async getImage({ commit }, orderId) {
    commit('toggleLoader', true, { root: true });
    return await axiosClient.get(`get-delivery-proof/${orderId}`)
      .then((response) => {
        commit('toggleLoader', false, { root: true });
        commit('setImage', response.data);
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
  },

//   async getPrintList({commit}, productId) {
//         commit('toggleLoader', true, { root: true })
//         return await axiosClient.get(`orders-details/${productId}`, productId)
//         .then((response) => {
//             commit('toggleLoader', false, { root: true });
//             commit('setPrintListData', response.data.data);
//             setTimeout(() => {
//                 commit('showToast', { showToast: true, toastMessage: response.data.message, toastType: 'success'}, { root: true });
//             }, toastDelay);

//             setTimeout(() => {
//                 commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
//             }, toastDuration);

//             return response.data;
//         })
//         .catch((error) => {
//             commit('toggleLoader', false, { root: true })
//             if(error.response && error.response.data) {
//                 const errorMessage = error.response.data.message;
//                 setTimeout(() => {
//                     commit('showToast', { showToast: true, toastMessage: errorMessage, toastType: 'error'}, { root: true });
//                 }, toastDelay);

//                 setTimeout(() => {
//                     commit('showToast', { showToast: false, toastMessage: '', toastType: 'default'}, { root: true });
//                 }, toastDuration);
//             }   
//         })
//   },


async getPrintList({ commit }) {
    return await axiosClient.get('Orders-details')
      .then((response) => {
        commit('setPrintListData', response.data);
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

  /******************************************************************
   API FOR PAYMENT
  ******************************************************************/

  // Get payment
  async getPayMent({ commit }) {
    return await axiosClient.get('payment-history')
      .then((response) => {
        commit('setPaymentListData', response.data.transactions);
        return response.data.transactions;
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

  // Get available payout slots
  async getSlots({ commit }, { date }) {
    try {
      commit('toggleLoader', true, { root: true });
      const response = await axiosClient.get('available-slots', { params: { date } });
      commit('setSlotListData', response.data.available_slots);
      return response.data.available_slots;
    } catch (error) {
      commit('toggleLoader', false, { root: true });
      let errorMessage = 'Failed to fetch available slots';
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage;
      }
      setTimeout(() => {
        commit('showToast', {
          showToast: true,
          toastMessage: errorMessage,
          toastType: 'error',
        }, { root: true });
      }, toastDelay);
      setTimeout(() => {
        commit('showToast', {
          showToast: false,
          toastMessage: '',
          toastType: 'default',
        }, { root: true });
      }, toastDuration);
      throw error;
    } finally {
      commit('toggleLoader', false, { root: true });
    }
  },

  // Export payment history to CSV
  async getCSV({ commit }) {
    try {
      commit('toggleLoader', true, { root: true });
      const response = await axiosClient.get('export-payment-history', {
        responseType: 'blob' // Important for handling file downloads
      });

      // Check if the response is a JSON error
      const text = await response.data.text();
      try {
        const jsonResponse = JSON.parse(text);
        if (!jsonResponse.isSuccess) {
          commit('toggleLoader', false, { root: true });
          setTimeout(() => {
            commit('showToast', {
              showToast: true,
              toastMessage: jsonResponse.message || 'Failed to export CSV',
              toastType: 'error'
            }, { root: true });
          }, toastDelay);

          setTimeout(() => {
            commit('showToast', {
              showToast: false,
              toastMessage: '',
              toastType: 'default'
            }, { root: true });
          }, toastDuration);

          throw new Error(jsonResponse.message || 'Failed to export CSV');
        }
      } catch (e) {
        // Not a JSON response, so it's the CSV file
        commit('toggleLoader', false, { root: true });
        return new Blob([text], { type: 'text/csv;charset=utf-8' });
      }
    } catch (error) {
      commit('toggleLoader', false, { root: true });

      let errorMessage = 'Failed to export CSV';
      if (error.response) {
        if (error.response.status === 401) {
          errorMessage = 'Authentication required. Please log in.';
        } else if (error.response.data) {
          try {
            const text = await error.response.data.text();
            const jsonResponse = JSON.parse(text);
            errorMessage = jsonResponse.message || errorMessage;
          } catch (e) {
            // Not a JSON response, use default error message
          }
        }
      } else if (error.message) {
        errorMessage = error.message;
      }

      setTimeout(() => {
        commit('showToast', {
          showToast: true,
          toastMessage: errorMessage,
          toastType: 'error'
        }, { root: true });
      }, toastDelay);

      setTimeout(() => {
        commit('showToast', {
          showToast: false,
          toastMessage: '',
          toastType: 'default'
        }, { root: true });
      }, toastDuration);

      throw new Error(errorMessage); // Re-throw for the component to handle
    }
  },


  // Check payout eligibility
  async checkPayoutEligibility({ commit }) {
    try {
      commit('toggleLoader', true, { root: true });
      const response = await axiosClient.get('payout-eligibility');
      commit('setPayoutEligibility', response.data.eligible);
      return response.data;
    } catch (error) {
      commit('toggleLoader', false, { root: true });
      let errorMessage = 'Failed to check payout eligibility';
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage;
      }
      setTimeout(() => {
        commit('showToast', {
          showToast: true,
          toastMessage: errorMessage,
          toastType: 'error',
        }, { root: true });
      }, toastDelay);
      setTimeout(() => {
        commit('showToast', {
          showToast: false,
          toastMessage: '',
          toastType: 'default',
        }, { root: true });
      }, toastDuration);
      throw error;
    } finally {
      commit('toggleLoader', false, { root: true });
    }
  },


  // Request a payout
  async requestPayout({ commit }, payoutData) {
    try {
      commit('toggleLoader', true, { root: true });
      const response = await axiosClient.post('request-payout', payoutData);
      setTimeout(() => {
        commit('showToast', {
          showToast: true,
          toastMessage: response.data.message || 'Payout request submitted successfully',
          toastType: 'success',
        }, { root: true });
      }, toastDelay);
      setTimeout(() => {
        commit('showToast', {
          showToast: false,
          toastMessage: '',
          toastType: 'default',
        }, { root: true });
      }, toastDuration);
      return response.data;
    } catch (error) {
      commit('toggleLoader', false, { root: true });
      let errorMessage = 'Failed to request payout';
      if (error.response && error.response.data) {
        errorMessage = error.response.data.message || errorMessage;
      }
      setTimeout(() => {
        commit('showToast', {
          showToast: true,
          toastMessage: errorMessage,
          toastType: 'error',
        }, { root: true });
      }, toastDelay);
      setTimeout(() => {
        commit('showToast', {
          showToast: false,
          toastMessage: '',
          toastType: 'default',
        }, { root: true });
      }, toastDuration);
      throw error;
    } finally {
      commit('toggleLoader', false, { root: true });
    }
  },


};