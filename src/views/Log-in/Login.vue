<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>
    <div>
        <Login_Navbar/>
        <div class="2xl:p-10 2xs:p-0 md:p-5">
            <div class="h-full flex items-center justify-center border-2 border-gray-300 rounded-lg p-6 shadow-lg">
                <!-- Main Container -->
                <div class="w-full max-w-5xl flex shadow-lg rounded-lg overflow-hidden">
                    <div>
                        <img :src="Farmer6" alt="Logo2" class="h-full mb-2">
                    </div>

                    <!-- Right Side (Login Form) -->
                    <div class="2xl:w-1/2 2xs:w-[700px] 2xl:p-8 2xs:p-1 md:p-4 bg-white border-gray-200 border-2">
                        <h2 class="2xl:text-2xl 2xs:text-lg font-semibold text-[#608C54] mb-6">Login</h2>

                            <!-- Email -->
                            <div class="mb-4">
                                <BaseLabel>Email</BaseLabel>
                                <BaseInputField v-model="formData.email" placeholder="Phone number / Username / Email"></BaseInputField>
                                <BaseError v-if="$validateLoginRules.email.$error">{{ $validateLoginRules.email.$errors[0].$message }}</BaseError>
                            </div>

                            <!-- Password-->
                            <div class="mb-6">
                                <BaseLabel>Password</BaseLabel>
                                <div class="relative">
                                    <BaseInputField :type="showPassword ? 'text' : 'password'" v-model="formData.password"  class="w-full" placeholder="Password"></BaseInputField>
                                        <button  type="button" @click="togglePasswordVisibility" class="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer">
                                            <Icon :icon="showPassword ? 'mdi:eye-off' : 'mdi:eye'" class="text-gray-400" />
                                        </button>
                                    <BaseError v-if="$validateLoginRules.password.$error">{{ $validateLoginRules.password.$errors[0].$message }}</BaseError>
                                </div>
                            </div>

                            <!-- Login Button -->
                            <div class="text-center">
                                    <button @click="login"  class="2xl:w-52 2xs:w-28 md:w-44 text-center items-center justify-center py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                                        Login
                                    </button>
                            </div>

                            <div class="text-xs mt-4">
                                <a href="/page3" class="text-[#0000FF] hover:text-blue-500 transition duration-200">Forgot Password</a>
                            </div>
                        <div class="flex items-center space-x-4">
                            <hr class="flex-grow border-t border-gray-300">
                            <span class="text-gray-500">or</span>
                            <hr class="flex-grow border-t border-gray-300">
                        </div>

                        <!-- Sign Up Link -->
                        <div class="mt-4 text-xs text-center">
                            <p>Don't have an account? <a href="/signup" class="text-[#608C54] hover:underline">Sign up</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import Login_Navbar from '@/components/Navbar/Login_Navbar.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseError from '@/components/Input-Fields/BaseError.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import Farmer6 from '@/assets/Farmer6.png';
import useVuelidate from '@vuelidate/core';
import { reactive, computed, ref } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';


const store = useStore();
const router = useRouter();

const showLoading = computed(() => store.state.showLoading.state);

// Reactive form data
const formData = reactive({
    email:'',
    password:''
})

// Show/hide password state
const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
}

const mustGoogleEmail = (value) => value.includes('@gmail.com');

// Validation rules
const loginRules = computed(() => {
    return {
        email: {
            required: helpers.withMessage('Email is required', required),
            email: helpers.withMessage('Invalid email address', email),
            mustGoogleEmail: helpers.withMessage('Your email must be a valid google email', mustGoogleEmail)
        },
        password: {
            required: helpers.withMessage('Password is required', required)
        }
    };
});

const $validateLoginRules = useVuelidate(loginRules, formData);

async function login() {
    console.log("account", formData)
    const validationResult = await $validateLoginRules.value.$validate();
    if (validationResult) {
        await store.dispatch('login', formData)
        .then((response) => {
            if(response.isSuccess == true) {
                router.push({name: 'User_Dashboard'}) 
            }
        })
    }
}

</script>