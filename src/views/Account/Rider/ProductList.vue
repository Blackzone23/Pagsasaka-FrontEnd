<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div>
        <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Welcome to List of Orders</h1>
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
            
            <div class="overflow-x-auto p-10">
                <BaseLabel class="text-xl font-semibold">List of Orders to be Deliver</BaseLabel>
                <table class="min-w-full bg-white">
                    <thead>
                        <tr class="bg-gray-100">
                        <th class="px-4 py-2 text-start">Orders</th>
                        <th class="px-4 py-2 text-end">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="productList in deliveryList" :key="productList.id" class="hover:bg-gray-50">
                            <td class="px-4 py-2">{{ productList.product_name }}</td>
                            <td class="px-4 py-2 text-end">
                                <button @click="claimProduct(productList.id)" class="text-white bg-green-600 hover:bg-green-500 px-5 rounded-lg text-sm">Claim</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
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