<template>
    <div>
        <SignUp_Navbar/>
        <div class="h-full flex flex-col items-center justify-center text-xs mt-4">
            <div class="2xl:p-20 2xs:p-8 md:p-28 px-96 2xl:border-2 2xs:border-1 md:border-2 border-gray-300 rounded-lg bg-white text-center 2xl:shadow-lg 2xs:shadow-xs md:shadow-lg">
                <img :src="Success" alt="Success" class="2xl:h-52 2xs:h-44 2xl:ml-20 2xs:ml-16 md:ml-24 sm:ml-28 xs:ml-28">
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