<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div class="flex min-h-screen bg-gradient-to-b from-green-50 to-gray-100">
        <!-- Main Content -->
        <div class="flex-1 flex flex-col">
            <!-- Header -->
            <header class="bg-[#285a19] shadow-lg p-4 flex justify-between items-center text-white">
                <h1 class="text-xl md:text-2xl font-semibold tracking-tight">Farmer's Dashboard</h1>
                <div class="flex items-center space-x-6">
                    <!-- Settings Icon with Dropdown -->
                    <div class="relative">
                        <div class="flex items-center space-x-3 cursor-pointer" @click="toggleDropdown">
                            <img :src="sellerRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover ring-2 ring-white/20"/>
                            <Icon icon="uil:setting" width="24" height="24" class="text-white/80 hover:text-white"/>
                        </div>
                        <!-- Dropdown Menu -->
                        <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100">
                            <a href="/seller-profile" class="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-t-xl">
                                Account Info
                            </a>
                            <button @click="logout" class="block w-full text-left px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-b-xl">
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <!-- Dashboard Content -->
            <div class="mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 gap-6">
                    <!-- Product Stats Card -->
                    <div class="bg-white rounded-2xl shadow-md p-6">
                        <div class="flex justify-between items-center mb-6">
                            <BaseLabel class="text-2xl font-semibold text-gray-800">Product Overview</BaseLabel>
                            <a href="/product" class="inline-flex items-center px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700 transition-colors">
                                <Icon icon="mdi:plus" class="mr-2" />
                                Add Stock
                            </a>
                        </div>

                        <!-- Product Stats -->
                        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div class="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-white rounded-xl">
                                <div class="p-3 bg-green-100 rounded-full mb-3">
                                    <Icon icon="solar:box-bold" width="28" height="28" style="color: #15803d" />
                                </div>
                                <p class="text-sm font-medium text-gray-600">Total Products</p>
                                <p class="text-2xl font-bold text-gray-800">{{ dashboardStats.total_products || 0 }}</p>
                            </div>
                            <div class="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-white rounded-xl">
                                <div class="p-3 bg-green-100 rounded-full mb-3">
                                    <Icon icon="solar:cart-bold" width="28" height="28" style="color: #15803d" />
                                </div>
                                <p class="text-sm font-medium text-gray-600">Total Sales Quantity</p>
                                <p class="text-2xl font-bold text-gray-800">{{ dashboardStats.total_sales_quantity || 0 }}</p>
                            </div>
                            <div class="flex flex-col items-center text-center p-4 bg-gradient-to-br from-green-50 to-white rounded-xl">
                                <div class="p-3 bg-green-100 rounded-full mb-3">
                                    <Icon icon="solar:wad-of-money-bold" width="28" height="28" style="color: #15803d" />
                                </div>
                                <p class="text-sm font-medium text-gray-600">Total Sales Amount</p>
                                <p class="text-2xl font-bold text-gray-800">₱{{ dashboardStats.total_sales_amount || '0.00' }}</p>
                            </div>
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
import { ref, computed, onMounted } from "vue";
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';

const store = useStore();
const router = useRouter();
const showLoading = computed(() => store.state.showLoading.state);
const sellerRaw = computed(() => store.state.userData.data?.user || {});
const dashboardStats = computed(() => store.state.User.allProduct.data);

/******************************************************************
FUNCTION FOR ORDER
******************************************************************/
function getDasboardList() {
    store.dispatch('User/getDasboardList');
}

onMounted(() => {
  getDasboardList();
});

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