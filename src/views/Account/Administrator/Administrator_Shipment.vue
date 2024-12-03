<template>

	<div class="flex h-screen bg-gray-100">
	  <div class="flex-1 flex flex-col">
			<!-- Header -->
            <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
                <h1 class="text-xl font-bold">Shipment</h1>
                <div class="flex items-center space-x-4">
                    <div class="flex space-x-2">
                        <Icon icon="gridicons:bell" width="24" height="24" style="color: white" />
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
				<!-- Dropdown to switch between interfaces -->
				<div class="flex justify-end mb-4">
				<BaseSelectField v-model="selectedInterface" class="w-48">
					<BaseOptionField value="myOrders">My Orders</BaseOptionField>
					<BaseOptionField value="cancellation">Cancellation</BaseOptionField>
				</BaseSelectField>
				</div>

				<!-- Conditionally render content -->
				<div v-if="selectedInterface === 'myOrders'" class="border-2 border-gray-300 p-10 rounded-md">
					<div class="text-center font-bold ">
						<BaseLabel class="text-2xl">MY ORDERS</BaseLabel>
					</div>
					<!-- My Orders Content -->
					<div class="border-b">
						<div class="flex justify-center space-x-10 text-sm font-medium">
						<button v-for="tab in tabs" :key="tab.name" @click="activeTab = tab.name" :class="[	'px-4 py-2 relative',activeTab === tab.name ? 'text-green-600 font-bold' : 'text-black',]">
							{{ tab.label }}
							<div v-if="activeTab === tab.name" class="absolute bottom-0 left-0 right-0 h-1 bg-green-600"></div>
						</button>
						</div>
						<div class="mt-3">
							<div class="space-y-3">
								<BaseLabel class="text-xl font-bold text-black">Shipping tracing event</BaseLabel>
								<p class="text-xs">
									This page provides details on all the shipments you are working on and those you
									have sent to logistics
								</p>
								<h2 class="text-lg">{{ getTabLabel(activeTab) }}</h2>
							</div>
							<!-- Filters and Table -->
							<!-- Include the same filters and table from the My Orders interface -->
							<div class="flex space-x-4 mb-4">
								<!-- Last Updated Filter -->
								<div >
									<BaseLabel class="block text-sm font-medium mb-1" for="lastUpdatedFilter">Last Updated</BaseLabel>
									<BaseSelectField id="lastUpdatedFilter" v-model="filters.lastUpdated">
										<BaseOptionDefaultField>All</BaseOptionDefaultField>
										<BaseOptionField v-for="date in uniqueLastUpdatedDates" :key="date" :value="date">
											{{ date }}
										</BaseOptionField>
									</BaseSelectField>
								</div>

								<!-- Status Filter -->
								<div>
									<BaseLabel class="block text-sm font-medium mb-1" for="statusFilter">Status</BaseLabel>
									<BaseSelectField id="statusFilter" v-model="filters.status" class="border border-gray-300 rounded px-3 py-2 text-sm">
										<BaseOptionDefaultField value="">All</BaseOptionDefaultField>
										<BaseOptionField v-for="status in uniqueStatuses" :key="status" :value="status">
											{{ status }}
										</BaseOptionField>
									</BaseSelectField>
								</div>
							</div>

							<!-- Table -->
							<div class="w-full">
								<div class="overflow-x-auto">
									<table class="w-full">
										<thead>
											<tr class="bg-gray-300 text-sm">
											<th class="px-4 py-2 text-left">Shipment Name</th>
											<th class="px-4 py-2 text-left">Created</th>
											<th class="px-4 py-2 text-left">Last Updated</th>
											<th class="px-4 py-2 text-left">Ship To</th>
											<th class="px-4 py-2 text-end">Status</th>
											</tr>
										</thead>
										<tbody>
											<tr v-for="item in filteredData" :key="item.id" class="even:bg-gray-50 text-sm">
											<td class="px-4 py-2">{{ item.name }}</td>
											<td class="px-4 py-2">{{ item.created }}</td>
											<td class="px-4 py-2">{{ item.lastUpdated }}</td>
											<td class="px-4 py-2">{{ item.shipTo }}</td>
											<td class="px-4 py-2 text-end">{{ item.status }}</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div v-else-if="selectedInterface === 'cancellation'" class="border-2 border-gray-300 p-10 rounded-md">
					<div class="text-center font-bold">
						<BaseLabel class="text-2xl">CANCELLATION</BaseLabel>
					</div>
					<!-- Cancellation Content -->
					<div class="mt-5">
						<div class="border-b">
							<div class="flex justify-center space-x-10 text-sm font-medium">
							<button v-for="tab in cancelTabs" :key="tab.name" @click="cancelActiveTab = tab.name" :class="[	'px-4 py-2 relative',cancelActiveTab === tab.name ? 'text-green-600 font-bold' : 'text-black',]">
								{{ tab.label }}
								<div v-if="cancelActiveTab === tab.name" class="absolute bottom-0 left-0 right-0 h-1 bg-green-600"></div>
							</button>
							</div>
							<div class="mt-3">
								<div class="space-y-3">
									<BaseLabel class="text-xl font-bold text-black">Shipping tracing event</BaseLabel>
									<p class="text-xs">
										This page provides details on all the shipments you are working on and those you
										have sent to logistics
									</p>
									<h2 class="text-lg">{{ getCancelTabLabel(cancelActiveTab) }}</h2>
								</div>
								<!-- Filters and Table -->
								<!-- Include the same filters and table from the My Orders interface -->
								<div class="flex space-x-4 mb-4">
									<!-- Last Updated Filter -->
									<div >
										<BaseLabel class="block text-sm font-medium mb-1" for="lastUpdatedFilter">Last Updated</BaseLabel>
										<BaseSelectField id="lastUpdatedFilter" v-model="cancelfilters.lastUpdated">
											<BaseOptionDefaultField>All</BaseOptionDefaultField>
											<BaseOptionField v-for="date in uniqueCancelLastUpdatedDates" :key="date" :value="date">
												{{ date }}
											</BaseOptionField>
										</BaseSelectField>
									</div>

									<!-- Status Filter -->
									<div>
										<BaseLabel class="block text-sm font-medium mb-1" for="statusFilter">Status</BaseLabel>
										<BaseSelectField id="statusFilter" v-model="cancelfilters.status" class="border border-gray-300 rounded px-3 py-2 text-sm">
											<BaseOptionDefaultField value="">All</BaseOptionDefaultField>
											<BaseOptionField v-for="status in uniqueCancelStatuses" :key="status" :value="status">
												{{ status }}
											</BaseOptionField>
										</BaseSelectField>
									</div>
								</div>

								<!-- Table -->
								<div class="w-full">
									<div class="overflow-x-auto">
										<table class="w-full">
											<thead>
												<tr class="bg-gray-300 text-sm">
												<th class="px-4 py-2 text-left">Shipment Name</th>
												<th class="px-4 py-2 text-left">Created</th>
												<th class="px-4 py-2 text-left">Last Updated</th>
												<th class="px-4 py-2 text-left">Status</th>
												<th v-if="cancelActiveTab !== 'cancelled'" class="px-4 py-2 text-end">Action</th>
												<th v-if="cancelActiveTab === 'cancelled'" class="px-4 py-2 text-end">Reason</th>
												</tr>
											</thead>
											<tbody>
												<tr v-for="item in cancelFilteredData" :key="item.id" class="even:bg-gray-50 text-sm">
												<td class="px-4 py-2">{{ item.name }}</td>
												<td class="px-4 py-2">{{ item.created }}</td>
												<td class="px-4 py-2">{{ item.lastUpdated }}</td>
												<td class="px-4 py-2">{{ item.status }}</td>
												<td v-if="cancelActiveTab !== 'cancelled'" class="px-4 py-2 text-end">{{ item.action }}</td>
												<td v-if="cancelActiveTab === 'cancelled'" class="px-4 py-2 text-end">{{ item.reason }}</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
  </template>
  

  <script setup>
  import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
  import BaseSelectField from '@/components/Input-Fields/BaseSelectField.vue';
  import BaseOptionField from '@/components/Input-Fields/BaseOptionField.vue';
  import { ref, computed } from 'vue';
  import { Icon } from '@iconify/vue';
  
  // Dropdown selection for interfaces
  const selectedInterface = ref('myOrders'); // Default interface is "My Orders"
  
  // Tabs and table data (same as before)
  const tabs = [
	{ name: 'toShip', label: 'To Ship' },
	{ name: 'shipping', label: 'Shipping' },
	{ name: 'completed', label: 'Completed' },
  ];
  
  const activeTab = ref('toShip');
  const tableData = ref([
	{ id: 1, name: 'Salad Package', created: 'Nov 3, 2024', lastUpdated: 'Nov 4, 2024', shipTo: 'TEB9', status: 'In Progress', tab: 'toShip' },
	{ id: 2, name: 'Fruit Basket', created: 'Nov 2, 2024', lastUpdated: 'Nov 5, 2024', shipTo: 'TXB8', status: 'Shipped', tab: 'shipping' },
	{ id: 3, name: 'Salad Package', created: 'Nov 3, 2024', lastUpdated: 'Nov 6, 2024', shipTo: 'TEB9', status: 'Closed', tab: 'completed' },
  ]);
  
  const filters = ref({
	lastUpdated: '',
	status: '',
  });
  
  const filteredData = computed(() =>
	tableData.value.filter(item => {
	  const matchesTab = item.tab === activeTab.value;
	  const matchesLastUpdated = !filters.value.lastUpdated || item.lastUpdated === filters.value.lastUpdated;
	  const matchesStatus = !filters.value.status || item.status === filters.value.status;
	  return matchesTab && matchesLastUpdated && matchesStatus;
	})
  );
  
  const uniqueLastUpdatedDates = computed(() => [...new Set(tableData.value.map(item => item.lastUpdated))]);
  const uniqueStatuses = computed(() => [...new Set(tableData.value.map(item => item.status))]);
  const getTabLabel = tabName => tabs.find(tab => tab.name === tabName)?.label || '';

  //cancellation interface

  const cancelTabs = [
	{ name: 'tocancel', label: 'To Cancel' },
	{ name: 'cancelled', label: 'Cancelled' },
  ];
  
  const cancelActiveTab = ref('tocancel');
  const cancelTableData = ref([
	{ id: 1, name: 'Salad Package', created: 'Nov 3, 2024', lastUpdated: 'Nov 4, 2024', status: 'change of mind', tab: 'tocancel' },
	{ id: 2, name: 'Fruit Basket', created: 'Nov 2, 2024', lastUpdated: 'Nov 5, 2024', status: 'approved', tab: 'cancelled' },
  ]);

  const cancelfilters = ref({
	lastUpdated: '',
	status: '',
  });
  
  const cancelFilteredData = computed(() =>
  cancelTableData.value.filter(item => {
	  const matchesTab = item.tab === cancelActiveTab.value;
	  const matchesLastUpdated = !filters.value.lastUpdated || item.lastUpdated === filters.value.lastUpdated;
	  const matchesStatus = !filters.value.status || item.status === filters.value.status;
	  return matchesTab && matchesLastUpdated && matchesStatus;
	})
  );
  
  const uniqueCancelLastUpdatedDates = computed(() => [...new Set(cancelTableData.value.map(item => item.lastUpdated))]);
  const uniqueCancelStatuses = computed(() => [...new Set(cancelTableData.value.map(item => item.status))]);
  const getCancelTabLabel = tabName => tabs.find(tab => tab.name === tabName)?.label || '';

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
  

