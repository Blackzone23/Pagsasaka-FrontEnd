<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>
  
    <div class="flex h-screen bg-gray-100">
        <div class="flex-1 flex flex-col">
            <!-- Dashboard Content -->
            <main class="px-2 sm:px-4 pt-20 flex flex-col gap-4 overflow-auto">
                <div>
                    <!-- Counts Section -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                            <div>
                                <h3 class="text-sm sm:text-base font-semibold text-gray-700">Total Riders</h3>
                                <p class="text-lg sm:text-xl font-bold text-gray-900">{{ peopleList.total_riders }}</p>
                            </div>
                            <Icon icon="mdi:motorbike" class="w-8 h-8 text-blue-600" />
                        </div>
                        <div class="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                            <div>
                                <h3 class="text-sm sm:text-base font-semibold text-gray-700">Total Farmers</h3>
                                <p class="text-lg sm:text-xl font-bold text-gray-900">{{ peopleList.total_farmers }}</p>
                            </div>
                            <Icon icon="mdi:store" class="w-8 h-8 text-green-700" />
                        </div>
                    </div>
  
                    <!-- Approve Modal -->
                    <div v-if="isApproveModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[90%] sm:w-[410px] text-center">
                            <div class="flex justify-center">
                                <Icon icon="mdi:approve" class="w-16 h-16" style="color: #188b47" />
                            </div>
                            <p class="text-xs sm:text-sm text-gray-600 mt-4">Are you sure you want to approve this remit? This action cannot be undone</p>
                            <div class="flex flex-col sm:flex-row gap-2 mt-4 justify-center">
                                <button class="bg-[#608C54] text-white px-8 sm:px-14 py-2 rounded hover:bg-red-600" @click="approveRiderRemit">Approve</button>
                                <button class="bg-red-500 text-white px-8 sm:px-14 py-2 rounded hover:bg-gray-400" @click="closeApproveModal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
  
                <!-- Table Section -->
                <div class="w-full overflow-x-auto">
                    <table class="w-full table-auto text-xs sm:text-sm text-left">
                        <!-- Table Header -->
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="px-2 sm:px-4 py-2 sm:py-3">Rider Name</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3">Email</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3">Phone Number</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3">Balance</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <!-- Table Body -->
                        <tbody>
                            <tr v-for="remit in remitList" :key="remit.id" class="border-b hover:bg-gray-100">
                                <td class="px-2 sm:px-4 py-2">{{ remit.first_name }} {{ remit.last_name }}</td>
                                <td class="px-2 sm:px-4 py-2">{{ remit.email }}</td>
                                <td class="px-2 sm:px-4 py-2">{{ remit.phone_number }}</td>
                                <td class="px-2 sm:px-4 py-2">{{ remit.balance }}</td>
                                <td class="px-2 sm:px-4 py-2 space-x-2 text-center">
                                    <button class="text-white px-4 rounded-lg bg-green-800 hover:text-green-800" :disabled="remit.balance === 0" :class="{ 'bg-gray-500 opacity-70 cursor-not-allowed': remit.balance === 0 }" @click="openApproveModal(remit.id)">
                                        Remit
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </main>
        </div>
    </div>
  </template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue'
import Toast from '@/components/Alerts/Toast.vue'
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const showLoading = computed(() => store.state.showLoading.state);
const remitList = computed(() => store.state.Administrator.remit.data);
const peopleList = computed(() => store.state.Administrator.people.data);

/******************************************************************
FUNCTION FOR FETCHING REMIT LIST
******************************************************************/
function getRemitList() {
  store.dispatch('Administrator/getRemitList');
}

onMounted(() => {
  getRemitList();
});

/******************************************************************
FUNCTION FOR FETCHING ADMIN LIST (ASSUMED TO INCLUDE SELLERS)
******************************************************************/
function getAdminList() {
  store.dispatch('Administrator/getAdminList');
}

onMounted(() => {
  getAdminList();
});

/******************************************************************
FUNCTION FOR APPROVE
******************************************************************/
const isApproveModalVisible = ref(false);
const selectedRiderId = ref(null);

function openApproveModal(id) {
  selectedRiderId.value = id;
  isApproveModalVisible.value = true;
}

function closeApproveModal() {
  isApproveModalVisible.value = false;
}

async function approveRiderRemit() {
  if (!selectedRiderId.value) return;

  try {
    const approveData = { id: selectedRiderId.value };
    await store.dispatch('Administrator/approveRiderRemit', approveData);
    await store.dispatch('Administrator/getRemitList');
    closeApproveModal();
  } catch (error) {
    console.error('Approval failed:', error);
  }
}

/******************************************************************
FUNCTION FOR LOGOUT
******************************************************************/
const dropdownVisible = ref(false);

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

const isImageModalVisible = ref(false);
const selectedImage = ref(null);

const openImageModal = (imageSrc) => {
  selectedImage.value = imageSrc;
  isImageModalVisible.value = true;
};

const closeImageModal = () => {
  isImageModalVisible.value = false;
};
</script>
