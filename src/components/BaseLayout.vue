<template>  
    <div class="flex h-screen">
        <!-- Navbar -->
    
            <UserDashBoard_Navbar v-if="role === 'User'"/>
            <Administrator_Navbar v-if="role === 'Admin'"/>
        

        <!-- Main Content -->
        <div class="flex-1">
            <router-view :key="$route.path"></router-view>
        </div>
    </div>
</template>

<script setup>
import UserDashBoard_Navbar from '@/components/Navbar/UserDashBoard_Navbar.vue';
import Administrator_Navbar from '@/components/Navbar/Administrator_Navbar.vue';
import { useStore } from 'vuex';

const store = useStore();
const role = store.state.userData.data.role;
</script>
