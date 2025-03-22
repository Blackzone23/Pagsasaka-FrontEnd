export default {
    
    setViewListData: (state, productItem) => {
        state.productItem.data = productItem;
    },

    setGetViewList: (state, productItemInfo) => {
        state.productItem.productItemInfo = productItemInfo;
    },

    setGetMoreList: (state, moreProduct) => {
        state.moreProduct.data = moreProduct;
    },

    setCarListt: (state, cartItem) => {
        state.cartItem.data = cartItem;
    },

    // setAddList: (state, addItem) => {
    //     state.addItem.data = addItem;
    // },
   
}