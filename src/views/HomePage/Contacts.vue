<template>
    <div>
        <HomeNavbar/>
        <div class="2xl:p-10 2xs:p-0">
            <div class="h-full w-full flex items-center justify-center border-2 border-gray-300 rounded-lg p-6 shadow-lg">
                    <!-- Main Container -->
                    <div class="w-full max-w-5xl flex flex-wrap lg:flex-nowrap shadow-lg rounded-lg overflow-hidden gap-4">
                        <!-- Left Side (Images) -->
                        <div class="2xl:w-1/2 2xs:w-[0px] flex justify-center">
                            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 2xl:w-full 2xs:w-[0px]">
                                <img :src="Part1" alt="Part1" class="object-cover 2xl:w-full 2xs:w-[200px] 2xl:h-full 2xs:h-[100px] rounded-lg"/>
                                <img :src="Part2" alt="Part2" class="object-cover w-full h-full rounded-lg"/>
                                <img :src="Part3" alt="Part3" class="object-cover w-full h-full rounded-lg"/>
                                <img :src="Part4" alt="Part4" class="object-cover w-full h-full rounded-lg" />
                            </div>
                        </div>

                        <!-- Right Side (Contact Form) -->
                        <div class="2xl:w-1/2 w-full p-8 bg-[#608C54] border-gray-200 border-2 rounded-lg">
                            <h2 class="text-2xl font-semibold text-white mb-6 text-center">
                            Contact Us
                            </h2>

                            <!-- Contact Info -->
                            <div class="flex flex-wrap justify-between mb-10">
                            <!-- Phone Section -->
                            <div class="flex flex-col items-center text-sm space-y-3 w-full lg:w-1/2">
                                <BaseLabel class="text-white font-bold">Phone</BaseLabel>
                                <div class="flex items-center space-x-2">
                                <Icon icon="foundation:telephone" width="1.2rem" height="1.2rem" style="color: white" />
                                <span class="text-white">(+63 123 123 123)</span>
                                </div>
                            </div>

                            <!-- Email Section -->
                            <div class="flex flex-col items-center text-sm space-y-3 w-full lg:w-1/2">
                                <BaseLabel class="text-white font-bold">Email</BaseLabel>
                                <div class="flex items-center space-x-2">
                                <Icon icon="mdi:envelope-outline" width="1.2rem" height="1.2rem" style="color: white"/>
                                <span class="text-white">Pagsasaka@gmail.com</span>
                                </div>
                            </div>
                            </div>

                            <!-- Form Section -->
                            <div class="space-y-4 mb-6">
                            <BaseInputField placeholder="Name" />
                            <BaseInputField placeholder="Email" />
                            <BaseInputField class="h-24" placeholder="Message" />
                            </div>

                            <!-- Submit Button -->
                            <div class="text-center">
                            <a href="/page7" class="px-8 py-2 bg-white text-[#608C54] font-semibold rounded-md hover:bg-gray-400 transition">
                                Send
                            </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer/>
    </div>
</template>

<script setup>
import HomeNavbar from '@/components/Navbar/HomeNavbar.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
import Part1 from '@/assets/Part1.png';
import Part2 from '@/assets/Part2.png';
import Part3 from '@/assets/Part3.png';
import Part4 from '@/assets/Part4.png';
import { Icon } from '@iconify/vue';
</script>