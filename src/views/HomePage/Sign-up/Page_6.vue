<template>
    <div>
        <SignUp_Navbar/>
        <div class="flex items-center justify-end space-x-3 p-2 text-sm">
            <Icon icon="cuida:alert-outline" width="2rem" height="2rem" style="color: black" />
            <p>Please ensure your business type selection is correct. <br><span class="text-[#FF0000]">An incorrect selection may affect the status of your account</span></p>
        </div>

        <div class="p-5 w-full md:w-1/2">
            <div class="border-2 border-gray-300 rounded-lg bg-white p-8 shadow-lg">
                <BaseLabel class="text-2xl font-bold">Business information</BaseLabel>
                <div>
                    <BaseLabel>Your Business name</BaseLabel>
                    <BaseInputField placeholder="Enter Your Business Name"></BaseInputField>

                    <BaseLabel>Business type</BaseLabel>
                    <BaseSelectField>
                        <BaseOptionDefaultField class="w-1/2">Select an entity type</BaseOptionDefaultField>
                        <BaseOptionField>dadawdawd</BaseOptionField>
                        <BaseOptionField>dadawdawd</BaseOptionField>
                        <BaseOptionField>dadawdawd</BaseOptionField>
                    </BaseSelectField>

                    <BaseLabel>Business location</BaseLabel>
                    <BaseSelectField>
                        <BaseOptionDefaultField>Select a Location</BaseOptionDefaultField>
                        <BaseOptionField>dadawdawd</BaseOptionField>
                        <BaseOptionField>dadawdawd</BaseOptionField>
                        <BaseOptionField>dadawdawd</BaseOptionField>
                    </BaseSelectField>

                    <div>
                        <BaseLabel>Do you have Tin-ID?</BaseLabel>
                        <div class="space-y-3 text-sm">
                            <div class="flex space-x-4">
                                <BaseRadioButton v-for="option in ['Yes', 'No']" :key="option" :name="'tinIdOption'" :label="option" :value="option" v-model="tinIdSelected"></BaseRadioButton>
                            </div>

                            <div v-if="tinIdSelected === 'Yes'" class="mt-4">
                                <BaseLabel>Taxpayer Identification Number (TIN)</BaseLabel>
                                <BaseInputField placeholder="TIN-ID Number"></BaseInputField>
                                <div class="flex space-y-4 gap-3">
                                    <BaseLabel>Certificate of Registration</BaseLabel>
                                    <button @click="triggerFileInput" class="bg-gray-200 p-2 w-40 flex items-center justify-center gap-2 rounded-full text-center text-xs">
                                        <Icon icon="material-symbols:upload-file-sharp" width="1.2rem" height="1.2rem" style="color: black" />
                                        Upload
                                    </button>

                                    <!-- Hidden file input -->
                                    <input type="file" ref="fileInput" @change="handleFileUpload" class="hidden" />
                                </div>
                            </div>

                            <div class="flex items-center gap-2 mt-5">
                                <input type="checkbox" v-model="isChecked" class="h-4 w-4 border border-gray-300 rounded-sm" />
                                <p class="text-gray-600 text-xs items-center">I confirm my business location and type are correct, and I understand that this information cannot be changed later. By clicking “Agree and Continue,” you consent to the collection and use of your personal information as outlined in this Privacy Policy.</p>
                            </div>

                            <div class="mt-3 text-center">
                                <a href="/page7" class="px-32 py-2 bg-[#608C54] text-white text-sm rounded-md hover:bg-gray-400 transition">
                                    Continue
                                </a>
                                                <!-- <button class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                                    Continue
                                </button> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseOptionDefaultField from '@/components/Input-Fields/BaseOptionDefaultField.vue';
import BaseOptionField from '@/components/Input-Fields/BaseOptionField.vue';
import BaseSelectField from '@/components/Input-Fields/BaseSelectField.vue';
import BaseRadioButton from '@/components/Input-Fields/BaseRadioButton.vue';
import { ref} from 'vue';
import { Icon } from '@iconify/vue';

const tinIdSelected = ref(null);
const fileInput = ref(null);
const isChecked = ref(false); 

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