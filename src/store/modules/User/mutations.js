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

    setPaymentListData: (state, payment) => {
        state.payment.data = payment;
    },  

    setSlotListData: (state, slot) => {
        state.slot.data = slot;
    },  

    setExportListData: (state, history) => {
        state.history.data = history;
    },  

    setPrintListData: (state, print) => {
        state.print.data = print;
    },  

    
    setDashboardListData: (state, allProduct) => {
        state.allProduct.data = allProduct;
    }, 

    // setConversation: (state, conversation) => {
    //     state.conversation.data = conversation;
    // },  
}