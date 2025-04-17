<template>
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
                <div v-if="!selectedTransit" class="p-4">
                    <h3 class="text-lg font-semibold mt-6 mb-2">Intransit Deliveries</h3>
                    <div class="max-h-[400px] overflow-y-auto border border-gray-300 rounded">
                        <table class="w-full border-collapse">
                            <thead class="bg-gray-200 sticky top-0 z-10">
                                <tr>
                                <th class="border text-start p-2 bg-gray-200">Customer Name</th>
                                <th class="border text-start p-2 bg-gray-200">Ship to</th>
                                <th class="border text-start p-2 bg-gray-200">Quantity</th>
                                <th class="border text-start p-2 bg-gray-200">Total Amount</th>
                                <th class="border text-start p-2 bg-gray-200">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="order in intransitListData" :key="order.id" @click="handleOrderClick(order)" class="cursor-pointer hover:bg-gray-200">
                                <td class="border p-2">{{ order.customer_name }}</td>
                                <td class="border p-2">{{ order.ship_to }}</td>
                                <td class="border p-2">{{ order.quantity }}</td>
                                <td class="border p-2">{{ order.total_amount }}</td>
                                <td class="border p-2 text-green-500">{{ order.status }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Upload Image Section -->
                <div v-else class="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
                    <h2 class="text-xl font-bold text-center">Upload Image for Order #{{ selectedTransit.id }}</h2>
                    
                    <div class="mt-4 flex flex-col items-center">
                        <input type="file" @change="handleImageUpload" accept="image/*,application/pdf" class="w-full border p-2 rounded" />
                        <BaseError v-if="$validateimagerules.image.$error">{{ $validateimagerules.image.$errors[0].$message }}</BaseError>
                        <button @click="sendImage" class="mt-4 px-6 py-2 bg-green-800 text-white rounded-lg hover:bg-green-600">
                            Upload
                        </button>
                    </div>

                    <button @click="goBack" class="mt-4 px-4 py-2 bg-gray-300 rounded">
                        Back
                    </button>
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

const intransitListData= computed(() => store.state.Rider.intransitList.data);
const riderRaw = computed(() => store.state.userData.data?.user || {})
/******************************************************************
FUNCTION FOR INTRANSIT LIST
******************************************************************/
function getIntransitList() {
    store.dispatch('Rider/getIntransitList')
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


const selectedTransit = ref(null);

const handleOrderClick = (order) => {
    selectedTransit.value = order;
};


const uploadImage = () => {
    if (!imageFile.value) {
        alert('Please select an image.');
        return;
    }

    console.log('Uploading image for order:', selectedTransit.value.id);
};


/******************************************************************
FUNCTION FOR UP
******************************************************************/
const imageFile = ref(null);

const imageData = reactive({
    image:'',
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

    // Ensure selectedTransit exists
    if (!selectedTransit.value) {
        console.error("Error: selectedTransit is undefined");
        return;
    }

    const formData = new FormData();
    formData.append('image', imageData.image);
    formData.append('id', selectedTransit.value.id); // This line was causing the error

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
})
</script>