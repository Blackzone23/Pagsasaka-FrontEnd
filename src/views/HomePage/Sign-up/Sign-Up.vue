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
                    <h2 class=" text-xl font-semibold text-[#608C54]">Create an Account</h2>
                    <!-- First Name Field -->
                    <div>
                        <BaseLabel class="font-semibold">First Name</BaseLabel>
                        <BaseInputField v-model="signdata.first_name" placeholder="Enter First Name"></BaseInputField>
                        <BaseError v-if="$validatesignuprules.first_name.$error">{{ $validatesignuprules.first_name.$errors[0].$message }}</BaseError>

                        <BaseLabel class="font-semibold">Last Name</BaseLabel>
                        <BaseInputField v-model="signdata.last_name" placeholder="Enter Last Name"></BaseInputField>
                        <BaseError v-if="$validatesignuprules.last_name.$error">{{ $validatesignuprules.last_name.$errors[0].$message }}</BaseError>

                        <BaseLabel class="font-semibold">Middle Name</BaseLabel>
                        <BaseInputField v-model="signdata.middle_name" placeholder="Enter Middle Name"></BaseInputField>

                        <div class="relative">
                            <BaseLabel class="font-semibold">Password</BaseLabel>
                            <BaseInputField v-model="signdata.password"  :type="showPassword ? 'text' : 'password'"  placeholder="Enter Your Password" ></BaseInputField>

                            <!-- Password visibility toggle icon -->
                            <button  type="button"  class="absolute right-3 2xl:top-12 2xs:top-14 lg:top-12 md:top-13 transform -translate-y-1/2 text-gray-500 items-center justify-center" @click="togglePasswordVisibility">
                                <Icon :icon="showPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
                            </button>
                            <BaseError v-if="$validatesignuprules.password.$error">{{ $validatesignuprules.password.$errors[0].$message }}</BaseError>
                        </div>

                        <div class="relative">
                            <BaseLabel class="font-semibold">Re-enter password</BaseLabel>
                            <BaseInputField v-model="signdata.password_confirmation" :type="reshowPassword ? 'text' : 'password'"  placeholder="Re-enter password"></BaseInputField>
                            <!-- Password visibility toggle icon -->
                            <button  type="button"  class="absolute right-3 2xl:top-12 2xs:top-14 lg:top-12 md:top-13 transform -translate-y-1/2 text-gray-500 items-center justify-center" @click="retogglePasswordVisibility">
                                    <Icon :icon="reshowPassword ? 'ic:twotone-visibility-off' : 'ic:twotone-visibility'" />
                                </button>
                            <BaseError v-if="$validatesignuprules.password_confirmation.$error">{{ $validatesignuprules.password_confirmation.$errors[0].$message }}</BaseError>
                        </div>

                        <BaseLabel class="font-semibold">Email Address</BaseLabel>
                        <BaseInputField v-model="signdata.email" placeholder="Enter email"></BaseInputField>
                        <BaseError v-if="$validatesignuprules.email.$error">{{ $validatesignuprules.email.$errors[0].$message }}</BaseError>


                        <BaseLabel class="font-semibold">Select your type</BaseLabel>
                        <BaseSelectField v-model="signdata.role">
                            <BaseOptionDefaultField>Select your type</BaseOptionDefaultField>
                            <BaseOptionField v-for="sign in roleDropdown" :key="sign.id" :value="sign.id">
                                {{ sign.role }}
                            </BaseOptionField>
                        </BaseSelectField>
                         <BaseError v-if="$validatesignuprules.role.$error">{{ $validatesignuprules.role.$errors[0].$message }}</BaseError>

                         <BaseLabel>Select Question</BaseLabel>
                         <BaseSelectField v-model="signdata.security_question_id">
                            <BaseOptionDefaultField>Select your question</BaseOptionDefaultField>
                            <BaseOptionField v-for="sign in securityDropdown" :key="sign.id" :value="sign.id">
                                {{ sign.question }}
                            </BaseOptionField>
                        </BaseSelectField>
                        <BaseError v-if="$validatesignuprules.security_question_id.$error">{{ $validatesignuprules.security_question_id.$errors[0].$message }}</BaseError>

                        <BaseLabel>Answer:</BaseLabel>
                        <BaseInputField class="mt-3" v-model="signdata.security_answer" placeholder="Enter your answer" ></BaseInputField>
                        <BaseError v-if="$validatesignuprules.security_answer.$error">{{ $validatesignuprules.security_answer.$errors[0].$message }}</BaseError>
                    </div>

                    <button @click="createUser" class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">Continue</button>

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
    console.log("account", signdata)
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