<template>
    <div>
        <!-- Header -->
        <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-xl font-bold">Payment Transaction</h1>
                <div class="flex items-center space-x-4">
                    <div class="flex space-x-2">
                    <!-- Settings Icon with Dropdown -->
                    <div class="relative">
                        <Icon icon="uil:setting" width="24" height="24" style="color: white" @click="toggleDropdown" />
                        <!-- Dropdown Menu -->
                        <div v-if="dropdownVisible" class="absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48">
                            <button class="w-full text-left px-4 py-2 text-sm text-black" @click="logout()">Logout</button>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
            <div class="container mx-auto p-4">
                <div class="flex mb-4 space-x-4">
                    <div>
                        <button @click="refreshPage" class="bg-[#608C54] py-2 px-6 text-white rounded-md flex hover:bg-gray-200"><Icon icon="material-symbols-light:refresh" width="24" height="24" />Refresh</button>
                    </div>
                    <button @click="exportCSV" class="bg-gray-300 py-2 px-4 rounded-md">Export to CSV</button>
                </div>

                <div class="mb-3 space-y-3">
                    <BaseSearchField placeholder="Search Payment"/>
                    <p>View the payment history in here. It might take some time for payment to show up in the portal.</p>
                </div>
                <table class="w-full border-collapse border border-gray-300 rounded-md">
                    <thead>
                        <tr class="bg-gray-300 text-md">
                            <th class="px-4 py-2 text-left border-b border-gray-300"> Date <Icon icon="marketeq:up-down-arrow" width="16" height="16" /></th>
                            <th class="px-4 py-2 text-left border-b border-gray-300"> Invoice ID <Icon icon="marketeq:up-down-arrow" width="16" height="16" /> </th>
                            <th class="px-4 py-2 text-left border-b border-gray-300"> Payment Method <Icon icon="marketeq:up-down-arrow" width="16" height="16" /> </th>
                            <th class="px-4 py-2 text-left border-b border-gray-300">Amount <Icon icon="marketeq:up-down-arrow" width="16" height="16" /></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="transaction in filteredTransactions" :key="transaction.invoiceId" class="border-b border-gray-200 hover:bg-gray-200 text-sm">
                            <td class="px-4 py-2">{{ transaction.date }}</td>
                            <td class="px-4 py-2">{{ transaction.invoiceId }}</td>
                            <td class="px-4 py-2">
                            <span v-if="transaction.paymentMethod === 'MasterCard'" class="text-red-500">
                                MasterCard ****{{ transaction.cardLastFour }}
                            </span>
                            <span v-else class="text-blue-500">GCash ****{{ transaction.gcashLastFour }}</span>
                            </td>
                            <td class="px-4 py-2">{{ transaction.amount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
    </div>
</template>

<script setup>
import BaseSearchField from "@/components/Input-Fields/BaseSearchField.vue";
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const transactions = ref([
  { date: '10/19/2024', invoiceId: 'T00000000001', paymentMethod: 'GCash', gcashLastFour: '2212', amount: '₱124.00' },
  { date: '10/19/2024', invoiceId: 'T00000000001', paymentMethod: 'GCash', gcashLastFour: '2212', amount: '₱124.00' },
  { date: '10/19/2024', invoiceId: 'T00000000001', paymentMethod: 'GCash', gcashLastFour: '2212', amount: '₱124.00' },
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

</script>


<style scoped>
</style>