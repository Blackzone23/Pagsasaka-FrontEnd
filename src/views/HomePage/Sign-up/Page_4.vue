<template>
    <div>
        <SignUp_Navbar/>
        <div class="2xl:p-10 2xs:p-0 md:p-5">
            <div class="border-2 border-gray-300  rounded-lg bg-white p-10 shadow-lg">
                <div class="bg-white min-h-screen flex flex-col items-center space-y-2">
                    <!-- Logo at the top -->
                    <img :src="Logo2" alt="Logo2" class="h-16 mb-2">
                    
                    <!-- Centered Box -->
                    <div class="w-96 p-10 rounded-lg shadow-lg text-start space-y-6 border-2 border-[#608C54]">
                        <h2 class="text-xl font-semibold text-[#608C54]">Create an Account</h2>
                        
                        <!-- First Name Field -->
                        <div class="text-center flex flex-col text-xs space-y-4">
                            <h1 class="font-semibold text-sm">What product category you will sell</h1>
                            <p>Selecting the correct category for your product ensures optimal placement and visibility within our platform’s algorithm</p>
                        </div>

                        <div class="space-y-3">
                            <h2 class="text-xs font-semibold text-[#608C54]">Select Categories</h2>
                            <BaseCheckBox v-for="category in categories" :key="category" :id="`category-${category}`" :label="category" :value="category" :modelValue="selectedCategory.includes(category)" @update:modelValue="(isChecked) => handleSelect(category, isChecked)" />
                        </div>
                        
                        <div class="text-xs text-start">
                            <p><span class="text-[#FF0000]">Note:</span> You may select up to three categories. Listing products outside of your chosen categories may lead to account restrictions</p>
                        </div>
                        
                        <!-- Sign Up Button -->
                        <a href="/page5" class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200 text-center block">
                            Continue
                        </a>
                         <!-- <button class="w-full py-2 bg-[#608C54] text-white text-sm font-medium rounded-full hover:bg-[#4e7344] transition duration-200">
                            Continue
                        </button> -->

                        <div class="text-xs text-center">
                            <p>Already have an account?<a href="/login" class="text-[#608C54] hover:underline">Sign in</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Logo from '@/assets/Logo.png';
import Logo2 from '@/assets/Logo2.png';
import SignUp_Navbar from '@/components/Navbar/SignUp_Navbar.vue';
import BaseCheckBox from '@/components/Input-Fields/BaseCheckBox.vue';
import { ref} from 'vue';


const selectedCategory  = ref([]);
const categories = ['Seeds and Saplings', 'Fruits', 'Vagetables', 'Raw materials', 'Processed','Flowers & Plants'];

// Handle checkbox selection
function handleSelect(category, isChecked) {
  if (isChecked) {
    selectedCategory.value.push(category);  // Add the category if checked
  } else {
    selectedCategory.value = selectedCategory.value.filter(item => item !== category);  // Remove if unchecked
  }
}
</script>