<template>
    <div class="bg-[#608C54] text-white p-2">
        <!-- Outer Flex Container to Distribute Space Between Left and Right Sections -->
        <div class="flex justify-between items-center text-xs">
            
            <!-- Left Section: Logo and Links -->
            <div class="flex items-center space-x-4">
                <a href="/about" class="hover:underline">About</a>
                <a href="#" class="hover:underline">Farming Seller</a>
                <span>|</span>
                <span>Follow us on</span>
                <a href="#" class="hover:underline">
                    <Icon icon="ic:twotone-facebook" width="20" height="20" style="color: white" />
                </a>
                <a href="#" class="hover:underline">
                    <Icon icon="mage:instagram-circle" width="20" height="20" style="color: white" />
                </a>
            </div>

            <!-- Right Section: Notifications and Other Links -->
            <div class="flex items-center space-x-4 mr-10">
                <a href="#" class="hover:underline">
                    <i class="fas fa-bell"></i> Notifications
                </a>
                <a href="#" class="hover:underline">
                    <i class="fas fa-question-circle"></i> Help
                </a>
                <a href="/signup" class="hover:underline">Sign up</a>
                <a href="/login" class="hover:underline">Login</a>
            </div> 
        </div>
        <div class="flex items-center justify-center mt-2 space-y-2">
        <!-- Logo -->
        <div class="text-2xl font-bold">
            <img :src="Logo" alt="Logo" class="h-24">
            <!-- <a href="/" class="text-white">Your Logo</a> -->
        </div>

        <!-- Search Bar with Cart -->
        <div class="flex items-center space-x-2">
            <!-- Search Bar -->
           <BaseSearchField placeholder="Search..."></BaseSearchField>
            
            <!-- Cart Icon -->
            <a href="#" class="text-white hover:underline">
                <Icon icon="bx:cart" width="35" height="35"  style="color: white" />
            </a>
        </div>
    </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Logo from '@/assets/Logo.png';
import BaseSearchField from '../Input-Fields/BaseSearchField.vue';


const store = useStore();
const router = useRouter();

</script>