export default {
    toggleLoader: (state, value) => {
        state.showLoading.state = value;
    },

    setIsLoggedIn: (state, value) => {
        state.isLoggedIn.value = value;
    },

    showToast: (state, { showToast, toastMessage, toastType }) => {
        state.toast.showToast = showToast;
        state.toast.toastMessage = toastMessage;
        state.toast.toastType = toastType;
    },
    

    setUserData: (state, userData) => {
         // Log to check if data is valid
        state.userData.data = userData;
        state.userProfilePic = userData.profilePic || '';
    },

    setName: (state, name) => {
        state.userName = `${name.first_name} ${name.last_name}`;
        console.log('Updated user name:', state.userName);
        sessionStorage.setItem('userName', state.userName);
    },

    // LOG OUT
    setLogout: (state) => {
        state.userData.data = [];
        sessionStorage.removeItem('USER')
        sessionStorage.removeItem('isLoggedIn');
        state.userProfilePic = '';
        state.userName = '';
    },

    // SIGN UP
     setSignData: (state, signup) => {
        state.signup.data = signup;
    },

    // ROLE DROPDOWN
    setRoleDropdown: (state, roleDropdown) => {
        state.roleDropdown.data = roleDropdown;
    },


    // SECURITY QUESTION
    setSecurityQuestionDropdown: (state, securityDropdown) => {
        state.securityDropdown.data = securityDropdown;
    },
    
     //SEARCH LIST
     setSearchTerm: (state, searchTerm) => {
        state.searchTerm = searchTerm;
     },

     setCurrentPage(state, currentPage) {
        state.currentPage = currentPage;
    },

    setItemsPerPage(state, itemsPerPage) {
        state.itemsPerPage = itemsPerPage;
    },

    setTotalPages(state, totalPages) {
        state.totalPages = totalPages;
    },

}