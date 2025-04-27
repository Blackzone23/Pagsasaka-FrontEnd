<template>
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>
    
    <div>
        <SignUp_Navbar/>
        <div class="flex justify-center items-center min-h-screen bg-gray-100 p-6">
            <div class="bg-white w-full max-w-lg p-8 rounded-lg shadow-lg border border-gray-300">
                
                <!-- Logo -->
                <div class="flex justify-center mb-4">
                    <img :src="Logo2" alt="Logo" class="h-16">
                </div>
                
                <!-- Title -->
                <h2 class="text-2xl font-semibold text-center text-[#608C54] mb-6">Create an Account</h2>
                
                <!-- Form Fields -->
                <div class="space-y-4">
                    <BaseLabel class="font-semibold">*First Name</BaseLabel>
                    <BaseInputField v-model="signdata.first_name" placeholder="Enter First Name" />
                    <BaseError v-if="$validatesignuprules.first_name.$error">{{ $validatesignuprules.first_name.$errors[0].$message }}</BaseError>
                    
                    <BaseLabel class="font-semibold">*Last Name</BaseLabel>
                    <BaseInputField v-model="signdata.last_name" placeholder="Enter Last Name" />
                    <BaseError v-if="$validatesignuprules.last_name.$error">{{ $validatesignuprules.last_name.$errors[0].$message }}</BaseError>
                    
                    <BaseLabel class="font-semibold">Middle Initial (optional)</BaseLabel>
                    <BaseInputField v-model="signdata.middle_name" placeholder="Enter Middle Initial" />
                    
                    <BaseLabel class="font-semibold">*Email Address</BaseLabel>
                    <BaseInputField v-model="signdata.email" placeholder="Enter Email" />
                    <BaseError v-if="$validatesignuprules.email.$error">{{ $validatesignuprules.email.$errors[0].$message }}</BaseError>

                    <BaseLabel class="font-semibold">*E-wallet Number</BaseLabel>
                    <BaseInputField v-model="signdata.phone_number" placeholder="Enter E-wallet Number" />
                    <BaseError v-if="$validatesignuprules.phone_number.$error">{{ $validatesignuprules.phone_number.$errors[0].$message }}</BaseError>

                    <BaseLabel class="font-semibold">*Address</BaseLabel>
                    <BaseInputField v-model="signdata.delivery_address" placeholder="Enter address" />
                    <BaseError v-if="$validatesignuprules.delivery_address.$error">{{ $validatesignuprules.delivery_address.$errors[0].$message }}</BaseError>
                    
                    <!-- Password Fields -->
                    <div class="relative">
                        <BaseLabel class="font-semibold">*Password</BaseLabel>
                        <BaseInputField v-model="signdata.password" :type="showPassword ? 'text' : 'password'" placeholder="Enter Your Password" />
                        <button type="button" class="absolute right-3 top-10 text-gray-500" @click="togglePasswordVisibility">
                            <Icon :icon="showPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
                        </button>
                        <BaseError v-if="$validatesignuprules.password.$error">{{ $validatesignuprules.password.$errors[0].$message }}</BaseError>
                    </div>
                    
                    <div class="relative">
                        <BaseLabel class="font-semibold">*Re-enter Password</BaseLabel>
                        <BaseInputField v-model="signdata.password_confirmation" :type="reshowPassword ? 'text' : 'password'" placeholder="Re-enter password" />
                        <button type="button" class="absolute right-3 top-10 text-gray-500" @click="retogglePasswordVisibility">
                            <Icon :icon="reshowPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
                        </button>
                        <BaseError v-if="$validatesignuprules.password_confirmation.$error">{{ $validatesignuprules.password_confirmation.$errors[0].$message }}</BaseError>
                    </div>
                    
                    <!-- Role Selection -->
                    <BaseLabel class="font-semibold">*Select Your Type</BaseLabel>
                    <BaseSelectField v-model="signdata.role">
                        <BaseOptionDefaultField>Select your type</BaseOptionDefaultField>
                        <BaseOptionField v-for="sign in roleDropdown" :key="sign.id" :value="sign.id">{{ sign.role }}</BaseOptionField>
                    </BaseSelectField>
                    <BaseError v-if="$validatesignuprules.role.$error">{{ $validatesignuprules.role.$errors[0].$message }}</BaseError>
                    
                    <!-- Security Question -->
                    <BaseLabel class="font-semibold">*Select Security Question</BaseLabel>
                    <BaseSelectField v-model="signdata.security_question_id">
                        <BaseOptionDefaultField>Select your question</BaseOptionDefaultField>
                        <BaseOptionField v-for="sign in securityDropdown" :key="sign.id" :value="sign.id">{{ sign.question }}</BaseOptionField>
                    </BaseSelectField>
                    <BaseError v-if="$validatesignuprules.security_question_id.$error">{{ $validatesignuprules.security_question_id.$errors[0].$message }}</BaseError>
                    
                    <BaseLabel class="font-semibold">*Answer</BaseLabel>
                    <BaseInputField v-model="signdata.security_answer" placeholder="Enter your answer" />
                    <BaseError v-if="$validatesignuprules.security_answer.$error">{{ $validatesignuprules.security_answer.$errors[0].$message }}</BaseError>
                    
                    <!-- Submit Button -->
                    <button @click="createUser" class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">Continue</button>
                </div>
                
                <!-- Additional Information -->
                <div class="text-xs text-center mt-6 space-y-2">
                    <p>By creating an account, you agree to Pagsasaka <span class="text-[#608C54]">Conditions of Use</span> and <span class="text-[#608C54]">Privacy Notice</span>.</p>
                    <hr class="border-[#608C54]" />
                    <p>Want to be part of Logistics? Email us now: <span class="text-[#608C54]">Pagsasaka@gmail.com</span></p>
                    <hr class="border-[#608C54]" />
                    <p>Already have an account? <a href="/login" class="text-[#608C54] hover:underline">Sign in</a></p>
                </div>
                
                <div class="text-xs text-center mt-4">
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
import BaseRadioButton from '@/components/Input-Fields/BaseRadioButton.vue';
import BaseOptionDefaultField from '@/components/Input-Fields/BaseOptionDefaultField.vue';
import BaseOptionField from '@/components/Input-Fields/BaseOptionField.vue';
import BaseSelectField from '@/components/Input-Fields/BaseSelectField.vue';
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
const roleDropdown= computed(() => store.state.roleDropdown.data)
const securityDropdown= computed(() => store.state.securityDropdown.data)


