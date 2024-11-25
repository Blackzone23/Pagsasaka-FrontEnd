<template>
    <div>
        <HomeNavbar/>
        <div class="p-10">
            <div class="min-h-screen flex items-center justify-center border-2 border-gray-300 rounded-lg p-6 shadow-lg">
                <!-- Main Container -->
                <div class="w-full max-w-5xl flex shadow-lg rounded-lg overflow-hidden gap-2">
                    <div class="w-1/2">
                        <div class="grid grid-cols-4 space-x-4 h-full">
                            <div class="col-span-1">
                                <img :src="Part1" alt="Part1" class="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div class="col-span-1">
                                <img :src="Part2" alt="Part2" class="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div class="col-span-1">
                                <img :src="Part3" alt="Part3" class="object-cover w-full h-full rounded-lg" />
                            </div>
                            <div class="col-span-1">
                                <img :src="Part4" alt="Part4" class="object-cover w-full h-full rounded-lg" />
                            </div>
                        </div>
                    </div>

                    <!-- Right Side (Login Form) -->
                    <div class="w-1/2 p-8 bg-[#608C54] border-gray-200 border-2 rounded-lg">
                        <h2 class="text-2xl font-semibold text-white mb-6">Contact Us</h2>
                        <form>
                            <!-- Email Field -->
                            <div class="flex justify-center space-x-16">
                                <div class="flex flex-col items-center text-sm space-y-3">
                                    <BaseLabel class="text-white font-bold">Phone</BaseLabel>
                                    <div class="flex space-x-1  ">
                                        <Icon icon="foundation:telephone" width="1.2rem" height="1.2rem"  style="color: white" />
                                        <span class="text-white">(+63 123 123 123)</span> 
                                    </div>
                                </div>
                                <div class="flex flex-col items-center text-sm space-y-3">
                                    <BaseLabel class="text-white font-bold">Email</BaseLabel>
                                   <div class="flex space-x-1 items-center">
                                        <Icon icon="mdi:envelope-outline" width="1.2rem" height="1.2rem"  style="color: white" />
                                        <span class="text-white">Pagsasaka@gmail.com</span> 
                                   </div>
                                </div>
                            </div>
                        </form>
                        <div class="mb-6 w-full space-y-5 mt-10 items-center">
                            <BaseInputField placeholder="Name"></BaseInputField>
                            <BaseInputField placeholder="Email"></BaseInputField>
                            <BaseInputField class="pb-20" placeholder="Message"></BaseInputField>
                        </div>
                        <div class="mt-3 text-center">
                            <a href="/page7" class="px-28 py-2 bg-white text-sm rounded-md hover:bg-gray-400 transition">
                                Send
                            </a>
                             <!-- <button class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                                Continue
                            </button> -->
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