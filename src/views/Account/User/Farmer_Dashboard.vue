<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div class="flex h-screen bg-gray-100">
      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
            <!-- Header -->
            <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Welcome, Farmers Dashboard</h1>
                <div class="flex items-center space-x-4">
                    <div class="flex space-x-2">
                    <!-- Settings Icon with Dropdown -->
                    <div class="relative">
                        <Icon icon="uil:setting" width="24" height="24" style="color: white" @click="toggleDropdown" />
                        <!-- Dropdown Menu -->
                        <div v-if="dropdownVisible" class="absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48">
                          <a href="/seller-profile" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100"> Account Info </a>
                          <button class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100" @click="logout()"> Logout</button>  
                        </div>
                    </div>
                    </div>
                </div>
            </header>
    
            <!-- Dashboard Content -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 p-2">
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

                <!-- Out of Stock Products -->
                <div class="col-span-2 bg-white shadow-lg rounded-lg p-4 h-96 flex flex-col justify-between">
                    <BaseLabel class="text-xl font-bold">Product</BaseLabel>

                    <div class="flex justify-around">
                        <!-- Out of Stock Product -->
                        <div class="flex flex-col justify-center items-center text-center">
                            <div class="bg-green-200 p-4 rounded-full">
                                <Icon icon="solar:box-bold" width="36" height="36" style="color: #276d22" />
                            </div>
                            <p class="text-lg font-semibold mt-2">Out of Stock Product</p>
                            <p class="text-2xl font-bold">{{ outOfStockProducts }}</p>
                        </div>

                        <!-- All Products -->
                        <div class="flex flex-col justify-center items-center text-center">
                            <div class="bg-green-200 p-4 rounded-full">
                                <Icon icon="solar:box-bold" width="36" height="36" style="color: #276d22" />
                            </div>
                            <p class="text-lg font-semibold mt-2">All Products</p>
                            <p class="text-2xl font-bold">{{ allProducts }}</p>
                        </div>

                        <!-- Newly Added Products -->
                        <div class="flex flex-col justify-center items-center text-center">
                            <div class="bg-green-200 p-4 rounded-full">
                                <Icon icon="mdi:gift" width="36" height="36" style="color: #276d22" />
                            </div>
                            <p class="text-lg font-semibold mt-2">Newly Added Products</p>
                            <p class="text-2xl font-bold">{{ newlyAddedProducts }}</p>
                        </div>
                    </div>

                    <!-- Add Stock Button -->
                    <div class="flex justify-center mt-4">
                        <a href="/product" class="px-4 py-2 rounded-lg text-sky-700 text-sm hover:text-sky-200">
                            Add Stock
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  

<script setup>
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import { ref, computed, reactive, onMounted } from "vue";
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
const store = useStore();
const router = useRouter();
const showLoading = computed(() => store.state.showLoading.state);
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