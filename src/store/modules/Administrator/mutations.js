export default {
    setRiderList: (state, rider) => {
        state.rider.data = rider.data;
    },
    setPaymentList(state, payments) {
        state.payments = payments;
    },

    setApproveList(state, approve) {
        state.approve = approve;
    },

    setRemitList(state, remit) {
        state.remit = remit;
    },

    setPeopleList(state, people) {
        state.people = people;
    },

    removePayment(state, paymentId) {
        state.paymentList = state.paymentList.filter(payment => payment.id !== paymentId);
    },
}   