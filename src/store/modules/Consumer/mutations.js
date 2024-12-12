export default {
    
    setViewListData: (state, productItem) => {
        state.productItem.data = productItem;
    },

    setGetViewList: (state, productItemInfo) => {
        state.productItem.productItemInfo = productItemInfo;
    },

   
}