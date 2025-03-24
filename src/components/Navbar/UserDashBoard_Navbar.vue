<template>
    <div class="relative">
        <!-- Drawer Toggle Button for Small Screens (2xl and below) -->
        <button class="absolute top-1   text-white p-2 rounded-md z-50"  
            @click="isOpen = !isOpen"> 
            <Icon icon="material-symbols:menu" width="32" height="32" />
        </button>

        <!-- Sidebar / Drawer -->
        <div  
            class="h-full w-64 bg-[#608C54] fixed 2xl:relative z-50 transition-transform duration-300 ease-in-out transform" 
            :class="{'-translate-x-full pointer-events-none': !isOpen, 'translate-x-0': isOpen, '2xl:translate-x-0': true}" 
        >
            <nav class="p-5">
                <!-- Logo -->
                <div class="flex justify-center">
                    <img :src="Logo" alt="Logo" class="2xl:h-32 2xs:h-28 w-58">  
                </div>

                <!-- Navigation Links -->
                <div class="space-y-10 flex flex-col items-start text-lg font-semibold text-white ml-10 mt-10">
                    <div class="flex items-center space-x-2">
                        <Icon icon="material-symbols:dashboard" width="24" height="24" style="color: white" />
                        <router-link :to="{ name: 'Farmer_Dashboard' }" active-class="text-gray-400" class="hover:text-gray-400">Dashboard</router-link>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Icon icon="icon-park-outline:ad-product" width="24" height="24" style="color: white" />
                        <router-link :to="{ name: 'Product' }" active-class="text-gray-400" class="hover:text-gray-400">Product</router-link>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Icon icon="mage:delivery-truck-fill" width="24" height="24" style="color: white" />
                        <router-link :to="{ name: 'Shipment' }" active-class="text-gray-400" class="hover:text-gray-400">Shipment</router-link>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Icon icon="fluent:payment-20-filled" width="24" height="24" style="color: white" />
                        <router-link :to="{ name: 'Payments' }" active-class="text-gray-400" class="hover:text-gray-400">Payments</router-link>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Icon icon="icon-park-outline:transaction-order" width="24" height="24" style="color: white" />
                        <router-link :to="{ name: 'Order' }" active-class="text-gray-400" class="hover:text-gray-400">Order</router-link>
                    </div>
                    <div class="flex items-center space-x-2">
                        <Icon icon="ic:twotone-archive" width="24" height="24" style="color: white" />
                        <router-link :to="{ name: 'Archive' }" active-class="text-gray-400" class="hover:text-gray-400">Archive</router-link>
                    </div>
                </div>
            </nav>
        </div>

        <!-- Overlay when Sidebar is Open -->
        <div 
            v-if="isOpen"
            class="fixed inset-0 bg-black bg-opacity-50 2xl:hidden z-40"
            @click="isOpen = false">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Logo from '@/assets/Logo.png';
import { Icon } from "@iconify/vue";

const isOpen = ref(false);
</script>
