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

    purchase: {
        data: [],
    },

    toShip: {
        data: [],
    },

    toReceive: {
        data: [],
    },

    toComplete: {
        data: [],
    },

    toCancel: {
        data: [],
    },

    toRefund: {
        data: [],
    },

    reason: {
        data: [],
    },

    cancelOrder: {
        data: [],
    },


    updateAddress: {
        data: [],
    },

    farmerInfo: {
        data: [],
    },

    quantity: {
        data:[],
    },
    

    // productItemInfo: {
    //     data: [],
    //     farmerInfo: [],
    // },

    toast: { // Add toast state
        showToast: false,
        toastMessage: '',
        toastType: 'default',
    },

    namespaced: true,
    state: {
        productRatings: {}, // Store ratings by product ID
        conversation: { data: [] },
        message: { data: [] },
        productItem: { data: [] },
        moreProduct: { data: [] },
    },
     
    conversation: { data: [] },
    message: { data: [] },
    productItem: { data: [] },
    moreProduct: { data: [] },
    productRatings: {}, // Add this

    conversations: [],
        selectedConversation: null,
        messages: [],
        isLoading: false,
        error: null,
        isShopChatModalOpen: false,
        currentChatSession: null,
    
};