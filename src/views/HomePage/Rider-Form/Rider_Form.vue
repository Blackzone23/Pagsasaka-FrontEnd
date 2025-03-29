<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div>
        <SignUp_Navbar/>
        <div class="2xl:p-10 2xs:p-0">
            <div class="bg-white h-full w-full flex flex-col mt-5 items-center space-y-2 border-2 border-gray-300 p-10 rounded-md">
                <!-- Logo at the top -->
                <img :src="Logo2" alt="Logo2" class="h-16 mb-2">
                
                <!-- Centered Box -->
                <div class=" w-96 p-6 rounded-lg shadow-lg text-start space-y-6 overflow-y-auto border-2 border-[#608C54]">
                    <h2 class=" text-xl font-semibold text-[#608C54]">Create Rider Account</h2>
                    <!-- First Name Field -->
                    <div>
                        <BaseLabel class="font-semibold">First Name</BaseLabel>
                        <BaseInputField v-model="riderdata.first_name" placeholder="Enter First Name"></BaseInputField>
                        <BaseError v-if="$validateriderrules.first_name.$error">{{ $validateriderrules.first_name.$errors[0].$message }}</BaseError>

                        <BaseLabel class="font-semibold">Last Name</BaseLabel>
                        <BaseInputField v-model="riderdata.last_name" placeholder="Enter Last Name"></BaseInputField>
                        <BaseError v-if="$validateriderrules.last_name.$error">{{ $validateriderrules.last_name.$errors[0].$message }}</BaseError>

                        <BaseLabel class="font-semibold">Phone Number</BaseLabel>
                        <BaseInputField v-model="riderdata.phone_number" placeholder="Enter Phone Number"></BaseInputField>
                        <BaseError v-if="$validateriderrules.phone_number.$error">{{ $validateriderrules.phone_number.$errors[0].$message }}</BaseError>

                        <BaseLabel class="font-semibold">Email Address</BaseLabel>
                        <BaseInputField v-model="riderdata.email" placeholder="Enter email address"></BaseInputField>
                        <BaseError v-if="$validateriderrules.email.$error">{{ $validateriderrules.email.$errors[0].$message }}</BaseError>

                        <div class="relative">
                            <BaseLabel class="font-semibold">Password</BaseLabel>
                            <BaseInputField v-model="riderdata.password"  :type="showPassword ? 'text' : 'password'"  placeholder="Enter Your Password" ></BaseInputField>

                            <!-- Password visibility toggle icon -->
                            <button  type="button"  class="absolute right-3 2xl:top-12 2xs:top-14 lg:top-12 md:top-13 transform -translate-y-1/2 text-gray-500 items-center justify-center" @click="togglePasswordVisibility">
                                <Icon :icon="showPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
                            </button>
                            <BaseError v-if="$validateriderrules.password.$error">{{ $validateriderrules.password.$errors[0].$message }}</BaseError>
                        </div>

                        <BaseLabel class="font-semibold">Upload License</BaseLabel>
                        <input type="file" @change="handleLicenseUpload" accept="image/*,application/pdf" class="w-full border p-2 rounded" ref="licenseInput">
                        <BaseError v-if="$validateriderrules.license.$error">{{ $validateriderrules.license.$errors[0].$message }}</BaseError>

                        <BaseLabel class="font-semibold">Upload Valid ID</BaseLabel>
                        <input type="file" @change="handleValidIdUpload" accept="image/*,application/pdf" class="w-full border p-2 rounded" ref="validIdInput">
                        <BaseError v-if="$validateriderrules.valid_id.$error">{{ $validateriderrules.valid_id.$errors[0].$message }}</BaseError>

                    </div>

                    <button @click="createRider" class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">Confirm</button>

                    <div class="text-xs space-y-2">
                        <p>By creating an account, you agree to Pagsasaka <span class="text-[#608C54]">Conditions of Use</span> and <span class="text-[#608C54]">Privacy Notice.</span></p>
                        <hr class="w-full  mx-auto border-t-2 border-[#608C54]" />
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
import Logo2 from '@/assets/Logo2.png';
import BaseError from '@/components/Input-Fields/BaseError.vue';
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import useVuelidate from '@vuelidate/core';
import { reactive, computed, ref, onMounted } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();


const showLoading = computed(() => store.state.showLoading.state);


/******************************************************************
FUNCTION FOR REGISTER
******************************************************************/
const riderdata = reactive({
  first_name: '',
  last_name: '',
  password: '',
  email: '',
  license: '',
  valid_id: '',
  phone_number:'',
});
const handleLicenseUpload = (event) => {
    riderdata.license = event.target.files[0];
};

const handleValidIdUpload = (event) => {
    riderdata.valid_id = event.target.files[0];
};

//password
const showPassword = ref(false);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};
//re-password
const reshowPassword = ref(false);

const retogglePasswordVisibility = () => {
  reshowPassword.value = !reshowPassword.value;
};

// Validation rules
const riderRules = computed(() => {
  return {
    first_name: {
        required: helpers.withMessage('First Name is required', required),
      },
      last_name: {
          required: helpers.withMessage('Last Name is required', required),
      },
      password: {
          required: helpers.withMessage('Password is required', required),
      },
      email: {
          required: helpers.withMessage('Email Address is required', required),
      },
      license: {
          required: helpers.withMessage('license is required', required),
      },
      valid_id: {
          required: helpers.withMessage('valid ID is required', required),
      },
      phone_number: {
        required: helpers.withMessage('Phone Number is required', required),
      },
  };
});

  const $validateriderrules = useVuelidate(riderRules, riderdata);

// Function for adding division
async function createRider() {
    const validationResult = await $validateriderrules.value.$validate();
    if (validationResult) {
        const formData = new FormData();
        formData.append('first_name', riderdata.first_name);
        formData.append('last_name', riderdata.last_name);
        formData.append('password', riderdata.password);
        formData.append('email', riderdata.email);
        formData.append('phone_number', riderdata.phone_number);
        if (riderdata.license) formData.append('license', riderdata.license);
        if (riderdata.valid_id) formData.append('valid_id', riderdata.valid_id);

        await store.dispatch('Rider/createRider', formData)
        .then((response) => {
            if (response.isSuccess) {
                router.push({ name: 'Home' });
            }
        });
    }
}
</script>