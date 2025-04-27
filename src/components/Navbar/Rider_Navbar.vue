<template>
    <div class="relative">
        <!-- Drawer Toggle Button for Small Screens (2xl and below) -->
        <button class="absolute top-0 2xs:top-2 text-white p-2 rounded-md z-50" @click="isOpen = !isOpen"> 
            <Icon icon="material-symbols:menu" width="32" height="32" />
        </button>

        <!-- Sidebar / Drawer -->
        <div  
            class="h-[900px] w-64 bg-[#285a19]  fixed 2xl:relative z-50 transition-transform duration-300 ease-in-out transform"
            :class="{
                '-translate-x-full pointer-events-none': !isOpen && windowWidth < 1536, 
                'translate-x-0': isOpen, 
                '2xl:translate-x-0 2xl:pointer-events-auto': true
            }"
        >
            <nav class="p-5">
                <!-- Logo -->
                <div class="flex justify-center">
                    <img :src="Logo" alt="Logo" class="2xl:h-28 2xs:h-28 w-58">  
                </div>

                <!-- Navigation Links -->
                <div class="space-y-10 flex flex-col items-start text-lg font-semibold text-white ml-10 mt-10">
                    <div class="flex items-center space-x-2">
                        <Icon icon="material-symbols:dashboard" width="24" height="24" style="color: white" />
                        <router-link :to="{ name: 'Rider_Dashboard' }" active-class="text-gray-400" class="hover:text-gray-400">Dashboard</router-link>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Icon icon="ep:list" width="24" height="24" style="color: white" />
                        <router-link :to="{ name: 'Rider_ProductList' }" active-class="text-gray-400" class="hover:text-gray-400">Order List</router-link>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Overlay when Sidebar is Open -->
        <div 
            v-if="isOpen && windowWidth < 1536"
            class="fixed inset-0 bg-black bg-opacity-50 2xl:hidden z-40"
            @click="isOpen = false">
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Logo from '@/assets/Logo.png';
import { Icon } from "@iconify/vue";

const isOpen = ref(false);
const windowWidth = ref(window.innerWidth);

// Update window width on resize
const updateWidth = () => {
    windowWidth.value = window.innerWidth;
};

// Attach and detach event listeners
onMounted(() => {
    window.addEventListener("resize", updateWidth);
});
onUnmounted(() => {
    window.removeEventListener("resize", updateWidth);
});
</script>
