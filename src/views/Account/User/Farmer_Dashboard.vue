<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div class="flex h-screen bg-gray-100">
      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
            <!-- Header -->
            <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-xl font-bold">Welcome, Farmers Dashboard</h1>
                <div class="flex items-center space-x-4">
                    <div class="flex space-x-2">
                    <!-- Settings Icon with Dropdown -->
                    <div class="relative">
                        <Icon icon="uil:setting" width="24" height="24" style="color: white" @click="toggleDropdown" />
                        <!-- Dropdown Menu -->
                        <div v-if="dropdownVisible" class="absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48">
                            <button class="w-full text-left px-4 py-2 text-sm text-black">Account Info</button>
                            <button class="w-full text-left px-4 py-2 text-sm text-black" @click="logout()">Logout</button>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
    
            <!-- Dashboard Content -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                <!-- Total Sales -->
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <h3 class="font-semibold text-lg">Total Sales</h3>
                    <p class="text-xl font-bold mt-2">₱ {{ totalSales.toFixed(2) }}</p>
                </div>

                <!-- Open Orders -->
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <h3 class="font-semibold text-lg">Open Orders</h3>
                    <p class="text-xl font-bold mt-2">{{ openOrders }}</p>
                    <Icon icon="dashicons:arrow-down" width="32" height="32" style="color: #276d22" />
                </div>

                <!-- Buyers Message -->
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <h3 class="font-semibold text-lg">Buyers Message</h3>
                    <p class="text-xl font-bold mt-2">{{ buyersMessage }}</p>
                    <Icon icon="dashicons:arrow-down" width="32" height="32" style="color: #276d22" />
                </div>

                <!-- Your Balance -->   
                <div class="bg-white shadow-lg rounded-lg p-4">
                    <!-- Your Balance Section -->
                    <h1 class="font-semibold text-lg">Your Balance</h1>
                    <p class="text-xl font-bold mt-2">₱ {{ balance.toFixed(2) }}</p>

                    <!-- Toggle Arrow -->
                    <button @click="opentoggleWithdrawalModal" class="focus:outline-none">
                    <Icon icon="dashicons:arrow-down" width="32" height="32" :style="{ color: '#276d22', transform: showWithdrawalModal ? 'rotate(180deg)' : 'rotate(0deg)' }" />
                    </button>

                    <!-- Dynamic Content: Show Withdrawal Section Only When Modal is Open -->
                    <div v-if="showWithdrawalModal" class="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 transition-all duration-500">
                        <div class="bg-white rounded-lg p-5 w-1/3">
                            <div class="text-end">
                            <!-- Close Button -->
                            <button class="text-gray-500 hover:text-gray-700" @click="closetoggleWithdrawalModal">
                                <Icon icon="fontisto:close" width="1.2rem" height="1.2rem" style="color: #5D5F5D" />
                            </button>
                            </div>

                            <!-- Conditional Modal Content -->
                            <div v-if="!isProcessing">
                                <BaseLabel class="font-semibold text-xl">Withdrawal</BaseLabel>
                                <p class="text-gray-600 text-sm">Enter the amount you'd like to withdraw:</p>
                                <BaseInputField v-model="withdrawalAmount" class="border rounded-lg p-2 w-full mt-2" placeholder="₱ Enter amount" @input="validateNumber" />
                                
                                <!-- Phone Number Input -->
                                <BaseLabel class="font-semibold text-xl mt-4">Gcash Number</BaseLabel>
                                <BaseInputField v-model="phoneNumber" class="border rounded-lg p-2 w-full mt-2" placeholder="Enter phone number" @input="validatePhoneNumber" />

                                <div class="mt-4 flex justify-end">
                                    <button @click="confirmWithdrawal" class="bg-[#608C54] text-white text-sm px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                                    Confirm Withdrawal
                                    </button>
                                </div>
                            </div>
                            
                            <!-- Withdrawal History -->
                            <BaseLabel class="font-semibold text-lg">Withdrawal History</BaseLabel>
                            <div class="mt-6 overflow-y-auto max-h-60">
                                <ul class="list-none p-0">
                                    <li v-for="(history, index) in withdrawalHistory" :key="index" class="border-b py-2 text-sm">
                                    <p>₱ {{ history.amount.toFixed(2) }} - {{ history.date }}</p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- All Products -->
                <div class="col-span-2 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-6">
                    <!-- Product Label -->
                    <BaseLabel class="text-lg font-bold ">Product</BaseLabel>

                    <!-- Content Section -->
                    <div class="flex items-center justify-center text-center space-x-16">
                        <!-- All Products -->
                        <div class="flex flex-col items-center text-center">
                        <div class="bg-green-200 p-4 rounded-full">
                            <Icon icon="solar:box-bold" width="36" height="36"  style="color: #276d22" />
                        </div>
                        <p class="text-lg font-semibold mt-2">All Products</p>
                        <p class="text-2xl font-bold">{{ allProducts }}</p>
                        </div>

                        <!-- Newly Added Products -->
                        <div class="flex flex-col items-center text-center">
                        <div class="bg-green-200 p-4 rounded-full">
                            <Icon icon="mdi:gift" width="36" height="36"  style="color: #276d22" />
                        </div>
                        <p class="text-lg font-semibold mt-2">Newly Added Products</p>
                        <p class="text-2xl font-bold">{{ newlyAddedProducts }}</p>
                        </div>
                    </div>

                    <!-- Add New Product Link -->
                    <a href="/product" class="text-end px-4 py-2 rounded-lg text-sky-700 text-sm hover:text-sky-200">
                        Add New Product
                    </a>
                </div>



                <!-- Out of Stock Products -->
                <div class="col-span-2 bg-white shadow-lg rounded-lg p-4 flex flex-col space-y-4">
                    <BaseLabel class="text-lg font-bold">Product</BaseLabel>

                    <div class="flex flex-col justify-center items-center text-center flex-grow">
                        <div class="bg-green-200 p-4 rounded-full">
                            <Icon icon="solar:box-bold" width="36" height="36"  style="color: #276d22" />
                        </div>
                        <p class="text-lg font-semibold mt-2">Out of Stock Product</p>
                        <p class="text-2xl font-bold">{{ outOfStockProducts }}</p>
                    </div>

                    <a href="/product" class="text-end px-4 py-2 rounded-lg text-sky-700 text-sm hover:text-sky-200">
                        Add Stock
                    </a>
                </div>
            </div>
        </div>
    </div>
  </template>
  