store.dispatch('getRoleDropdown');
store.dispatch('getSecurityDropdown');



/******************************************************************
FUNCTION FOR REGISTER
******************************************************************/
const signdata = reactive({
  first_name: '',
  last_name: '',
  middle_name: '',
  password: '',
  password_confirmation: '',
  email: '',
  phone_number: '',
  delivery_address: '',
  role: '',
  security_question_id:'',
  security_answer:''
});

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
const signuprules = computed(() => {
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
      password_confirmation: {
          required: helpers.withMessage('Password Confirmation is required', required),
      },
      email: {
          required: helpers.withMessage('Email Address is required', required),
      },
      phone_number: {
          required: helpers.withMessage('E-Wallet Number is required', required),
      },
      delivery_address: {
          required: helpers.withMessage('Delivery Address is required', required),
      },
      role: {
          required: helpers.withMessage('Role is required', required),
      },
      security_question_id: {
          required: helpers.withMessage('Question is required', required),
      },
      security_answer: {
          required: helpers.withMessage('Answer is required', required),
      },
  };
});

  const $validatesignuprules = useVuelidate(signuprules, signdata);

// Function for adding division
async function createUser() {
  const validationResult = await $validatesignuprules.value.$validate();
  if (validationResult) {
      await store.dispatch('createUser', signdata)
      .then((response) => {
          if(response.isSuccess == true) {
            router.push({name: 'Page_2'}) 
          }
      })
  }
}

</script>