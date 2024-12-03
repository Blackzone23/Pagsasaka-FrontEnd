<template>
    <div>
        <SignUp_Navbar />
        <div class="p-10">
            <div class="border-2 border-gray-300 rounded-lg bg-white p-10 shadow-lg">
                <BaseLabel class="text-2xl font-poppins font-bold">Business information</BaseLabel>
                <div class="flex flex-col gap-3 mt-4">
                    <BaseLabel class="text-black text-md font-poppins font-bold">Upload your valid ID</BaseLabel>
                    <button @click="triggerFileInput" class="bg-gray-200 p-2 w-40 flex items-center justify-center gap-2 rounded-full text-center text-xs">
                        <Icon icon="material-symbols:upload-file-sharp" width="1.2rem" height="1.2rem" style="color: black" />
                        Upload
                    </button>

                    <!-- Hidden file input -->
                    <input type="file" ref="fileInput" @change="handleFileUpload" class="hidden" />
                </div>
                
                <div class="space-y-3 text-sm 2xl:w-1/2 2xs:w-[250px] mt-6">
                    <BaseLabel>Payment Method</BaseLabel>
                    <div class="flex space-x-4">
                        <BaseRadioButton v-for="option in ['Gcash', 'MasterCard']" :key="option" :name="'tinIdOption'" :label="option" :value="option" v-model="tinIdSelected"></BaseRadioButton>
                    </div>
                    <div v-if="tinIdSelected === 'Gcash'" class="mt-4">
                        <BaseLabel>Your Full Name</BaseLabel>
                        <BaseInputField placeholder="Type your Full name"></BaseInputField>

                        <BaseLabel>Your Number</BaseLabel>
                        <BaseInputField placeholder="+63"></BaseInputField>
                    </div>
                    <div v-if="tinIdSelected === 'MasterCard'" class="mt-4">
                        <BaseLabel>Your Full Name</BaseLabel>
                        <BaseInputField placeholder="Type your Full name"></BaseInputField>

                        <BaseLabel>Type your account number</BaseLabel>
                        <BaseInputField placeholder="Type your account number"></BaseInputField>

                        <BaseLabel>Type your Bank location</BaseLabel>
                        <BaseInputField placeholder="Type your bank location"></BaseInputField>

                        <BaseLabel>Type your number</BaseLabel>
                        <BaseInputField placeholder="+63"></BaseInputField>
                    </div>
                </div>
                
                <div class="mt-10 text-center">
                    <a href="/page8" class="2xl:px-32 2xs:px-20 py-2 bg-[#608C54] text-white text-sm rounded-md hover:bg-gray-400 transition">
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
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseRadioButton from '@/components/Input-Fields/BaseRadioButton.vue';
import useVuelidate from '@vuelidate/core';
import { reactive, computed, ref, onMounted } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

const tinIdSelected = ref(null);
const fileInput = ref(null);

/******************************************************************
 FUNCTION FOR FILE UPLOAD
******************************************************************/

function handleFileUpload(event) {
  // Handle file upload here
}

function triggerFileInput() {
  fileInput.value.click();
}
</script>