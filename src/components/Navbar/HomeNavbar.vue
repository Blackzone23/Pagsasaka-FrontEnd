<template>
       <nav class="bg-[#608C54] text-white">
            <div class="container mx-auto flex justify-between items-center px-2 py-1">
                <!-- Logo -->
                <div>
                    <a href="/" class="flex items-center">
                        <img :src="Logo" alt="Logo" class="2xl:h-20 2xs:h-14">
                    </a>
                </div>
             
                <!-- Hamburger Icon -->
                <button @click="isMenuOpen = !isMenuOpen" class="md:hidden flex items-center focus:outline-none">
                    <Icon icon="material-symbols:menu-rounded" width="30" height="30" />
                </button>

                <!-- Menu -->
                <div :class="['md:flex md:items-center md:space-x-10 font-bold transition-all duration-300', isMenuOpen ? 'block' : 'hidden',]" class="absolute md:static top-16 left-0 w-full md:w-auto bg-[#608C54] md:bg-transparent md:space-y-0 space-y-3 md:px-0 px-4 z-10">
                    <router-link :to="{ name: 'Home' }"  class="hover:text-gray-300 block md:inline" active-class="text-gray-400">
                    Home
                    </router-link>
                    <router-link :to="{ name: 'About' }" target="_blank" class="hover:text-gray-300 block md:inline" active-class="text-gray-400">
                    About
                    </router-link>
                    <router-link :to="{ name: 'Market' }"  class="hover:text-gray-300 block md:inline" active-class="text-gray-400">
                    Market
                    </router-link>
                </div>
            </div>
        </nav>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Logo from '@/assets/Logo.png';

const store = useStore();
const router = useRouter();

const isMenuOpen = ref(false);
</script>