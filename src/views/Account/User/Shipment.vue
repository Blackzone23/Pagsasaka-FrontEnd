<template>

	<div class="flex h-screen bg-gray-100">
	  <div class="flex-1 flex flex-col">
			<!-- Header -->
            <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-xl font-bold">Shipment</h1>
                <div class="flex items-center space-x-4">
                    <div class="flex space-x-2">
                    <!-- Settings Icon with Dropdown -->
                    <div class="relative">
                        <Icon icon="uil:setting" width="24" height="24" style="color: white" @click="toggleDropdown" />
                        <!-- Dropdown Menu -->
                        <div v-if="dropdownVisible" class="absolute right-0 mt-2 bg-white shadow-lg rounded p-2 w-48">
                            <button class="w-full text-left px-4 py-2 text-sm text-black" @click="logout()">Logout</button>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
	
			<div class="p-5">
				<div v-if="!selectedShipment">
					<!-- Tabs Navigation -->
					<div class="mb-4 text-sm">
						<button 
						class="px-4 py-2 rounded" 
						:class="{ 'bg-blue-500 text-white': activeTab === 'orders', 'bg-gray-200': activeTab !== 'orders' }" 
						@click="activeTab = 'orders'">
						My Orders
						</button>
						<button 
						class="ml-2 px-4 py-2 rounded" 
						:class="{ 'bg-blue-500 text-white': activeTab === 'cancellations', 'bg-gray-200': activeTab !== 'cancellations' }" 
						@click="activeTab = 'cancellations'">
						Cancellations
						</button>
						<button 
						class="ml-2 px-4 py-2 rounded" 
						:class="{ 'bg-blue-500 text-white': activeTab === 'Rrefund', 'bg-gray-200': activeTab !== 'Rrefund' }" 
						@click="activeTab = 'Rrefund'">
						Return and Refund
						</button>
					</div>

					<!-- Table for Orders or Cancellations -->
					<table class="table-auto w-full border-collapse border border-gray-300">
						<thead>
							<tr class="bg-gray-300 text-start">
							<th class="px-4 py-2 text-start">Name</th>
							<th class="px-4 py-2 text-start">Created</th>
							<th class="px-4 py-2 text-start">Last Updated</th>
							<th class="px-4 py-2 text-start">Ship To</th>
							<th class="px-4 py-2 text-start">Status</th>
							<th class="px-4 py-2 text-start">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="item in filteredData" :key="item.id" class="even:bg-gray-50 text-sm cursor-pointer hover:bg-gray-200" @click="handleRowClick(item)">
								<td class="px-4 py-2 text-start">{{ item.name }}</td>
								<td class="px-4 py-2 text-start">{{ item.created }}</td>
								<td class="px-4 py-2 text-start">{{ item.lastUpdated }}</td>
								<td class="px-4 py-2 text-start">{{ item.shipTo }}</td>
								<td class="px-4 py-2 text-start">{{ item.status }}</td>
								<td class="px-4 py-2 text-start">

								</td>
							</tr>
						</tbody>
					</table>
				</div>

				<!-- Tracking Method Interface -->
				<div v-else class="p-5 border-2 border-[#608C54] rounded-md">
					<h1 class="text-xl font-bold">Tracking Details</h1>
					<div class="text-sm">
						<p><strong>Shipment Name:</strong> {{ selectedShipment.name }}</p>
						<p><strong>Created:</strong> {{ selectedShipment.created }}</p>
						<p><strong>Last Updated:</strong> {{ selectedShipment.lastUpdated }}</p>
						<p><strong>Ship To:</strong> {{ selectedShipment.shipTo }}</p>
						<p><strong>Status:</strong> {{ selectedShipment.status }}</p>
					</div>

					<!-- Tracking Process -->
					<div class="mt-6">
						<div class="flex space-x-12 justify-center">
							<div :class="['w-24 h-24 rounded-full flex items-center justify-center', getStatusClass('processing')]">
							<span class="text-white font-bold">
								<Icon icon="hugeicons:package-process" width="32" height="32" style="color: #276d22" />
							</span>
							</div>
							<div :class="['w-24 h-24 rounded-full flex items-center justify-center', getStatusClass('to_ship')]">
							<span class="text-white font-bold">
								<Icon icon="ic:outline-local-shipping" width="32" height="32" style="color: #276d22" />
							</span>
							</div>
							<div :class="['w-24 h-24 rounded-full flex items-center justify-center', getStatusClass('shipping')]">
							<span class="text-white font-bold">
								<Icon icon="la:shipping-fast" width="32" height="32" style="color: #276d22" />
							</span>
							</div>
							<div :class="['w-24 h-24 rounded-full flex items-center justify-center', getStatusClass('to_receive')]">
							<span class="text-white font-bold">
								<Icon icon="hugeicons:package-receive" width="32" height="32" style="color: #276d22" />
							</span>
							</div>
							<div :class="['w-24 h-24 rounded-full flex items-center justify-center', getStatusClass('Completed')]">
							<span class="text-white font-bold">
								<Icon icon="fluent-mdl2:completed" width="32" height="32" style="color: #276d22" />
							</span>
							</div>
						</div>
						
						<div class="flex space-x-[68px] justify-center text-center mt-2">
							<a>Processing</a>
							<a >To Ship</a>
							<a>Shipping</a>
							<a>To Receive</a>
							<a>Completed</a>
						</div>
					</div>


					<!-- Back Button -->
					<button class="mt-24 px-4 py-2 bg-gray-300 rounded text-sm" @click="selectedShipment = null">
						Back to Shipments
					</button>
				</div>
			</div>
		</div>
	</div>
