<template>
    <div>
        <SignUp_Navbar/>
        <div class="p-10">
            <div class="bg-white min-h-screen flex flex-col items-center space-y-2 border-2 border-gray-300 p-10 rounded-md">
            <!-- Logo at the top -->
            <img :src="Logo2" alt="Logo2" class="h-16 mb-2">
            
            <!-- Centered Box -->
            <div class="w-96 p-6 rounded-lg shadow-lg text-start space-y-6 overflow-y-auto border-2 border-[#608C54]">
                <h2 class="text-xl font-semibold text-[#608C54]">Create an Account</h2>
                <!-- First Name Field -->
                <div class="text-center flex flex-col text-xs space-y-6">
                    <BaseLabel class="font-semibold text-xl">Thank You!</BaseLabel>
                    <p class="text-sm">Set your Dynamic Challenge Question (DCQ)</p>
                    <p>Last step! Set your DCQ to complete the sign up.</p>
                    <BaseSelectField>
                        <BaseOptionDefaultField>Security Question</BaseOptionDefaultField>
                        <BaseOptionField>dadawdawd</BaseOptionField>
                        <BaseOptionField>dadawdawd</BaseOptionField>
                        <BaseOptionField>dadawdawd</BaseOptionField>
                    </BaseSelectField>
                    <BaseInputField placeholder="Enter Your Answer"></BaseInputField>
                </div>
                
                <!-- Sign Up Button -->
                <a href="/page4" class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200 text-center block">
                    Continue
                </a>
                 <!-- <button class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                    Continue
                </button> -->

                <!-- Sign In Link -->
                <div class="text-xs text-center">
                    <p>Already have an account? <a href="/login" class="text-[#608C54] hover:underline">Sign in</a></p>
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
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
import BaseOptionDefaultField from '@/components/Input-Fields/BaseOptionDefaultField.vue';
import BaseOptionField from '@/components/Input-Fields/BaseOptionField.vue';
import BaseSelectField from '@/components/Input-Fields/BaseSelectField.vue';
</script>