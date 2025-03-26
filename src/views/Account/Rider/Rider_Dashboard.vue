<template>
     <div>
        <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Welcome to Rider Dashboard</h1>
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

        <div class="flex h-96 ">
            <main class="flex-1 p-6">
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                    
                    <!-- Earnings Overview -->
                    <div class="bg-gray-100 p-4 shadow rounded-lg">
                        <h3 class="text-lg font-semibold mb-2">Earnings</h3>
                        <p>Today: <span class="font-bold">{{ earnings.today }}</span></p>
                        <p>This Week: <span class="font-bold">{{ earnings.week }}</span></p>
                        <p>This Month: <span class="font-bold">{{ earnings.month }}</span></p>
                    </div>

                    <!-- Upcoming Orders -->
                    <div class="bg-gray-100 p-4 shadow rounded-lg">
                    <h3 class="text-lg font-semibold mb-2">Upcoming Orders</h3>
                    <ul>
                        <li v-for="order in upcomingOrders" :key="order.id" class="mb-1">
                        Order #{{ order.id }} - <span class="text-blue-500">{{ order.status }}</span>
                        </li>
                    </ul>
                    </div>
                </div>

                <!-- Recent Deliveries -->
                <div class="mt-6 bg-gray-100 p-4 shadow rounded-lg">
                    <h3 class="text-lg font-semibold mb-4">Recent Deliveries</h3>
                    <table class="w-full border-collapse border border-gray-300">
                        <thead>
                            <tr class="bg-gray-200 ">
                                <th class="border text-start p-2">Order ID</th>
                                <th class="border text-start p-2">Customer</th>
                                <th class="border text-start p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="delivery in recentDeliveries" :key="delivery.id">
                                <td class="border p-2">#{{ delivery.id }}</td>
                                <td class="border p-2">{{ delivery.customer }}</td>
                                <td class="border p-2 text-green-500">{{ delivery.status }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
</template>

<script setup>
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseOptionDefaultField from '@/components/Input-Fields/BaseOptionDefaultField.vue';
import BaseOptionField from '@/components/Input-Fields/BaseOptionField.vue';
import BaseSelectField from '@/components/Input-Fields/BaseSelectField.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseCheckBox from '@/components/Input-Fields/BaseCheckBox.vue';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";


const store = useStore();
const router = useRouter();

const dropdownVisible = ref(false);

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

const rider = ref({
  name: 'John Doe',
  status: 'Online',
  profileImage: 'https://via.placeholder.com/100'
});

const earnings = ref({
  today: '',
  week: '',
  month: ''
});

const upcomingOrders = ref([
  { id: 1234, status: 'Pending' },
  { id: 1235, status: 'Pending' }
]);

const recentDeliveries = ref([
  { id: 1220, customer: 'Alice Smith', status: 'Delivered' },
  { id: 1219, customer: 'Bob Johnson', status: 'Delivered' }
]);

onMounted(() => {
  // Simulating API call with static data
  console.log('Fetching data...');
});

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