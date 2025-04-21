<template>
  <!-- Loading screen and toast message -->
  <Loading v-if="showLoading" class="loading"></Loading>
  <Toast></Toast>

  <div class="h-screen w-full">
    <!-- Header -->
    <header class="bg-[#285a19] shadow p-4 flex justify-between items-center text-white">
      <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Payment Transaction</h1>
      <div class="flex items-center space-x-4">
        <div class="relative inline-block text-left">
          <div class="flex items-center space-x-2">
            <img :src="sellerRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover shadow-md" />
            <Icon icon="uil:setting" width="24" height="24" class="cursor-pointer text-white" @click="toggleDropdown" />
          </div>
          <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-48 bg-white rounded shadow-lg">
            <a href="/seller-profile" class="block px-4 py-2 text-sm text-black hover:bg-gray-100"> Account Info </a>
            <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
              Logout
            </button>
          </div>
        </div>
      </div>
    </header>

    <div class="container mx-auto p-4">
      <div class="flex flex-wrap items-center gap-4 mb-4">
        <button @click="refreshData" class="bg-[#608C54] py-2 px-4 sm:px-6 text-white rounded-md flex items-center gap-1 hover:bg-gray-700 transition">
          <Icon icon="material-symbols-light:refresh" width="20" height="20" />
          <span class="hidden sm:inline">Refresh</span>
        </button>
      </div>

      <div class="mb-3 space-y-3">
        <p class="text-xs sm:text-sm md:text-base">View the payment history here. It might take some time for payments to appear in the portal.</p>
      </div>

      <div class="overflow-x-auto">
        <div class="max-h-[400px] overflow-y-auto">
          <table class="w-full border-collapse border border-gray-300 rounded-md min-w-[600px]">
            <thead class="sticky top-0 bg-gray-300 z-10">
              <tr class="text-xs sm:text-sm md:text-md">
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Date
                  <button @click="sortByDate" class="ml-1">
                    <Icon icon="marketeq:up-down-arrow" width="16" height="16" />
                  </button>
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Time Slot
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Queue Number
                  <button @click="sortByQueueNumber" class="ml-1">
                    <Icon icon="marketeq:up-down-arrow" width="16" height="16" />
                  </button>
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Seller Name
                  <button @click="sortBySellerName" class="ml-1">
                    <Icon icon="marketeq:up-down-arrow" width="16" height="16" />
                  </button>
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Code
                  <button @click="sortByCode" class="ml-1">
                    <Icon icon="marketeq:up-down-arrow" width="16" height="16" />
                  </button>
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Amount
                  <button @click="sortByAmount" class="ml-1">
                    <Icon icon="marketeq:up-down-arrow" width="16" height="16" />
                  </button>
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Status
                </th>
                <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-if="!hasPayments" class="text-center">
                <td colspan="8" class="px-3 sm:px-4 py-2 text-xs sm:text-sm">No transactions found.</td>
              </tr>
              <tr v-else v-for="payment in paymentList" :key="payment.id" class="border-b border-gray-200 hover:bg-gray-200 text-xs sm:text-sm">
                <td class="px-3 sm:px-4 py-2">{{ payment.date }}</td>
                <td class="px-3 sm:px-4 py-2">{{ payment.time_slot }}</td>
                <td class="px-3 sm:px-4 py-2">{{ payment.queue_number }}</td>
                <td class="px-3 sm:px-4 py-2">{{ payment.seller_name }}</td>
                <td class="px-3 sm:px-4 py-2 break-all max-w-xs">{{ payment.validation_code }}</td>
                <td class="px-3 sm:px-4 py-2">{{ payment.amount }}</td>
                <td class="px-3 sm:px-4 py-2">{{ payment.status }}</td>
                <td class="px-3 sm:px-4 py-2">
                  <button 
                    @click="approvePayment(payment.id)" 
                    class="bg-[#608C54] text-white py-1 px-3 rounded-md text-xs hover:bg-green-700 transition"
                    :disabled="payment.status !== 'Pending'"
                  >
                    Approve
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { Icon } from "@iconify/vue";

