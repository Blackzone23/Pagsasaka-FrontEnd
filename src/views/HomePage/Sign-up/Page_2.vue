<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

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
                        <BaseInputField v-model="otpdata.otp[0]" class="w-12 text-center" maxlength="1"  @paste="handlePaste"/>
                        <BaseInputField v-model="otpdata.otp[1]" class="w-12 text-center" maxlength="1" />
                        <BaseInputField v-model="otpdata.otp[2]" class="w-12 text-center" maxlength="1" />
                        <BaseInputField v-model="otpdata.otp[3]" class="w-12 text-center" maxlength="1" />
                        <BaseInputField v-model="otpdata.otp[4]" class="w-12 text-center" maxlength="1" />
                        <BaseInputField v-model="otpdata.otp[5]" class="w-12 text-center" maxlength="1" />
                        <BaseError v-if="$validateotprules.otp.$error">{{ $validateotprules.otp.$errors[0].$message }}</BaseError>
                    </div>

                    <!-- Resend OTP Link (Optional) -->
                    <div class="text-xs text-center">
                        <p>If you didn't receive the OTP, <a href="#" class="text-[#608C54] hover:underline">Resend OTP</a></p>
                    </div>

                    <!-- Verify Button -->
                    <button @click="createOTP" class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                        Verify
                    </button>

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
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import Logo2 from '@/assets/Logo2.png';
import BaseError from '@/components/Input-Fields/BaseError.vue';
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import useVuelidate from '@vuelidate/core';
import { reactive, computed, ref, onMounted } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
const showLoading = computed(() => store.state.showLoading.state);


// Reactive state for OTP data
const otpdata = reactive({
  otp: ['', '', '', '', '', ''], // Array to store each OTP digit
});

// Validation rules for OTP input fields
const otprules = computed(() => ({
  otp: {
    $each: {
      required: helpers.withMessage('Each OTP field is required', required),
    },
  },
}));

// OTP
// Vuelidate setup
const $validateotprules = useVuelidate(otprules, otpdata);

// Function to handle OTP submission
async function createOTP() {
  const isValid = await $validateotprules.value.$validate();

  if (isValid) {
    const otpString = otpdata.otp.join(''); // Concatenate OTP digits into a single string
    console.log('OTP:', otpString);

    try {
      const response = await store.dispatch('createOTP', { otp: otpString });

      if (response.isSuccess) {
        console.log('OTP verification successful');
        router.push({ name: 'Login' }); // Redirect to the login page
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
    }
  }
}

function handlePaste(event) {
  const pastedData = (event.clipboardData || window.clipboardData).getData('text');
  const digits = pastedData.replace(/\D/g, '').slice(0, 6); // Extract only up to 6 digits

  digits.split('').forEach((digit, index) => {
    otpdata.otp[index] = digit;
  });

  event.preventDefault(); // Prevent default paste behavior
}

</script>