export default {
    toggleLoader: (state, value) => {
        state.showLoading.state = value;
    },

    showToast: (state, { showToast, toastMessage, toastType }) => {
        state.toast.showToast = showToast;
        state.toast.toastMessage = toastMessage;
        state.toast.toastType = toastType;
    },

    setUserData: (state, userData) => {
        state.userData.data = userData;
    },

    // setLogout: (state) => {
    //     state.userData.data = [];
    //     sessionStorage.removeItem('USER')
    // },
}