import { createStore } from 'vuex';
import state from './state';
import mutations from './mutations';
import actions from './actions';

import Administrator from './modules/Administrator';
import User from './modules/User';
import Consumer from './modules/Consumer';
import Rider from './modules/Rider';


import { encryptData } from '@/components/composable/CryptoUtility';

const store = createStore({
    state,
    mutations,
    actions,
    modules: {
        Administrator,
        User,
        Consumer,
        Rider
       
    }
})

store.subscribe((mutation, state) => {
    /*********************************************************************
    USER
    *********************************************************************/
    if (mutation.type === 'setUserData') {
        const encryptedUserData = encryptData(JSON.stringify(state.userData));
        sessionStorage.setItem('USER', encryptedUserData);
    }
    });
    export default store