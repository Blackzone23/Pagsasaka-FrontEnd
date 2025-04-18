<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>
    
    <div class="h-screen w-full">
      <!-- Header -->
      <header class="bg-[#285a19]  shadow p-4 flex justify-between items-center text-white">
          <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Payment Transaction</h1>
          <div class="flex items-center space-x-4">
            <div class="relative inline-block text-left">
                <!-- Profile Picture and Settings Icon -->
                <div class="flex items-center space-x-2">
                <img :src="sellerRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover  shadow-md"/>
                <Icon icon="uil:setting" width="24" height="24" class="cursor-pointer text-white" @click="toggleDropdown"/>
                </div>

                <!-- Dropdown Menu -->
                <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-48 bg-white rounded shadow-lg">
                <a href="/seller-profile" class="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                    Account Info
                </a>
                <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
                    Logout
                </button>
                </div>
            </div>
          </div>
      </header>

      <div class="container mx-auto p-4">
          <!-- Buttons -->
          <div class="flex flex-wrap items-center gap-4 mb-4">
              <button @click="refreshPage" class="bg-[#608C54] py-2 px-4 sm:px-6 text-white rounded-md flex items-center gap-1 hover:bg-gray-700 transition">
                  <Icon icon="material-symbols-light:refresh" width="20" height="20" />
                  <span class="hidden sm:inline">Refresh</span>
              </button>
              <button @click="exportCSV" class="bg-gray-300 py-2 px-4 rounded-md text-sm sm:text-base hover:bg-gray-400 transition">
                  Export to CSV
              </button>
          </div>

          <!-- Search and Description -->
          <div class="mb-3 space-y-3">
              <BaseSearchField placeholder="Search Payment" class="w-full md:w-1/2" />
              <p class="text-xs sm:text-sm md:text-base">View the payment history here. It might take some time for payments to appear in the portal.</p>
          </div>

          <!-- Table Wrapper for Scrollability -->
          <div class="overflow-x-auto">
              <table class="w-full border-collapse border border-gray-300 rounded-md min-w-[600px]">
                  <thead>
                      <tr class="bg-gray-300 text-xs sm:text-sm md:text-md">
                          <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300"> Date <Icon icon="marketeq:up-down-arrow" width="16" height="16" /></th>
                          <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300"> Invoice ID <Icon icon="marketeq:up-down-arrow" width="16" height="16" /></th>
                          <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300"> Payment Method <Icon icon="marketeq:up-down-arrow" width="16" height="16" /></th>
                          <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">Amount <Icon icon="marketeq:up-down-arrow" width="16" height="16" /></th>
                      </tr>
                  </thead>
                  <tbody>
                      <tr v-for="transaction in filteredTransactions" :key="transaction.invoiceId" class="border-b border-gray-200 hover:bg-gray-200 text-xs sm:text-sm">
                          <td class="px-3 sm:px-4 py-2">{{ transaction.date }}</td>
                          <td class="px-3 sm:px-4 py-2">{{ transaction.invoiceId }}</td>
                          <td class="px-3 sm:px-4 py-2">
                              <span class="text-blue-500">GCash ****{{ transaction.gcashLastFour }}</span>
                          </td>
                          <td class="px-3 sm:px-4 py-2">₱{{ transaction.amount }}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>

</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue'
import Toast from '@/components/Alerts/Toast.vue'
import BaseSearchField from "@/components/Input-Fields/BaseSearchField.vue";
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();
const showLoading = computed(() => store.state.showLoading.state);
const sellerRaw  = computed(() => store.state.userData.data?.user || {})

const transactions = ref([
  { date: '10/19/2024', invoiceId: 'T00000000001', paymentMethod: 'GCash', gcashLastFour: '2212', amount: '124.00' },
  { date: '10/19/2024', invoiceId: 'T00000000001', paymentMethod: 'GCash', gcashLastFour: '2212', amount: '124.00' },
  { date: '10/19/2024', invoiceId: 'T00000000001', paymentMethod: 'GCash', gcashLastFour: '2212', amount: '124.00' },
]);

const search = ref('');

const filteredTransactions = computed(() => {
  return transactions.value.filter(transaction => {
    return transaction.invoiceId.includes(search.value);
  });
});

const refreshPage = () => {
  // Reloads the page to refresh the content
  window.location.reload();
};

const exportCSV = () => {
  console.log('Exporting CSV...');
};


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


<style scoped>
</style>