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
        // sessionStorage.setItem('USER', encryptData(JSON.stringify(userData)));
        // state.isLoggedIn = true;
        // state.userProfilePic = userData.profilePic; // Set profile pic if available
        // state.userName = userData.name; // Set user name if available
    },

    setLogout: (state) => {
        state.userData.data = [];
        sessionStorage.removeItem('USER')
        // state.isLoggedIn = false;
        // state.userProfilePic = '';
        // state.userName = '';
    },

    
     setSignData: (state, signup) => {
        state.signup.data = signup;
    },

    // DIVISION DROPDOWN LIST FOR SUPERVISOR
    setRoleDropdown: (state, roleDropdown) => {
        state.roleDropdown.data = roleDropdown;
    },

    setSecurityQuestionDropdown: (state, securityDropdown) => {
        state.securityDropdown.data = securityDropdown;
    },


}