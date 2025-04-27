<template>
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>
    
    <div>
        <header class="bg-[#285a19] shadow p-4 flex justify-between items-center text-white">
            <h1 class="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-2xl font-bold 2xs:ml-8 xs:ml-8 sm:ml-6 md:ml-8 lg:ml-2">
                Welcome to Rider Dashboard
            </h1>
            <div class="relative inline-block text-left">
                <div class="flex items-center space-x-1 sm:space-x-2">
                    <img :src="riderRaw.avatar" alt="Profile" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover border border-green-400 shadow-md"/>
                    <Icon icon="uil:setting" width="20" height="20" sm:width="24" sm:height="24" class="cursor-pointer text-white" @click="toggleDropdown"/>
                </div>
                <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-40 sm:w-48 bg-white rounded shadow-lg">
                    <a href="/rider_profile" class="block px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-black hover:bg-gray-100">
                        Account Info
                    </a>
                    <button @click="logout" class="block w-full text-left px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm text-black hover:bg-gray-100">
                        Logout
                    </button>
                </div>
            </div>
        </header>

        <div class="flex min-h-screen">
            <main class="flex-1 p-2 xs:p-4 sm:p-6">
                <div class="p-2 xs:p-3 sm:p-4">
                    <h3 class="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-4">Your Earnings</h3>
                    <div class="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 xs:gap-3 sm:gap-4">
                        <div class="bg-white p-3 xs:p-4 rounded-lg shadow-md border border-gray-200">
                            <h4 class="text-xs xs:text-sm text-gray-500">Today</h4>
                            <p class="text-lg xs:text-xl sm:text-2xl font-bold text-green-800">{{ riderRaw.cod || '0.00' }}</p>
                        </div>
                    </div>
                </div>

                <div class="p-1 xs:p-3 sm:p-4">
                    <button @click="toggleDeliveryHistory" class="flex items-center gap-2 px-3 py-1 xs:px-4 xs:py-2 sm:px-6 sm:py-3 bg-green-800 text-white rounded-lg hover:bg-green-600 text-xs xs:text-sm sm:text-base">
                        <Icon icon="ic:outline-history" width="24" height="24"  style="color: #f9fffb" />
                        {{ showDeliveryHistory ? 'Hide Delivery History' : 'View Delivery History' }}
                    </button>
                </div>

                <div v-if="showDeliveryHistory" class="p-2 xs:p-3 sm:p-4">
                    <h3 class="text-base sm:text-lg md:text-xl font-semibold mt-4 xs:mt-5 sm:mt-6 mb-2">Delivery History</h3>
                    <div class="mb-4 flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                        <div class="mb-2 sm:mb-0">
                            <label for="statusFilter" class="text-xs xs:text-sm sm:text-base font-medium mr-2">Filter by Status:</label>
                            <select v-model="filters.status" id="statusFilter" class="border rounded p-1 xs:p-2 text-xs xs:text-sm sm:text-base" @change="applyFilters">
                                <option value="">All Statuses</option>
                                <option value="Order delivered">Order Delivered</option>
                                <option value="Cancelled">Cancelled</option>
                            </select>
                        </div>
                        <div class="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                            <div class="mb-2 sm:mb-0">
                                <label for="startDate" class="text-xs xs:text-sm sm:text-base font-medium mr-2">Date:</label>
                                <input v-model="filters.startDate"  id="startDate" type="date" class="border rounded p-1 xs:p-2 text-xs xs:text-sm sm:text-base" @change="applyFilters"/>
                            </div>
                        </div>
                        <button @click="clearFilters" class="mt-2 sm:mt-0 px-3 py-1 xs:px-4 xs:py-2 bg-gray-300 rounded hover:bg-gray-400 text-xs xs:text-sm sm:text-base">
                            Clear Filters
                        </button>
                    </div>
                    <div class="max-h-[300px] xs:max-h-[350px] sm:max-h-[400px] overflow-y-auto overflow-x-auto border border-gray-300 rounded">
                        <table class="w-full border-collapse min-w-[600px]">
                            <thead class="bg-gray-200 sticky top-0 z-10">
                                <tr>
                                    <th class="border text-start p-1 xs:p-2 bg-gray-200 text-xs xs:text-sm sm:text-base">Product Name</th>
                                    <th class="border text-start p-1 xs:p-2 bg-gray-200 text-xs xs:text-sm sm:text-base">Total Amount</th>
                                    <th class="border text-start p-1 xs:p-2 bg-gray-200 text-xs xs:text-sm sm:text-base">Status</th>
                                    <th class="border text-start p-1 xs:p-2 bg-gray-200 text-xs xs:text-sm sm:text-base">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="history in filteredDeliveryHistory" :key="history.id" class="cursor-pointer hover:bg-gray-200">
                                    <td class="border p-1 xs:p-2 text-xs xs:text-sm sm:text-base">{{ history.product_name }}</td>
                                    <td class="border p-1 xs:p-2 text-xs xs:text-sm sm:text-base">{{ history.total_amount }}</td>
                                    <td class="border p-1 xs:p-2 text-green-500 text-xs xs:text-sm sm:text-base">{{ history.status }}</td>
                                    <td class="border p-1 xs:p-2 text-xs xs:text-sm sm:text-base">{{ formatDate(history.created_at) }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div v-if="!selectedTransit && !showDeliveryHistory" class="p-1 xs:p-3 sm:p-4">
                    <h3 class="text-base sm:text-lg md:text-xl font-semibold mt-4 xs:mt-5 sm:mt-6 mb-2">Intransit Deliveries</h3>
                    <div class="max-h-[300px] xs:max-h-[350px] sm:max-h-[400px] overflow-y-auto overflow-x-auto border border-gray-300 rounded">
                        <table class="w-full border-collapse min-w-[600px]">
                            <thead class="bg-gray-200 sticky top-0 z-10">
                                <tr>
                                    <th class="border text-start p-1 xs:p-2 bg-gray-200 text-xs xs:text-sm sm:text-base">Customer Name</th>
                                    <th class="border text-start p-1 xs:p-2 bg-gray-200 text-xs xs:text-sm sm:text-base">Ship to</th>
                                    <th class="border text-start p-1 xs:p-2 bg-gray-200 text-xs xs:text-sm sm:text-base">Quantity</th>
                                    <th class="border text-start p-1 xs:p-2 bg-gray-200 text-xs xs:text-sm sm:text-base">Total Amount</th>
                                    <th class="border text-start p-1 xs:p-2 bg-gray-200 text-xs xs:text-sm sm:text-base">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in intransitListData" :key="order.id" @click="handleOrderClick(order)" class="cursor-pointer hover:bg-gray-200">
                                    <td class="border p-1 xs:p-2 text-xs xs:text-sm sm:text-base">{{ order.customer_name }}</td>
                                    <td class="border p-1 xs:p-2 text-xs xs:text-sm sm:text-base">{{ order.ship_to }}</td>
                                    <td class="border p-1 xs:p-2 text-xs xs:text-sm sm:text-base">{{ order.quantity }}</td>
                                    <td class="border p-1 xs:p-2 text-xs xs:text-sm sm:text-base">{{ order.total_amount }}</td>
                                    <td class="border p-1 xs:p-2 text-green-500 text-xs xs:text-sm sm:text-base">{{ order.status }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div v-else-if="selectedTransit" class="max-w-full xs:max-w-md sm:max-w-lg mx-auto mt-6 xs:mt-8 sm:mt-10 p-3 xs:p-4 sm:p-6 bg-white shadow-md rounded-lg">
                    <h2 class="text-base xs:text-lg sm:text-xl font-bold text-center">Upload Image for Order #{{ selectedTransit.id }}</h2>
                    <div class="mt-2 xs:mt-3 sm:mt-4 flex flex-col items-center">
                        <input type="file" @change="handleImageUpload" accept="image/*,application/pdf" class="w-full border p-1 xs:p-2 rounded text-xs xs:text-sm" />
                        <BaseError v-if="$validateimagerules.image.$error" class="text-xs xs:text-sm">{{ $validateimagerules.image.$errors[0].$message }}</BaseError>
                        <button @click="sendImage" class="mt-2 xs:mt-3 sm:mt-4 px-4 xs:px-5 sm:px-6 py-1 xs:py-1.5 sm:py-2 bg-green-800 text-white rounded-lg hover:bg-green-600 text-xs xs:text-sm sm:text-base">
                            Upload
                        </button>
                    </div>
                    <div class="mt-2 xs:mt-3 sm:mt-4 flex justify-between">
                        <button @click="goBack" class="px-3 xs:px-4 py-1 xs:py-1.5 sm:py-2 bg-gray-300 rounded text-xs xs:text-sm sm:text-base">
                            Back
                        </button>
                        <button @click="cancelOrder" class="px-3 xs:px-4 py-1 xs:py-1.5 sm:py-2 bg-red-500 text-white rounded hover:bg-red-600 text-xs xs:text-sm sm:text-base">
                            Cancel Order
                        </button>
                    </div>
                </div>        
            </main>
        </div>
    </div>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue';
import Toast from '@/components/Alerts/Toast.vue';
import BaseError from '@/components/Input-Fields/BaseError.vue';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const intransitListData = computed(() => store.state.Rider.intransitList.data);
const deliveryHistoryList = computed(() => store.state.Rider.history.data);
const earningList = computed(() => store.state.Rider.earn.data);
const riderRaw = computed(() => store.state.userData.data?.user || {});

/******************************************************************
FUNCTION FOR FILTER
******************************************************************/
// Filter State
const filters = reactive({
    status: '',
    startDate: '',
});

// Computed property for filtered delivery history
const filteredDeliveryHistory = computed(() => {
    let filteredList = deliveryHistoryList.value || [];

    // Filter by status
    if (filters.status) {
        filteredList = filteredList.filter((history) => {
            const matches = history.status.toLowerCase() === filters.status.toLowerCase();
            return matches;
        });
    }

    // Filter by date (compare only date part)
    if (filters.startDate) {
        filteredList = filteredList.filter((history) => {
            if (!history.created_at) {
                return false;
            }
            const historyDate = new Date(history.created_at);
            const filterDate = new Date(filters.startDate);
            // Normalize to date only (remove time)
            const historyDateOnly = new Date(historyDate.getFullYear(), historyDate.getMonth(), historyDate.getDate());
            const filterDateOnly = new Date(filterDate.getFullYear(), filterDate.getMonth(), filterDate.getDate());
            const matches = historyDateOnly.getTime() === filterDateOnly.getTime();
            return matches;
        });
    }
    return filteredList;
});

// Function to apply filters (triggered on input change)
function applyFilters() {
    // No need to do anything here since filteredDeliveryHistory is reactive
}

// Function to clear filters
function clearFilters() {
    filters.status = '';
    filters.startDate = '';
}

// Function to format date (assuming created_at is a date string)
function formatDate(dateString) {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    });
}

