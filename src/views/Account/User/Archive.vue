<template>
    <div>
        <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
            <h1 class="text-xl font-bold">Archive</h1>
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
        <div>
            <!-- Main Page Content -->
            <div v-if="!viewAllClicked" class="flex justify-center items-center h-96">
                <div class="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col justify-center items-center border-2 border-gray-300">
                    <div class="bg-[#608C54] px-[165px] py-6">
                    <Icon icon="bx:archive-in" width="52" height="52" style="color: #fff" />
                    </div>
                    <div class="mt-4 text-sm text-center space-y-5">
                    <h1 class="text-2xl font-bold">Products</h1>
                    <p>118 Archive</p>
                    <button @click="viewAllClicked = true" class="text-blue-500 hover:underline">View all</button>
                    </div>
                </div>
            </div>

            <!-- Table Page Content -->
            <div v-if="viewAllClicked" class="mt-10">
              <div class="p-5">
                <div class="w-full bg-white shadow-lg rounded-lg border-2 border-gray-300">
                    <h2 class="text-2xl font-bold text-center mt-4">Archived Products</h2>
                    <table class="w-full table-auto mt-4">
                        <thead>
                            <tr class="bg-gray-200">
                                <th class="px-4 py-2 border-b">Product Name</th>
                                <th class="px-4 py-2 border-b">Created at</th>
                                <th class="px-4 py-2 border-b">Status</th>
                                <th class="px-4 py-2 border-b">Amount</th>
                                <th class="px-4 py-2 border-b">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(item, index) in archivedProducts" :key="index" class="text-center">
                            <td class="px-4 py-2 border-b">{{ item.name }}</td>
                            <td class="px-4 py-2 border-b">{{ item.category }}</td>
                            <td class="px-4 py-2 border-b">{{ item.dateArchived }}</td>
                            <td class="px-4 py-2 border-b">{{ item.dateArchived }}</td>
                            <td class="px-4 py-2 border-b">

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