<template>
     <div>
        <SignUp_Navbar/>
        <div class="2xl:p-10 2xs:p-0 md:p-5">
            <div class="bg-white min-h-screen flex flex-col items-center space-y-2  border-2 border-gray-300 p-10 rounded-md">
            <!-- Logo at the top -->
            <img :src="Logo2" alt="Logo2" class="h-16 mb-2">
            
            <!-- Centered Box -->
            <div class="w-96 p-10 rounded-lg shadow-lg text-start space-y-6  border-2 border-[#608C54]">
                <h2 class="text-xl font-semibold text-[#608C54]">Enter OTP</h2>

                <!-- OTP Fields -->
                <div class="flex flex-col space-x-2 text-center ">
                    <BaseLabel class="font-semibold">Enter the 6-digit OTP</BaseLabel>
                    <p class="text-xs">Your verification code is sent by Email to</p>
                </div>

                <!-- OTP Input Fields (for 6 digits) -->
                <div class="flex justify-center space-x-2">
                    <BaseInputField class="w-12 text-center" maxlength="1"></BaseInputField>
                    <BaseInputField class="w-12 text-center" maxlength="1"></BaseInputField>
                    <BaseInputField class="w-12 text-center" maxlength="1"></BaseInputField>
                    <BaseInputField class="w-12 text-center" maxlength="1"></BaseInputField>
                    <BaseInputField class="w-12 text-center" maxlength="1"></BaseInputField>
                    <BaseInputField class="w-12 text-center" maxlength="1"></BaseInputField>
                </div>

                <!-- Resend OTP Link (Optional) -->
                <div class="text-xs text-center">
                    <p>If you didn't receive the OTP, <a href="#" class="text-[#608C54] hover:underline">Resend OTP</a></p>
                </div>

                <!-- Verify Button -->
                <a href="/page3" class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200 text-center block">
                    Verify OTP
                </a>
                 <!-- <button class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                    Continue
                </button> -->

                <!-- Footer Text -->
                <div class="text-xs space-y-2">
                    <hr class="w-full mx-auto border-t-2 border-[#608C54]" />
                    <p>Already have an Account? <a href="/login" class="text-[#608C54] hover:underline">Sign in</a></p>
                </div>
            </div>
        </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/assets/Logo.png';
import Logo2 from '@/assets/Logo2.png';
import BaseError from '@/components/Input-Fields/BaseError.vue';
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
</script>