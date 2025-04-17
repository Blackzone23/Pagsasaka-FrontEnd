export default {

    //ADVERTISE PRODUCT LIST
    setViewListData: (state, productItem) => {
        state.productItem.data = productItem;
    },

    //PRODUCT LIST INFO
    setGetViewList: (state, productItemInfo) => {
        state.productItem.productItemInfo = productItemInfo;
    },

    //MORE PRODUCTS
    setGetMoreList: (state, moreProduct) => {
        state.moreProduct.data = moreProduct;
    },

    //LIST OF PRODUCT IN CART
    setCartList: (state, cartItem) => {
        state.cartItem.data = cartItem;
    },

     //LIST OF PRODUCT IN CART
     setCheckout: (state, checkout) => {
        state.checkout.data = checkout;
    },

    
    setConversation: (state, conversation) => {
        state.conversation.data = conversation;
    },
    
    setMessages: (state, messages) => {
        state.message.data = messages;  // Update messages list
    },
   
    setRatings: (state, ratings) => {
        state.ratings.data = ratings;
    },  

    setAddressList: (state, address) => {
        state.address.data = address;
    },  

    setUpdateAddress: (state, updateAddress) => {
        state.updateAddress.data = updateAddress;
    },

    
}