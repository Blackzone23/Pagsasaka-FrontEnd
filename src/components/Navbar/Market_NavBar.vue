<template>
    <div class="bg-[#608C54] text-white p-2">
        <!-- Outer Flex Container to Distribute Space Between Left and Right Sections -->
        <div class="bg-[#608C54] text-white">
            <!-- Container -->
            <div class="container mx-auto flex justify-between items-center 2xl:text-sm 2xs:text-xs p-4">
            <!-- Left Section: Logo and Links -->
            <div class="flex items-center space-x-4">
                <a href="/about" class="hover:underline hidden md:inline">About</a>
                <span class="hidden md:inline">|</span>
                <span class="hidden md:inline">Follow us on</span>
                <a href="#" class="hidden md:inline">
                <Icon icon="ic:twotone-facebook" width="20" height="20" style="color: white" />
                </a>
                <a href="#" class="hidden md:inline">
                <Icon icon="mage:instagram-circle" width="20" height="20" style="color: white" />
                </a>
            </div>
    
            <!-- Burger Icon -->
            <button class="md:hidden" @click="isMenuOpen = !isMenuOpen" aria-label="Toggle Menu">
                <Icon icon="cil:hamburger-menu" width="24" height="24" style="color: white" />
            </button>
    
            <!-- Right Section: Notifications and Other Links -->
            <div class="hidden md:flex items-center space-x-4">
                <a href="#" class="hover:underline">
                <i class="fas fa-bell"></i> Notifications
                </a>
                <a href="#" class="hover:underline">
                <i class="fas fa-question-circle"></i> Help
                </a>
                <template v-if="!isLoggedIn">
                <a href="/signup" class="hover:underline">Sign up</a>
                <a href="/login" class="hover:underline">Login</a>
                </template>
                <template v-else>
                <a href="#" class="hover:underline" @click="logout">Logout</a>
                </template>
            </div>
            </div>
    
            <!-- Dropdown Menu -->
            <div
            v-if="isMenuOpen"
            class="bg-[#608C54] md:hidden flex flex-col space-y-3 px-4 py-2 text-sm"
            >
            <!-- Left Section Links -->
            <a href="/about" class="hover:underline">About</a>
            <a href="#" class="hover:underline">Farming Seller</a>
            <span>Follow us on:</span>
            <div class="flex space-x-3">
                <a href="#">
                <Icon icon="ic:twotone-facebook" width="20" height="20" style="color: white" />
                </a>
                <a href="#">
                <Icon icon="mage:instagram-circle" width="20" height="20" style="color: white" />
                </a>
            </div>
    
            <!-- Right Section Links -->
            <a href="#" class="hover:underline">
                <i class="fas fa-bell"></i> Notifications
            </a>
            <a href="#" class="hover:underline">
                <i class="fas fa-question-circle"></i> Help
            </a>
            <template v-if="!isLoggedIn">
                <a href="/signup" class="hover:underline">Sign up</a>
                <a href="/login" class="hover:underline">Login</a>
            </template>
            <template v-else>
                <a href="#" class="hover:underline" @click="logout">Logout</a>
            </template>
            </div>
        </div>
        <div class="flex items-center justify-center mt-2 space-y-2">
            <!-- Logo -->
            <div class="text-2xl font-bold">
            <a href="/market" class="flex items-center">
                <img :src="Logo" alt="Logo" class="2xl:h-20 2xs:h-14" />
            </a>
            </div>
    
            <!-- Search Bar with Cart -->
            <div class="flex items-center space-x-2">
            <!-- Search Bar -->
            <BaseSearchField placeholder="Search..."></BaseSearchField>
    
            <!-- Cart Icon -->
            <a href="#" class="text-white hover:underline">
                <Icon icon="bx:cart" width="35" height="35" style="color: white" />
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

// State for dropdown menu
const isMenuOpen = ref(false);

// Check if user is logged in (use Vuex store or other authentication method)
const isLoggedIn = ref(false); // Replace with actual logic to check login status

// Logout function
const logout = () => {
  // Handle logout logic here
  console.log('User logged out');
  isLoggedIn.value = false; // Update login state
};
</script>