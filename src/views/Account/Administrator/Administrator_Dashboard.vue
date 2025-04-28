<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>
  
    <div class="flex h-screen bg-gray-100">
        <div class="flex-1 flex flex-col">
            <!-- Dashboard Content -->
            <main class="px-2 2xs:px-3 sm:px-4 md:px-6 lg:px-8 pt-16 2xs:pt-18 sm:pt-20 flex flex-col gap-4 overflow-auto">
                <div>
                    <!-- Counts Section -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 2xs:gap-4 md:gap-6 mb-3 2xs:mb-4 md:mb-6">
                        <div class="bg-white p-3 2xs:p-4 md:p-6 rounded-lg shadow-md flex items-center justify-between">
                            <div>
                                <h3 class="text-xs 2xs:text-sm sm:text-base md:text-lg font-semibold text-gray-700">Total Riders</h3>
                                <p class="text-base 2xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{{ peopleList.total_riders }}</p>
                            </div>
                            <Icon icon="mdi:motorbike" class="w-6 2xs:w-7 sm:w-8 md:w-10 h-6 2xs:h-7 sm:h-8 md:h-10 text-blue-600" />
                        </div>
                        <div class="bg-white p-3 2xs:p-4 md:p-6 rounded-lg shadow-md flex items-center justify-between">
                            <div>
                                <h3 class="text-xs 2xs:text-sm sm:text-base md:text-lg font-semibold text-gray-700">Total Farmers</h3>
                                <p class="text-base 2xs:text-lg sm:text-xl md:text-2xl font-bold text-gray-900">{{ peopleList.total_farmers }}</p>
                            </div>
                            <Icon icon="fluent-emoji-flat:farmer-light" class="w-6 2xs:w-7 sm:w-8 md:w-10 h-6 2xs:h-7 sm:h-8 md:h-10" />
                        </div>
                    </div>
  
                    <!-- Approve Modal -->
                    <div v-if="isApproveModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div class="bg-white p-4 2xs:p-5 sm:p-6 md:p-8 rounded-lg shadow-lg w-[90%] sm:w-[450px] md:w-[500px] lg:w-[550px] text-center">
                            <div class="flex justify-center">
                                <Icon icon="mdi:approve" class="w-12 2xs:w-14 sm:w-16 md:w-20 h-12 2xs:h-14 sm:h-16 md:h-20" style="color: #188b47" />
                            </div>
                            <p class="text-[0.65rem] 2xs:text-xs sm:text-sm md:text-base text-gray-600 mt-3 2xs:mt-4 md:mt-6">Are you sure you want to approve this remit? This action cannot be undone</p>
                            <div class="flex flex-col sm:flex-row gap-2 2xs:gap-3 md:gap-4 mt-3 2xs:mt-4 md:mt-6 justify-center">
                                <button class="bg-[#608C54] text-white px-6 2xs:px-8 sm:px-10 md:px-12 lg:px-14 py-1.5 2xs:py-2 md:py-2.5 rounded hover:bg-red-600" @click="approveRiderRemit">Approve</button>
                                <button class="bg-red-500 text-white px-6 2xs:px-8 sm:px-10 md:px-12 lg:px-14 py-1.5 2xs:py-2 md:py-2.5 rounded hover:bg-gray-400" @click="closeApproveModal">Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
  
                <!-- Table Section -->
                <div class="w-full overflow-x-auto">
                    <div class="max-h-[500px] overflow-y-auto"> <!-- Added wrapper with max height and vertical scroll -->
                        <table class="w-full table-auto text-[0.65rem] 2xs:text-xs sm:text-sm md:text-base text-left">
                        <!-- Table Header -->
                        <thead>
                            <tr class="bg-gray-200">
                            <th class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4">Rider Name</th>
                            <th class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4">Email</th>
                            <th class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4">Phone Number</th>
                            <th class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4">Balance</th>
                            <th class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4 text-center">Action</th>
                            </tr>
                        </thead>
                        <!-- Table Body -->
                        <tbody>
                            <tr v-for="remit in remitList" :key="remit.id" class="border-b hover:bg-gray-100">
                            <td class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4">{{ remit.first_name }} {{ remit.last_name }}</td>
                            <td class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4">{{ remit.email }}</td>
                            <td class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4">{{ remit.phone_number }}</td>
                            <td class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4">{{ remit.balance }}</td>
                            <td class="px-2 2xs:px-3 sm:px-4 md:px-6 py-2 2xs:py-2.5 sm:py-3 md:py-4 space-x-1 2xs:space-x-2 text-center">
                                <button class="text-white px-3 2xs:px-4 sm:px-5 md:px-6 py-1 2xs:py-1.5 sm:py-2 rounded-lg bg-green-800 hover:text-green-800" :disabled="remit.balance === 0" :class="{ 'bg-gray-500 opacity-70 cursor-not-allowed': remit.balance === 0 }" @click="openApproveModal(remit.id)">
                                Remit
                                </button>
                            </td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
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