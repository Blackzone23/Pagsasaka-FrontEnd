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
    setCarListt: (state, cartItem) => {
        state.cartItem.data = cartItem;
    },

   
}