<template>
    <div class="h-full w-64 bg-[#608C54]">
        <nav>
            <div> <img :src="Logo" alt="Logo" class="h-32 w-58"></div>

            <div class="space-y-10 flex flex-col items-start text-lg font-semibold text-white ml-10 mt-10">
                <!-- Dashboard Link with Icon -->
                <div class="flex items-center space-x-2 ">
                    <Icon icon="material-symbols:dashboard" width="24" height="24" style="color: white" />
                    <router-link :to="{name: 'Rider_Dashboard'}" active-class="text-gray-400" class="hover:text-gray-400">Dashboard</router-link>
                </div>
                <div class="flex items-center space-x-2 ">
                    <Icon icon="ep:list" width="24" height="24"  style="color: #fff" />
                    <router-link :to="{name: 'ProductList'}" active-class="text-gray-400" class="hover:text-gray-400">Order List</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import Logo from '@/assets/Logo.png';
</script>