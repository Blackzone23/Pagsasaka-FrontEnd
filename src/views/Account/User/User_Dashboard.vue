<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Main Content -->
      <div class="flex-1 flex flex-col">
            <!-- Header -->
            <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-xl font-bold">Welcome, User Dashboard</h1>
                <div class="flex items-center space-x-4">
                    <div class="flex space-x-2">
                        <Icon icon="gridicons:bell" width="24" height="24" style="color: white" />
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
    
            <!-- Dashboard Content -->
            <main class="p-4 flex flex-col gap-4">
                <!-- Metrics Section -->
                <div class="grid grid-cols-4 gap-4">
                    <div class="bg-white shadow rounded p-4">
                        <h2 class="text-sm font-bold">Total Sales</h2>
                        <p class="text-2xl font-semibold">$25,000</p>
                    </div>
                    <div class="bg-white shadow rounded p-4">
                        <h2 class="text-sm font-bold">Active Users</h2>
                        <p class="text-2xl font-semibold">1,200</p>
                    </div>
                    <div class="bg-white shadow rounded p-4">
                        <h2 class="text-sm font-bold">New Orders</h2>
                        <p class="text-2xl font-semibold">350</p>
                    </div>
                    <div class="bg-white shadow rounded p-4">
                        <h2 class="text-sm font-bold">Pending Tasks</h2>
                        <p class="text-2xl font-semibold">18</p>
                    </div>
                </div>
        
                <!-- Charts and Tables -->
                <div class="grid grid-cols-2 gap-4">
                    <!-- Chart Card -->
                    <div class="bg-white shadow rounded p-4">
                        <h2 class="text-lg font-bold mb-2">Sales Overview</h2>
                        <div id="chart" class="h-48 bg-gray-100"></div>
                    </div>
                    <!-- Table Card -->
                    <div class="bg-white shadow rounded p-4">
                        <h2 class="text-lg font-bold mb-2">Recent Activities</h2>
                        <table class="table-auto w-full text-left text-sm">
                            <thead>
                            <tr>
                                <th class="px-4 py-2">Activity</th>
                                <th class="px-4 py-2">Time</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td class="px-4 py-2">Order #12345</td>
                                <td class="px-4 py-2">2 hours ago</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2">User signup</td>
                                <td class="px-4 py-2">3 hours ago</td>
                            </tr>
                            <tr>
                                <td class="px-4 py-2">System update</td>
                                <td class="px-4 py-2">1 day ago</td>
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
import { reactive, computed, ref } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
const store = useStore();
const router = useRouter();

  
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