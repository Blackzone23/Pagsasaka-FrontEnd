<template>  
    <!-- <HomeNavbar v-if="user_type === 'Home'"/>
    <SignUp_Navbar v-if="user_type === 'Sign-Up'"/> -->

    <div class=""> 
        <router-view :key="$route.path"></router-view>    
    </div>  
</template>

<script setup>
import { useStore } from 'vuex';
import HomeNavbar from '@/components/Navbar/HomeNavbar.vue';
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
const store = useStore();

const user_type = store.state.userData.data.user_type;
</script>