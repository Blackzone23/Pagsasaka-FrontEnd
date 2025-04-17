export default {
    productItem: {
        data: [],
        productItemInfo: [],
    },

    moreProduct: {
        data: [],
    },

    cartItem: {
        data: [],
    },

    checkout: {
        data: [],
        loading: false, // Add loading state for checkout
        success: null,  // Add success state for checkout response
        error: null,    // Add error state for checkout errors
    },

    conversation: {
        data: [],
    },

    message: {
        data: [],
    },

    ratings: {
        data: [],
    },

    address: {
        data: [],
    },

    updateAddress: {
        data: [],
    },

    toast: { // Add toast state
        showToast: false,
        toastMessage: '',
        toastType: 'default',
    },
};