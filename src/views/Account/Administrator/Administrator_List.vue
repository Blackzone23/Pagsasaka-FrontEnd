<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading"></Loading>
    <Toast></Toast>

    <div class="flex h-screen bg-gray-100">
        <div class="flex-1 flex flex-col">
            <!-- Dashboard Content -->
            <main class="px-2 sm:px-4 pt-20 flex flex-col gap-4 overflow-auto">
                <div>
                    <!-- Delete Modal -->
                    <div v-if="isDeleteModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[90%] sm:w-96 text-center">
                            <div class="flex justify-center">
                                <Icon icon="material-symbols:delete-outline" class="w-12 h-12 sm:w-[50px] sm:h-[50px]" style="color: #ff0000" />
                            </div>
                            <p class="text-xs sm:text-sm text-gray-600 mt-4">Are you sure you want to delete this item? This action cannot be undone</p>

                            <div class="flex flex-col sm:flex-row gap-2 mt-4 justify-center">
                                <button class="bg-red-500 text-white px-8 sm:px-14 py-2 rounded hover:bg-red-600" @click="deleteRider">Delete</button>
                                <button class="bg-[#608C54] text-white px-8 sm:px-14 py-2 rounded hover:bg-gray-400" @click="closeDeleteProductModal">Cancel</button>
                            </div>
                        </div>
                    </div>

                    <!-- Approve Modal -->
                    <div v-if="isApproveModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[90%] sm:w-[410px] text-center">
                            <div class="flex justify-center">
                                <Icon icon="mdi:approve" class="w-16 h-16" style="color: #188b47" />
                            </div>
                            <p class="text-xs sm:text-sm text-gray-600 mt-4">Are you sure you want to approve this item? This action cannot be undone</p>

                            <div class="flex flex-col sm:flex-row gap-2 mt-4 justify-center">
                                <button class="bg-[#608C54] text-white px-8 sm:px-14 py-2 rounded hover:bg-red-600" @click="approveRider">Approve</button>
                                <button class="bg-red-500 text-white px-8 sm:px-14 py-2 rounded hover:bg-gray-400" @click="closeApproveModal">Cancel</button>
                            </div>
                        </div>
                    </div>

                    <!-- Image Modal (Enlarged Image View) -->
                    <div v-if="isImageModalVisible" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                        <div class="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-[90%] sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 text-center">
                            <img :src="selectedImage" alt="Selected Image" class="w-full h-auto max-h-[60vh] object-contain mb-4" />
                            <button class="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 text-xs" @click="closeImageModal">
                                Close
                            </button>
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
                                <th class="px-2 sm:px-4 py-2 sm:py-3">License</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3">Valid ID</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3">Status</th>
                                <th class="px-2 sm:px-4 py-2 sm:py-3 text-end">Action</th>
                            </tr>
                        </thead>

                        <!-- Table Body -->
                        <tbody>
                            <tr v-for="rider in riderList" :key="rider.id" class="border-b hover:bg-gray-100">
                                <td class="px-2 sm:px-4 py-2">{{ rider.rider_name }}</td>
                                <td class="px-2 sm:px-4 py-2">{{ rider.email }}</td>
                                <td class="px-2 sm:px-4 py-2">{{ rider.phone_number }}</td>
                                <td class="px-2 sm:px-4 py-2">
                                    <img :src="rider.license" alt="License" class="w-14 sm:w-20 h-14 sm:h-20 object-cover rounded cursor-pointer" @click="openImageModal(rider.license)" />
                                </td>
                                <td class="px-2 sm:px-4 py-2">
                                    <img :src="rider.valid_id" alt="Valid ID" class="w-14 sm:w-20 h-14 sm:h-20 object-cover rounded cursor-pointer" @click="openImageModal(rider.valid_id)" />
                                </td>
                                <td class="px-2 sm:px-4 py-2 font-bold">{{ rider.status }}</td>
                                <td class="px-2 sm:px-4 py-2 space-x-2 text-end">
                                    <!-- Approve Button -->
                                    <button class="text-green-600 hover:text-green-800" @click="openApproveModal(rider.id)">
                                        <Icon icon="material-symbols:order-approve" class="w-5 h-5" />
                                    </button>

                                    <!-- Delete Button -->
                                    <button class="text-red-500 hover:text-red-700" @click="openDeleteProductModal(rider.id)">
                                        <Icon icon="octicon:trash-24" class="w-5 h-5" />
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
const riderList = computed(() => store.state.Administrator.rider.data);
/******************************************************************
 FUNCTION FOR ADDING NEW PRODUCT
******************************************************************/
function getRiderList() {
    store.dispatch('Administrator/getRiderList')
}

onMounted(() => {
    getRiderList();
})

/******************************************************************
 FUNCTION FOR DELETE
******************************************************************/
// State to toggle modal visibility
const isDeleteModalVisible = ref(false);
const toDelete = ref(null);

// Open delete modal
const openDeleteProductModal = (id) => {
    toDelete.value = id;
  isDeleteModalVisible.value = true;
};

// Close delete modal
const closeDeleteProductModal = () => {
  isDeleteModalVisible.value = false;
};

// Function for delete rider
async function deleteRider() {
    if (toDelete.value != "") {
        await store.dispatch('Administrator/deleteRider', toDelete.value)
        .then((response) => {
            if (response.isSuccess) {
                closeDeleteProductModal();  
                getRiderList(); 
            }
        })    
    }
}
/******************************************************************
 FUNCTION FOR APPROVE
******************************************************************/
// State to toggle modal visibility
const isApproveModalVisible = ref(false);
const selectedRiderId = ref(null);

function openApproveModal(id) {
  selectedRiderId.value = id;
  isApproveModalVisible.value = true;
}

function closeApproveModal() {
  isApproveModalVisible.value = false;
}

async function approveRider() {
  if (!selectedRiderId.value) return;

  try {
    const approveData = { id: selectedRiderId.value };
    await store.dispatch('Administrator/approveRider', approveData);

    // Refresh the rider list
    await store.dispatch('Administrator/getRiderList');

    closeApproveModal();
  } catch (error) {
    console.error('Approval failed:', error);
  }
}

/******************************************************************
 FUNCTION FOR LOGOUT
******************************************************************/

const dropdownVisible = ref(false);
  
  // Toggle the dropdown visibility
  const toggleDropdown = () => {
    dropdownVisible.value = !dropdownVisible.value;
  };
  
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

const isImageModalVisible = ref(false);
const selectedImage = ref(null);

// Open Image Modal with selected image
const openImageModal = (imageSrc) => {
    selectedImage.value = imageSrc;
    isImageModalVisible.value = true;
};

// Close the Image Modal
const closeImageModal = () => {
    isImageModalVisible.value = false;
};
</script>
