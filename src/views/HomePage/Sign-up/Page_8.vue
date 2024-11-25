<template>
    <div>
        <SignUp_Navbar/>
        <div class="h-screen flex flex-col items-center justify-center text-xs">
            <div class="p-20 px-96 border-2 border-gray-300 rounded-lg bg-white text-center shadow-lg">
                <img :src="Success" alt="Success" class="h-72 ml-5">
                <BaseLabel class="font-bold text-3xl">Submitted Successfully</BaseLabel>
                <p>Now you can proceed to add your first product</p>
                <div class="mt-10">
                    <a href="/login" class="px-32 py-2 bg-[#608C54] text-white text-sm rounded-md hover:bg-gray-400 transition">
                        Continue
                    </a>
                     <!-- <button class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                    Continue
                </button> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Success from '@/assets/Success.png';
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
</script>