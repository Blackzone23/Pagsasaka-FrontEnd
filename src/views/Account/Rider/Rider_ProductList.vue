<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div>
        <header class="bg-[#285a19] shadow p-4 flex justify-between items-center text-white">
            <h1 class="text-lg sm:text-xl md:text-2xl 2xl:text-2xl font-bold 2xs:ml-8 xs:ml-8 md:ml-10 2xl:ml-2">
                Welcome to Order List
            </h1>
            <div class="relative inline-block text-left">
                <!-- Profile Picture and Settings Icon -->
                <div class="flex items-center space-x-2">
                    <img :src="riderRaw.avatar" alt="Profile" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-md"/>
                    <Icon icon="uil:setting" width="20" height="20" class="sm:w-6 sm:h-6 cursor-pointer text-white" @click="toggleDropdown"/>
                </div>

                <!-- Dropdown Menu -->
                <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-40 sm:w-48 bg-white rounded shadow-lg">
                    <a href="/rider_profile" class="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Account Info
                    </a>
                    <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            </div>
        </header>
        
        <div class="p-4 xs:p-6 sm:p-8 md:p-10 2xl:p-12">
            <BaseLabel class="text-lg sm:text-xl md:text-2xl font-semibold mb-4">List of Orders to be Delivered</BaseLabel>
            <div class="max-h-[300px] sm:max-h-[400px] overflow-y-auto">
                <table class="min-w-full bg-white">
                    <thead class="bg-gray-100 sticky top-0 z-10">
                        <tr>
                            <th class="px-2 xs:px-4 py-2 text-start text-sm sm:text-base">Orders</th>
                            <th class="px-2 xs:px-4 py-2 text-start text-sm sm:text-base">Ship To</th>
                            <th class="px-2 xs:px-4 py-2 text-center text-sm sm:text-base">Total Amount</th>
                            <th class="px-2 xs:px-4 py-2 text-end text-sm sm:text-base">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="productList in deliveryList" :key="productList.id" class="hover:bg-gray-50">
                            <td class="px-2 xs:px-4 py-2 text-sm sm:text-base">{{ productList.product_name }}</td>
                            <td class="px-2 xs:px-4 py-2 text-sm sm:text-base">{{ productList.ship_to }}</td>
                            <td class="px-2 xs:px-4 py-2 text-center text-sm sm:text-base">{{ productList.total_amount }}</td>
                            <td class="px-2 xs:px-4 py-2 text-end">
                                <button @click="claimProduct(productList.id)" class="text-white bg-green-600 hover:bg-green-500 px-3 xs:px-5 py-1 rounded-lg text-xs sm:text-sm">
                                    Claim
                                </button>
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
const deliveryList = computed(() => store.state.Rider.productList.data);
const riderRaw = computed(() => store.state.userData.data?.user || {});

/******************************************************************
 FUNCTION FOR GETTING LIST OF ORDER
******************************************************************/
function getDeliveryList() {
    store.dispatch('Rider/getDeliveryList');
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
                getDeliveryList();
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
            router.push({ name: 'Login' });
        }
    } catch (error) {
        console.error('Logout error:', error);
    }
};

onMounted(() => {
    getDeliveryList();
});
</script>