<template>
    <div>
        <header class="bg-[#285a19] shadow p-4 flex justify-between items-center text-white">
            <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Archive</h1>
            <div class="flex items-center space-x-4">
                <div class="flex space-x-2">
                    <!-- Settings Icon with Dropdown -->
                    <div class="relative inline-block text-left">
                        <!-- Profile Picture and Settings Icon -->
                        <div class="flex items-center space-x-2">
                        <img :src="sellerRaw.avatar" alt="Profile" class="w-10 h-10 rounded-full object-cover  shadow-md"/>
                        <Icon icon="uil:setting" width="24" height="24" class="cursor-pointer text-white" @click="toggleDropdown"/>
                        </div>

                        <!-- Dropdown Menu -->
                        <div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-48 bg-white rounded shadow-lg">
                        <a href="/seller-profile" class="block px-4 py-2 text-sm text-black hover:bg-gray-100">
                            Account Info
                        </a>
                        <button @click="logout" class="block w-full text-left px-4 py-2 text-sm text-black hover:bg-gray-100">
                            Logout
                        </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <div class="w-full">
            <!-- Main Page Content -->
            <div v-if="!viewAllClicked" class="flex justify-center items-center h-[600px]">
                <div class="bg-white p-6 rounded-lg shadow-lg w-96 max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl flex flex-col justify-center items-center border-2 border-gray-300">
                    <div class="bg-[#608C54] w-full flex justify-center py-6">
                        <Icon icon="bx:archive-in" width="52" height="52" style="color: #fff" />
                    </div>
                    <div class="mt-4 text-sm text-center space-y-5">
                        <h1 class="text-xl font-bold">Products</h1>
                        <p>118 Archive</p>
                        <button @click="viewAllClicked = true" class="text-blue-500 hover:underline">View all</button>
                    </div>
                </div>
            </div>

            <!-- Table Page Content -->
            <div v-if="viewAllClicked" class="mt-10 px-2 sm:px-4 lg:px-6">
                <div class="p-5">
                    <div class="mb-4">
                    <button  @click="viewAllClicked = false"  class="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-white bg-green-700 hover:bg-green-500 rounded-lg shadow-md">
                        <Icon icon="ic:baseline-arrow-back" width="20" height="20" />
                        <span>Back</span>
                    </button>
                    </div>

                    <div class="w-full bg-white shadow-lg rounded-lg border-2 border-gray-300 overflow-x-auto">
                    <h2 class="text-xl sm:text-2xl font-bold text-center mt-4">Archived Products</h2>
                    <table class="w-full table-auto mt-4 min-w-[600px]">
                        <thead>
                        <tr class="bg-gray-200 text-xs sm:text-sm">
                            <th class="px-2 sm:px-4 py-2 border-b">Product Name</th>
                            <th class="px-2 sm:px-4 py-2 border-b">Category</th>
                            <th class="px-2 sm:px-4 py-2 border-b">Archived Date</th>
                            <th class="px-2 sm:px-4 py-2 border-b">Amount</th>
                            <th class="px-2 sm:px-4 py-2 border-b">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="(item, index) in archivedProducts" :key="index" class="text-center text-xs sm:text-sm">
                            <td class="px-2 sm:px-4 py-2 border-b">{{ item.name }}</td>
                            <td class="px-2 sm:px-4 py-2 border-b">{{ item.category }}</td>
                            <td class="px-2 sm:px-4 py-2 border-b">{{ item.dateArchived }}</td>
                            <td class="px-2 sm:px-4 py-2 border-b">{{ item.amount }}</td>
                            <td class="px-2 sm:px-4 py-2 border-b">
                            <!-- Add action buttons here -->
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const viewAllClicked = ref(false);
const store = useStore();
const router = useRouter();
const showLoading = computed(() => store.state.showLoading.state);
const sellerRaw  = computed(() => store.state.userData.data?.user || {})
const archivedProducts = ref([
  { name: 'Product 1', category: 'Category A', dateArchived: '2024-11-01' },
  { name: 'Product 2', category: 'Category B', dateArchived: '2024-11-05' },
  { name: 'Product 3', category: 'Category C', dateArchived: '2024-11-10' },
  { name: 'Product 4', category: 'Category A', dateArchived: '2024-11-12' },
  { name: 'Product 5', category: 'Category B', dateArchived: '2024-11-15' },
]);

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
</script>