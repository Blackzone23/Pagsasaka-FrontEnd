<template>
    <div class="w-64 bg-[#608C54]">
        <nav>
            <div> <img :src="Logo" alt="Logo" class="h-32 w-58"></div>

            <div class="space-y-10 flex flex-col items-start text-lg font-semibold text-white ml-10 mt-10">
                <!-- Dashboard Link with Icon -->
                <div class="flex items-center space-x-2 ">
                    <Icon icon="material-symbols:dashboard" width="24" height="24" style="color: white" />
                    <router-link :to="{name: 'Administrator_Dashboard'}" active-class="text-gray-400" class="hover:text-gray-400">Dashboard</router-link>
                </div>
                <div  class="flex items-center space-x-2">
                    <Icon icon="icon-park-outline:ad-product" width="24" height="24"  style="color: white" />
                    <router-link :to="{name: 'Administrator_Product'}" active-class="text-gray-400" class="hover:text-gray-400">Product</router-link>
                </div>
                <div  class="flex items-center space-x-2">
                    <Icon icon="mage:delivery-truck-fill" width="24" height="24"  style="color: white" />
                    <router-link :to="{name: 'Administrator_Shipment'}" active-class="text-gray-400" class="hover:text-gray-400">Shipment</router-link>
                </div>
                <div  class="flex items-center space-x-2">
                    <Icon icon="fluent:payment-20-filled" width="24" height="24"  style="color: white" />
                    <router-link :to="{name: 'Administrator_Payment'}" active-class="text-gray-400" class="hover:text-gray-400">Payments</router-link>
                </div>
                <div  class="flex items-center space-x-2">
                    <Icon icon="icon-park-outline:transaction-order" width="24" height="24"  style="color: white" />
                    <router-link :to="{name: 'Administrator_Order'}" active-class="text-gray-400" class="hover:text-gray-400">Order</router-link>
                </div>
                <div  class="flex items-center space-x-2">
                    <Icon icon="ic:twotone-archive" width="24" height="24"  style="color: white" />
                    <router-link :to="{name: 'Administrator_Archive'}" active-class="text-gray-400" class="hover:text-gray-400">Archive</router-link>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup>
import Logo from '@/assets/Logo.png';
</script>