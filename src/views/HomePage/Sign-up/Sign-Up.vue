<template>
    <div>
        <SignUp_Navbar/>
        <div class="2xl:p-10 2xs:p-0">
            <div class="bg-white h-full w-full flex flex-col mt-5 items-center space-y-2 border-2 border-gray-300 p-10 rounded-md">
            <!-- Logo at the top -->
            <img :src="Logo2" alt="Logo2" class="h-16 mb-2">
            
            <!-- Centered Box -->
            <div class=" w-96 p-6 rounded-lg shadow-lg text-start space-y-6 overflow-y-auto border-2 border-[#608C54]">
                <h2 class=" text-xl font-semibold text-[#608C54]">Create an Account</h2>
                <!-- First Name Field -->
                <div>
                    <BaseLabel class="font-semibold">Your Name</BaseLabel>
                    <BaseInputField placeholder="Enter Your Name"></BaseInputField>
                    <BaseError></BaseError>

                    <BaseLabel class="font-semibold">Email Address</BaseLabel>
                    <BaseInputField placeholder="Enter email"></BaseInputField>

                    <BaseLabel class="font-semibold">Password</BaseLabel>
                    <BaseInputField placeholder="Enter Your Password "></BaseInputField>

                    <BaseLabel class="font-semibold">Re-enter password</BaseLabel>
                    <BaseInputField placeholder="Re-enter password"></BaseInputField>
                    <BaseLabel class="font-semibold">Select your type</BaseLabel>
                    <BaseRadioButton v-for="option in ['Consumer', 'Seller']" :key="option" :name="'usertype'" :label="option" :value="option" v-model="usertype" class="text-sm"></BaseRadioButton>
                </div>
                <!-- Sign Up Button -->
                <a href="/page2" class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200 text-center block">
                    Continue
                    </a>

                <!-- <button class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                    Continue
                </button> -->
                <div class="text-xs space-y-2">
                    <p>By creating an account, you agree to Pagsasaka <span class="text-[#608C54]">Conditions of Use</span> and <span class="text-[#608C54]">Privacy Notice.</span></p>
                    <hr class="w-full  mx-auto border-t-2 border-[#608C54]" />
                    <p>Want to be part of Logistics? <br> Email us now and apply <span class="text-[#608C54]">Pagsasaka@gmail.com.</span></p>
                    <hr class="w-full mx-auto border-t-2 border-[#608C54]" />
                    <p>Already have an account?<a href="/login" class="text-[#608C54] hover:underline"> Sign in</a></p>
                </div>
            </div>
            <div class="text-xs">
                <h1>Pagsasaka. All Rights Reserved.</h1>
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
import BaseRadioButton from '@/components/Input-Fields/BaseRadioButton.vue';
</script>