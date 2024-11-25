<template>
    <div>
        <!-- Footer Section -->
        <footer class="bg-[#608C54] text-white py-10">
            <div class="container mx-auto flex justify-between items-start">
                
                <!-- Column 1: About Us -->
                <div class="w-1/3 px-4">
                    <img :src="Logo" alt="Logo" class="h-20">
                    <p class="text-sm">Pagsasaka connects farmers with consumers for <br> buying and selling fresh, local produce, supporting <br> sustainable agriculture</p>
                    <div class="flex">
                        <Icon icon="ic:twotone-facebook" width="24" height="24" style="color: white" />
                        <Icon icon="mage:instagram-circle" width="24" height="24" style="color: white" />
                    </div>
                </div>

                <!-- Column 2: Quick Links -->
                <div class="w-1/3 px-4">
                    <h3 class="font-bold text-lg mb-2">Quick Links</h3>
                    <div class="flex gap-20">
                        <!-- Left Links Column -->
                        <ul class="text-sm">
                            <li><a href="/about" target="_blank" class="hover:text-gray-300 flex items-center"><Icon icon="ic:round-arrow-right" width="24" height="24" style="color: white" />About Us</a></li>
                            <li><a href="/market" target="_blank" class="hover:text-gray-300 flex items-center"><Icon icon="ic:round-arrow-right" width="24" height="24" style="color: white" />Market</a></li>
                            <li><a href="/services" target="_blank" class="hover:text-gray-300 flex items-center"><Icon icon="ic:round-arrow-right" width="24" height="24" style="color: white" />CSA</a></li>
                        </ul>

                        <!-- Right Links Column -->
                        <ul class="text-sm">
                            <li><a href="/contact" target="_blank" class="hover:text-gray-300 flex items-center"><Icon icon="ic:round-arrow-right" width="24" height="24" style="color: white" />Contact Us</a></li>
                            <li><a href="/policy" target="_blank" class="hover:text-gray-300 flex items-center"><Icon icon="ic:round-arrow-right" width="24" height="24" style="color: white" />Privacy Policy</a></li>
                            <li><a href="/meet" target="_blank" class="hover:text-gray-300 flex items-center"><Icon icon="ic:round-arrow-right" width="24" height="24" style="color: white" />Meet our Farmers</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Column 3: Contact Us -->
                <div class="w-1/3 px-4">
                    <h3 class="font-bold text-lg mb-2">Contact Us</h3>
                    <p class="text-xs hover:text-gray-300">Need support?</p>
                    <p class="text-sm flex items-center gap-2 text-gray-200 mt-2 hover:text-gray-300"><Icon icon="subway:location-3" width="1em" height="1em" style="color: white" />619 West side , Los Angeles Pampanga</p>
                    <p class="text-sm flex items-center gap-2 text-gray-200 mt-2 hover:text-gray-300"><Icon icon="mdi:telephone" style="color: white" />(+63 912 345 6789)</p>
                    <p class="text-sm flex items-center gap-2 text-gray-200 mt-2 hover:text-gray-300"><Icon icon="carbon:email" style="color: white" />Pagsasaka@gmail.com </p>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
import Logo from '@/assets/Logo.png';
import { Icon } from '@iconify/vue';
</script>
