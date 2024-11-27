<template>
    <div>
        <SignUp_Navbar />
        <div class="2xl:p-10 2xs:p-0 md:p-5">
            <div class="bg-white min-h-screen flex flex-col items-center space-y-4 border-2 border-gray-300 p-4 rounded-md">
                <!-- Main Flex Container for Left and Right Content -->
                <div class="flex w-full 2xl:p-16 2xs:p-1">
                    
                    <!-- Left Side Content -->
                    <div class="2xl:w-1/2 2xs:w-[200px] flex items-start flex-col space-y-5">
                        <BaseLabel class="2xl:text-3xl 2xs:text-xl text-start font-bold">Welcome! Here’s what to expect</BaseLabel>
                        
                        <div class="flex items-center">
                            <div class="w-16 h-16 2xl:bg-gray-300 2xs:bg-gray-hidden rounded-full flex items-center justify-center mr-4 mt-3">
                                <span class="font-bold">1</span>
                            </div>
                            <div class="text-start space-y-2">
                                <h2 class="2xl:text-md 2xs:text-xs font-bold">Provide your Information and Documents</h2>
                                <p class="2xl:text-md 2xs:text-xs">We need to collect relevant personal and business information to comply with <br> identification and verification measures. We may require additional information or documents later.</p>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div class="w-16 h-16 2xl:bg-gray-300 2xs:bg-gray-hidden rounded-full flex items-center justify-center mr-4">
                                <span class="font-bold">2</span>
                            </div>
                            <div class="text-start space-y-2">
                                <h2 class="2xl:text-md 2xs:text-xs font-bold">We’ll verify your submission</h2>
                                <p class="2xl:text-md 2xs:text-xs">You may be asked to meet with our associate to verify your submission. <br> This helps ensure that Pagsasaka remains a trusted shopping destination.</p>
                            </div>
                        </div>

                        <div class="flex items-center">
                            <div class="w-16 h-16 2xl:bg-gray-300 2xs:bg-gray-hidden rounded-full flex items-center justify-center mr-4">
                                <span class="font-bold">3</span>
                            </div>
                            <div class="text-start space-y-2">
                                <h2 class="2xl:text-md 2xs:text-xs font-bold">Get verified and start selling!</h2>
                                <p class="2xl:text-md 2xs:text-xs">After we receive all of the required information, It will be verified as soon as possible</p>
                            </div>
                        </div>
                    </div>

                    <!-- Right Side Content -->
                    <div class="w-1/2 pl-4 space-y-4">
                        <BaseLabel class="text-end 2xl:text-lg 2xs:text-sm font-bold">What you’ll need</BaseLabel>
                        <div class="flex items-center justify-end space-x-2 text-xs">
                            <Icon icon="fa-solid:check-circle" class="text-green-500 2xl:text-lg 2xs:text-xs" />
                            <p class="2xl:text-md 2xs:text-xs">Valid government-issued ID</p>    
                        </div>
                        <div class="flex items-center justify-end space-x-2 text-xs">
                            <Icon icon="fa-solid:check-circle" class="text-green-500 2xl:text-lg 2xs:text-xs" />
                            <p class="2xl:text-md 2xs:text-xs">E Wallet or Debit card</p>    
                        </div>  
                        <div class="flex items-center justify-end space-x-2 text-xs">
                            <Icon icon="fa-solid:check-circle" class="text-green-500 2xl:text-lg 2xs:text-xs" />
                            <p class="2xl:text-md 2xs:text-xs">Mobile Phone</p>    
                        </div>      
                    </div>
                </div>
                <a href="/page6" class="2xl:px-32 2xs:px-12 py-2 bg-[#608C54] text-white 2xl:text-md 2xs:text-xs rounded-full hover:bg-gray-400 transition">
                    Agree and Continue
                </a>
                 <!-- <button class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                    Continue
                </button> -->
            </div>
        </div>
    </div> 
</template>

<script setup>
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import { Icon } from '@iconify/vue';

</script>