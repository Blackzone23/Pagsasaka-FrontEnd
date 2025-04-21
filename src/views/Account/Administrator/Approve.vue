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
                <button @click="refreshPage" class="bg-[#608C54] py-2 px-4 sm:px-6 text-white rounded-md flex items-center gap-1 hover:bg-gray-700 transition">
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
                        <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">Date</th>
                        <th class="px-3 sm:px-4 py-2 text-center border-b border-gray-300"> Que Number</th>
                        <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">Seller Name </th>
                        <th class="px-3 sm:px-4 py-2 text-center border-b border-gray-300"> Code</th>
                        <th class="px-3 sm:px-4 py-2 text-left border-b border-gray-300">Amount</th>
                        <th class="px-3 sm:px-4 py-2 text-center border-b border-gray-300"> Status</th>
                        <th class="px-3 sm:px-4 py-2 text-end border-b border-gray-300"> Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="!hasPayments" class="text-center">
                        <td colspan="7" class="px-3 sm:px-4 py-2 text-xs sm:text-sm">No transactions found.</td>
                    </tr>
                    <tr v-else v-for="approve in approveList" :key="approve.id" class="border-b border-gray-200 hover:bg-gray-200 text-xs sm:text-sm">
                        <td class="px-3 sm:px-4 py-2">{{ approve.date }}</td>
                        <td class="px-3 sm:px-4 py-2 text-center">{{ approve.queue_number }}</td>
                        <td class="px-3 sm:px-4 py-2">{{ approve.seller_name }}</td>
                        <td class="px-3 sm:px-4 py-2 break-all max-w-xs">{{ approve.validation_code }}</td>
                        <td class="px-3 sm:px-4 py-2">{{ approve.amount }}</td>
                        <td class="px-3 sm:px-4 py-2 text-center">{{ approve.status }}</td>
                        <td class="px-3 sm:px-4 py-2 text-end ">
                        <span class="bg-gray-300 text-gray-700 py-1 px-3 rounded-md text-xs">
                            Approved
                        </span>
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
const approveList= computed(() => store.state.Administrator.approve.data);
const sellerRaw = computed(() => store.state.userData.data?.user || {});

const dropdownVisible = ref(false);
const hasPayments = computed(() => approveList.value && approveList.value.length > 0);
const toastDuration = 3000;


/******************************************************************
FUNCTION FOR APPROVE LIST
******************************************************************/
function getApproveRequests() {
    store.dispatch('Administrator/getApproveRequests');
}


onMounted(() => {
  getApproveRequests();
})

const refreshPage = () => {
  location.reload();
}

/******************************************************************
FUNCTION FOR LOG OUT
******************************************************************/
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
  }
};
</script>

<style scoped>
/* You can add additional styles here if needed */
</style>