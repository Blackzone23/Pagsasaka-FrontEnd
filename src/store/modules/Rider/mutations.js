export default {
    
    //CLAIM PRODUCT
    setClaimedProductData: (state, productList) => {
        state.productList.data = productList;
    },

    // SIGN UP
    setRiderData: (state, riderSignup) => {
        state.riderSignup.data = riderSignup;
    },

    setIntransitList: (state, intransitList) => {
        state.intransitList.data = intransitList;
    },

}