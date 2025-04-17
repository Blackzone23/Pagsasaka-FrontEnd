export default {
    //PRODUCT
    setCategoryDropdown: (state, categoryDropdown) => {
        state.categoryDropdown.data = categoryDropdown;
    },
    setProductListData: (state, product) => {
        state.product.data = product;
    },
    setUpdateData: (state, updateData) => {
        state.updateData.data = updateData;
    },

    //SHIPMENT
    setShipmentListData: (state, order) => {
        state.order.data = order;
    },
    setCancelListData: (state, cancel) => {
        state.cancel.data = cancel;
    },
    setRefundListData: (state, refund) => {
        state.refund.data = refund;
    },  
    
    setImage: (state, image) => {
        state.order.image = image; // Directly assign the API response to `image`
    },

    // setConversation: (state, conversation) => {
    //     state.conversation.data = conversation;
    // },  
}