/******************************************************************
FUNCTION FOR INTRANSIT LIST
******************************************************************/
function getHistoryList() {
    store.dispatch('Rider/getHistoryList');
}

/******************************************************************
FUNCTION FOR INTRANSIT LIST
******************************************************************/
function getIntransitList() {
    store.dispatch('Rider/getIntransitList');
}

/******************************************************************
FUNCTION FOR EARNINGS
******************************************************************/
function getRiderDasboardList() {
    store.dispatch('Rider/getRiderDasboardList');
}

/******************************************************************
FUNCTION FOR DELIVERY HISTORY
******************************************************************/
const showDeliveryHistory = ref(false);

function toggleDeliveryHistory() {
    showDeliveryHistory.value = !showDeliveryHistory.value;
}

const selectedTransit = ref(null);

const handleOrderClick = (order) => {
    selectedTransit.value = order;
    showDeliveryHistory.value = false; // Hide delivery history when selecting an order
};

/******************************************************************
FUNCTION FOR UPLOAD IMAGE
******************************************************************/
const imageFile = ref(null);

const imageData = reactive({
    image: '',
});

const handleImageUpload = (event) => {
    imageData.image = event.target.files[0];
};

// Validation rules
const transitRules = computed(() => {
    return {
        image: {
            required: helpers.withMessage('image is required', required),
        },
    };
});

