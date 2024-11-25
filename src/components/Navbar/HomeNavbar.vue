<template>
     <nav class="bg-[#608C54] text-white">
            <div class="container mx-auto flex items-center">
                    <!-- Logo -->
                    <div> <img :src="Logo" alt="Logo" class="h-20"></div>
                
                    <!-- Menu -->
                    <div class="space-x-10 font-bold px-5   ">   
                        <router-link :to="{name: 'Home'}" class="hover:text-gray-300 " active-class="text-gray-400">Home</router-link>  
                        <router-link :to="{name: 'About'}"  class="hover:text-gray-300 " active-class="text-gray-400">About</router-link>
                        <router-link :to="{name: 'Market'}"  class="hover:text-gray-300 " active-class="text-gray-400">Market</router-link>
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

</script>