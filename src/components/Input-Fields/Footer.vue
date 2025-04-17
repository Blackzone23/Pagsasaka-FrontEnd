<template>
    <footer class="bg-[#285a19] text-white py-8">
        <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left md:flex md:justify-between">
            <!-- Column 1: About Us -->
            <div class="md:w-1/3">
                <img :src="Logo" alt="Logo" class="h-20 mx-auto md:mx-0">
                <p class="text-sm mt-4">
                    Pagsasaka connects farmers with consumers for buying and selling fresh, local produce, supporting sustainable agriculture.
                </p>
                <div class="flex justify-center md:justify-start gap-4 mt-4">
                    <Icon icon="ic:twotone-facebook" width="24" height="24" />
                    <Icon icon="mage:instagram-circle" width="24" height="24" />
                </div>
            </div>

            <!-- Column 2: Quick Links (Forced to Left Side) -->
            <div class="md:w-1/3 order-1 md:order-none">
                <h3 class="font-bold items-center justify-center 2xl:text-lg md:text-sm mb-4">Quick Links</h3>
                <ul class="space-y-2 2xl:text-sm md:text-xs">
                    <li><a href="/about" class="hover:text-gray-300 flex items-center md:justify-start justify-center">About Us</a></li>
                    <li><a href="/contact" class="hover:text-gray-300 flex items-center md:justify-start justify-center">Contact Us</a></li>
                    <li><a href="/policy" class="hover:text-gray-300 flex items-center md:justify-start justify-center">Privacy Policy</a></li>
                    <li><a href="/meet" class="hover:text-gray-300 flex items-center md:justify-start justify-center">Meet our Farmers</a></li>
                </ul>
            </div>

            <!-- Column 3: Contact Us (Forced to Right Side) -->
            <div class="md:w-1/3 order-2 md:order-none">
                <h3 class="font-bold 2xl:text-lg md:text-sm mb-4">Contact Us</h3>
                <p class="text-sm">Need support?</p>
                <div class="mt-4 space-y-3 2xl:text-sm md:text-xs">
                    <p class="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-gray-300">
                        <Icon icon="subway:location-3" width="16" height="16" /> 619 West side, Los Angeles, Pampanga
                    </p>
                    <p class="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-gray-300">
                        <Icon icon="mdi:telephone" width="16" height="16" /> (+63 912 345 6789)
                    </p>
                    <p class="flex items-center justify-center md:justify-start gap-2 text-gray-200 hover:text-gray-300">
                        <Icon icon="carbon:email" width="16" height="16" /> Pagsasaka@gmail.com
                    </p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Logo from '@/assets/Logo.png';
import { Icon } from '@iconify/vue';
</script>
