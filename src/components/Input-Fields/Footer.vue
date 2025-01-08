<template>
   <div>
        <!-- Footer Section -->
        <footer class="bg-[#608C54] text-white py-8">
            <div class="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <!-- Column 1: About Us -->
                <div class="text-center md:text-left">
                    <img :src="Logo" alt="Logo" class="h-16 mx-auto md:mx-1">
                    <p class="text-sm ml-2 mt-4">
                        Pagsasaka connects farmers with consumers for buying and selling fresh, local produce, supporting sustainable agriculture.
                    </p>
                    <div class="flex justify-center md:justify-start 2xl:gap-4 2xs:gap-2 ml-2 mt-4">
                        <Icon icon="ic:twotone-facebook" width="24" height="24" />
                        <Icon icon="mage:instagram-circle" width="24" height="24" />
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="text-center md:text-left">
                    <h3 class="font-bold 2xl:text-lg 2xs:text-sm mb-4">Quick Links</h3>
                    <div class="grid grid-cols-2 2xl:gap-4 2xs:gap-2 text-sm 2xl:ml-0 2xs:ml-10 md:ml-0 lg:ml-0 sm:ml-24">
                        <ul>
                            <li><a href="/about"  class="hover:text-gray-300 flex items-center gap-2"><Icon icon="ic:round-arrow-right" width="16" height="16" />About Us</a></li>
                            <li><a href="/market" class="hover:text-gray-300 flex items-center gap-2"><Icon icon="ic:round-arrow-right" width="16" height="16" />Market</a></li>
                            <!-- <li><a href="/services" target="_blank" class="hover:text-gray-300 flex items-center gap-2"><Icon icon="ic:round-arrow-right" width="16" height="16" />CSA</a></li> -->
                        </ul>
                        <ul>
                            <li><a href="/contact" class="hover:text-gray-300 flex items-center gap-2"><Icon icon="ic:round-arrow-right" width="16" height="16" />Contact Us</a></li>
                            <li><a href="/policy"  class="hover:text-gray-300 flex items-center gap-2"><Icon icon="ic:round-arrow-right" width="16" height="16" />Privacy Policy</a></li>
                            <li><a href="/meet"  class="hover:text-gray-300 flex items-center gap-2"><Icon icon="ic:round-arrow-right" width="16" height="16" />Meet our Farmers</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Column 3: Contact Us -->
                <div class="text-center md:text-left 2xl:ml-10 sm:ml-1">
                    <h3 class="font-bold 2xl:text-lg 2xs:text-sm mb-4">Contact Us</h3>
                    <p class="2xl:text-sm 2xs:text-xs">Need support?</p>
                    <div class="mt-4 2xl:ml-0 xs:ml-24 xl:ml-0 md:ml-0 2xs:ml-16 space-y-4 2xs:text-sm">
                        <p class="flex items-center gap-2 text-gray-200 hover:text-gray-300">
                            <Icon icon="subway:location-3" width="16" height="16" /> 619 West side, Los Angeles, Pampanga
                        </p>
                        <p class="flex items-center gap-2 text-gray-200 hover:text-gray-300">
                            <Icon icon="mdi:telephone" width="16" height="16" /> (+63 912 345 6789)
                        </p>
                        <p class="flex items-center gap-2 text-gray-200 hover:text-gray-300">
                            <Icon icon="carbon:email" width="16" height="16" /> Pagsasaka@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    </div>

</template>

<script setup>
import Logo from '@/assets/Logo.png';
import { Icon } from '@iconify/vue';
</script>