const store = useStore();
const router = useRouter();
const showLoading = computed(() => store.state.showLoading.state);
const sellerRaw = computed(() => store.state.userData.data?.user || {});
const paymentList = ref([]); // Initialize as empty; we'll fetch from API
const dropdownVisible = ref(false);
const hasPayments = computed(() => paymentList.value && paymentList.value.length > 0);

const toastDuration = 3000;

const refreshData = async () => {
  try {
    store.dispatch('toggleLoader', true);
    const response = await store.dispatch('Admin/getPaymentRequests');
    paymentList.value = response; // Update paymentList with API data
    store.commit('showToast', {
      showToast: true,
      toastMessage: 'Data refreshed successfully',
      toastType: 'success'
    });
    setTimeout(() => {
      store.commit('showToast', {
        showToast: false,
        toastMessage: '',
        toastType: 'default'
      });
    }, toastDuration);
  } catch (error) {
    console.error('Failed to refresh data:', error);
    store.commit('showToast', {
      showToast: true,
      toastMessage: 'Failed to refresh data',
      toastType: 'error'
    });
    setTimeout(() => {
      store.commit('showToast', {
        showToast: false,
        toastMessage: '',
        toastType: 'default'
      });
    }, toastDuration);
  } finally {
    store.dispatch('toggleLoader', false);
  }
};

onMounted(() => {
  refreshData();
});

const sortByDate = () => {
  paymentList.value = [...paymentList.value].sort((a, b) => 
    a.date.localeCompare(b.date)
  );
};

const sortByQueueNumber = () => {
  paymentList.value = [...paymentList.value].sort((a, b) => 
    parseInt(a.queue_number) - parseInt(b.queue_number)
  );
};

const sortBySellerName = () => {
  paymentList.value = [...paymentList.value].sort((a, b) => 
    a.seller_name.localeCompare(b.seller_name)
  );
};

const sortByCode = () => {
  paymentList.value = [...paymentList.value].sort((a, b) => 
    a.validation_code.localeCompare(b.validation_code)
  );
};

const sortByAmount = () => {
  paymentList.value = [...paymentList.value].sort((a, b) => 
    parseFloat(a.amount) - parseFloat(b.amount)
  );
};

const approvePayment = async (id) => {
  try {
    store.dispatch('toggleLoader', true);
    const response = await store.dispatch('Admin/approvePayment', id);
    
    // The Vuex action already removes the approved payout from the state,
    // so we just need to update the local paymentList
    paymentList.value = paymentList.value.filter(payment => payment.id !== id);
    
    store.commit('showToast', {
      showToast: true,
      toastMessage: 'Payout approved successfully',
      toastType: 'success'
    });
    setTimeout(() => {
      store.commit('showToast', {
        showToast: false,
        toastMessage: '',
        toastType: 'default'
      });
    }, toastDuration);
  } catch (error) {
    console.error('Failed to approve payout:', error);
    store.commit('showToast', {
      showToast: true,
      toastMessage: 'Failed to approve payout',
      toastType: 'error'
    });
    setTimeout(() => {
      store.commit('showToast', {
        showToast: false,
        toastMessage: '',
        toastType: 'default'
      });
    }, toastDuration);
  } finally {
    store.dispatch('toggleLoader', false);
  }
};

const toggleDropdown = () => {
  dropdownVisible.value = !dropdownVisible.value;
};

const logout = async () => {
  try {
    const response = await store.dispatch('logout');
    if (response.isSuccess) {
      router.push({ name: 'Login' });
    }
  } catch (error) {
    console.error('Logout error:', error);
    store.commit('showToast', {
      showToast: true,
      toastMessage: 'Failed to logout',
      toastType: 'error'
    });
    setTimeout(() => {
      store.commit('showToast', {
        showToast: false,
        toastMessage: '',
        toastType: 'default'
      });
    }, toastDuration);
  }
};
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>