const $validateimagerules = useVuelidate(transitRules, imageData);

async function sendImage() {
    const validationResult = await $validateimagerules.value.$validate();
    if (!validationResult) return; // Stop execution if validation fails

    if (!selectedTransit.value) {
        console.error("Error: selectedTransit is undefined");
        return;
    }

    const formData = new FormData();
    formData.append('image', imageData.image);
    formData.append('id', selectedTransit.value.id);

    await store.dispatch('Rider/sendImage', { id: selectedTransit.value.id, formData })
        .then((response) => {
            if (response.isSuccess) {
                router.push({ name: 'Rider_Dashboard' });
            }
        });
}

const goBack = () => {
    selectedTransit.value = null;
    imageFile.value = null;
};

/******************************************************************
FUNCTION FOR CANCEL ORDER
******************************************************************/
async function cancelOrder() {
    if (!selectedTransit.value) {
        return;
    }

    try {
        const response = await store.dispatch('Rider/cancelOrder', { id: selectedTransit.value.id });
        if (response.isSuccess) {
            selectedTransit.value = null; // Clear selected order
            imageFile.value = null; // Clear image file
            getIntransitList(); // Refresh the intransit list
        }
    } catch (error) {
        console.error('Cancel order error:', error);
    }
}

/******************************************************************
FUNCTION FOR SETTINGS
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
    getIntransitList();
    getHistoryList();
    getRiderDasboardList(); // Fetch earnings on component mount
});
</script>

<style scoped>
@media (max-width: 400px) {
    .min-w-\[600px\] {
        min-width: 300px;
    }
}
</style>