</template>
  

<script setup>
import { Icon } from '@iconify/vue';
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();
const activeTab = ref('orders');
// const selectedShipment = ref(null);

const selectedShipment = ref({
  name: 'Shipment 1',
  created: '2024-12-01',
  lastUpdated: '2024-12-05',
  shipTo: '123 Main St',
  status: 'processing', // Example status
});


const orders = ref([
  { id: 1, name: 'Order 1', created: '2024-12-01', lastUpdated: '2024-12-05', shipTo: 'Davao', status: 'Shipped' },
  { id: 2, name: 'Order 2', created: '2024-12-02', lastUpdated: '2024-12-04', shipTo: 'Bulacan', status: 'Processing' },
]);

const cancellations = ref([
  { id: 3, name: 'Order 3', created: '2024-12-01', lastUpdated: '2024-12-03', shipTo: 'Calumpit', status: 'Cancelled' },
]);

const Rrefund = ref([
  { id: 3, name: 'Order 3', created: '2024-12-01', lastUpdated: '2024-12-03', shipTo: 'Calumpit', status: 'Refund' },
  { id: 4, name: 'Order 4', created: '2024-13-01', lastUpdated: '2024-12-03', shipTo: 'Calumpit', status: 'Return' },
]);

const filteredData = computed(() => {
  return activeTab.value === 'orders' 
    ? orders.value 
    : activeTab.value === 'cancellations' 
    ? cancellations.value 
    : Rrefund.value;
});

const handleRowClick = (item) => {
  selectedShipment.value = item;
};
 
const getStatusClass = (status) => {
  // Define status colors
  const statusOrder = {
    processing: 'bg-blue-500',  // Blue when ordered
    to_ship: 'bg-yellow-500',  // Yellow when shipped
    shipping: 'bg-green-500',  // Green when in transit
    to_receive: 'bg-gray-500',  // Gray when delivered
	Completed: 'bg-red-500',  // Gray when delivered
  };

  return selectedShipment.value.status === status
    ? `${statusOrder[status]} text-white`  // Active status
    : 'bg-gray-300';  // Inactive status
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
  

