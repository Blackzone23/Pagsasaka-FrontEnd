<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div>
        <header class="bg-[#285a19]  shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Welcome to Rider Profile</h1>
                <div class="relative inline-block text-left">
                <!-- Profile Picture and Settings Icon -->
                <div class="flex items-center space-x-2">
                    <img :src="riderRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover  shadow-md"/>
                    <Icon icon="uil:setting" width="24" height="24" class="cursor-pointer text-white" @click="toggleDropdown"/>
                </div>

                <!-- Dropdown Menu -->
                <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-48 bg-white rounded shadow-lg">
                    <a href="/rider_profile" class="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Account Info
                    </a>
                    <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            </div>
        </header>
        <div class="overflow-x-auto p-10">
            <BaseLabel class="text-xl font-semibold mb-4">List of Orders to be Deliver</BaseLabel>
            <div class="max-h-[400px] overflow-y-auto">
                <table class="min-w-full bg-white">
                    <thead class="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            <th class="px-4 py-2 text-start">Orders</th>
                            <th class="px-4 py-2 text-start">Ship To</th>
                            <th class="px-4 py-2 text-center">Total Amount</th>
                            <th class="px-4 py-2 text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="productList in deliveryList" :key="productList.id" class="hover:bg-gray-50">
                            <td class="px-4 py-2">{{ productList.product_name }}</td>
                            <td class="px-4 py-2">{{ productList.ship_to }}</td>
                            <td class="px-4 text-center py-2">{{ productList.total_amount }}</td>
                            <td class="px-4 py-2 text-end">
                                <button @click="claimProduct(productList.id)" class="text-white bg-green-600 hover:bg-green-500 px-5 rounded-lg text-sm">Claim</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";


const store = useStore();
const router = useRouter();

const showLoading = computed(() => store.state.showLoading.state);
const deliveryList= computed(() => store.state.Rider.productList.data);
const riderRaw = computed(() => store.state.userData.data?.user || {})
/******************************************************************
 FUNCTION FOR GETTING LIST OF ORDER
******************************************************************/
function getDeliveryList() {
    store.dispatch('Rider/getDeliveryList')
}

/******************************************************************
 FUNCTION FOR CLAIMING ORDERS
******************************************************************/
// Function to claim the product
async function claimProduct(productId) {
    if (productId) {
        try {
            const response = await store.dispatch('Rider/claimedProduct', { id: productId });
            if (response.isSuccess) {
                getDeliveryList(); // Ensure this function is defined in your setup
            }
        } catch (error) {
            console.error("Error claiming product:", error);
        }
    }
}

/******************************************************************
 FUNCTION FOR SETTING DROPDOWN
******************************************************************/
const dropdownVisible = ref(false);

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

/******************************************************************
 FUNCTION FOR LOG OUT
******************************************************************/
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

onMounted(() => {
    getDeliveryList();
})
</script>