<script setup>
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import { reactive, computed, ref } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
const store = useStore();
const router = useRouter();

/******************************************************************
 FUNCTION INSIDE THE DASHBOARD
******************************************************************/
const totalSales = ref(500.00);
const openOrders = ref(2);
const buyersMessage = ref(0);
const allProducts = ref(4);
const newlyAddedProducts = ref(2);
const outOfStockProducts = ref(1);

/******************************************************************
 FUNCTION FOR LOGOUT
******************************************************************/
const balance = ref(1000);  // Example balance
const showWithdrawalModal = ref(false);
const isProcessing = ref(false);

const withdrawalAmount = ref('');
const phoneNumber = ref('');
const withdrawalHistory = ref([
  { amount: 500, date: '2024-11-30' },
  { amount: 200, date: '2024-11-28' },
]);

// Method to toggle the withdrawal modal
const opentoggleWithdrawalModal = () => {
  showWithdrawalModal.value = !showWithdrawalModal.value;
};

// Method to close the withdrawal modal
const closetoggleWithdrawalModal = () => {
  showWithdrawalModal.value = false;
};

// Method to validate the withdrawal amount (add your logic here)
const validateNumber = () => {
  // Add validation for the withdrawal amount if needed
};

// Method to validate the phone number (add your logic here)
const validatePhoneNumber = () => {
  // Add validation for phone number if needed
};

// Method to confirm the withdrawal
const confirmWithdrawal = () => {
  alert(`Confirmed withdrawal of ₱ ${withdrawalAmount.value}`);
};
/******************************************************************
 FUNCTION FOR LOGOUT
******************************************************************/
  const dropdownVisible = ref(false);
  
  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
  };
  
  const logout = async () => {
  try {
    const response = await store.dispatch('logout');
    if (response.isSuccess) {
      router.push({ name: 'Login' }); // Redirect to the Login page
    }
  } catch (error) {
    console.error('Logout error:', error); // Handle any errors
  }
};

  </script>