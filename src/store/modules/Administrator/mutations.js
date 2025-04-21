export default {
    setRiderList: (state, rider) => {
        state.rider.data = rider.data;
    },
    setPaymentList(state, payments) {
        state.paymentList = payments;
    },
    removePayment(state, paymentId) {
        state.paymentList = state.paymentList.filter(payment => payment.id !== paymentId);
    },
}   