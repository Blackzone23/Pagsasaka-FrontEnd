export default {
    // ADVERTISE PRODUCT LIST
    setViewListData: (state, productItem) => {
        state.productItem.data = productItem;
    },

    // PRODUCT LIST INFO
    setGetViewList: (state, productItemInfo) => {
        state.productItem.productItemInfo = productItemInfo;
    },

    // MORE PRODUCTS
    setGetMoreList: (state, moreProduct) => {
        state.moreProduct.data = moreProduct;
    },

    // LIST OF PRODUCT IN CART
    setCartList: (state, cartItem) => {
        state.cartItem.data = cartItem;
    },

    // LIST OF PRODUCT IN CHECKOUT
    setCheckout: (state, checkout) => {
        state.checkout.data = checkout;
    },

    // CHECKOUT STATE MANAGEMENT
    SET_CHECKOUT_LOADING: (state, loading) => {
        state.checkout.loading = loading;
    },

    SET_CHECKOUT_SUCCESS: (state, success) => {
        state.checkout.success = success;
        state.checkout.error = null;
    },

    SET_CHECKOUT_ERROR: (state, error) => {
        state.checkout.error = error;
        state.checkout.success = null;
    },

    // CONVERSATION AND MESSAGES
    setConversation: (state, conversation) => {
        state.conversation.data = conversation;
    },

    setMessages: (state, messages) => {
        state.message.data = messages;
    },

    // RATINGS AND ADDRESS
    setRatings: (state, ratings) => {
        state.ratings.data = ratings;
    },

    setAddressList: (state, address) => {
        state.address.data = address;
    },
    setPurchaseList: (state, purchase) => {
        state.purchase.data = purchase;
    },

    setUpdateAddress: (state, updateAddress) => {
        state.updateAddress.data = updateAddress;
    },

    // TOAST NOTIFICATIONS
    showToast: (state, { showToast, toastMessage, toastType }) => {
        state.toast.showToast = showToast;
        state.toast.toastMessage = toastMessage;
        state.toast.toastType = toastType;
    },
};