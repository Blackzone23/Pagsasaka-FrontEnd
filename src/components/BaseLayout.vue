<template>  
    <div class="flex h-screen">
        <!-- Navbar -->
    
            <UserDashBoard_Navbar v-if="role_name === 'Farmer'"/>
            <Administrator_Navbar v-if="role_name === 'Admin'"/>
            <Rider_Navbar v-if="role_name === 'Rider'"/>
            
        

        <!-- Main Content -->
        <div class="flex-1">
            <router-view :key="$route.path"></router-view>
        </div>
    </div>
</template>

<script setup>
import UserDashBoard_Navbar from '@/components/Navbar/UserDashBoard_Navbar.vue';
import Administrator_Navbar from '@/components/Navbar/Administrator_Navbar.vue';
import Rider_Navbar from './Navbar/Rider_Navbar.vue';
import { useStore } from 'vuex';

const store = useStore();
const role_name = store.state.userData.data.role_name;
</script>
