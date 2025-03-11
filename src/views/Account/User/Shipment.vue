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
						<button class="px-4 py-2 rounded"  :class="{ 'bg-blue-500 text-white': activeTab === 'orders', 'bg-gray-200': activeTab !== 'orders' }" @click="activeTab = 'orders'">My Orders</button>
						<button class="ml-2 px-4 py-2 rounded" :class="{ 'bg-red-500 text-white': activeTab === 'cancellations', 'bg-gray-200': activeTab !== 'cancellations' }" @click="activeTab = 'cancellations'">Cancellations</button>
						<button class="ml-2 px-4 py-2 rounded" :class="{ 'bg-yellow-500 text-white': activeTab === 'refunds', 'bg-gray-200': activeTab !== 'refunds' }" @click="activeTab = 'refunds'">Return and Refund</button>
					</div>

					<!-- Table for Orders-->
					<table v-if="activeTab === 'orders'" class="table-auto w-full border-collapse border border-gray-300 text-start">
						<thead>
						<tr class="bg-gray-300">
							<th class="px-4 py-2">Name</th>
							<th class="px-4 py-2">Created</th>
							<th class="px-4 py-2">Last Updated</th>
							<th class="px-4 py-2">Ship To</th>
							<th class="px-4 py-2">Status</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="order in orderList" :key="order.id" class="even:bg-gray-50 cursor-pointer hover:bg-gray-200 text-center text-sm" @click="handleOrderClick(order)">
							<td class="px-4 py-2">{{ order.product_name }}</td>
							<td class="px-4 py-2">{{ order.created_at }}</td>
							<td class="px-4 py-2">{{ order.updated_at }}</td>
							<td class="px-4 py-2">{{ order.ship_to }}</td>
							<td class="px-4 py-2">{{ order.status }}</td>
						</tr>
						</tbody>
					</table>

					<!-- Table for Cancellation-->
					<table v-if="activeTab === 'cancellations'" class="table-auto w-full border-collapse border border-gray-300">
						<thead>
						<tr class="bg-gray-300 text-start">
							<th class="px-4 py-2">Name</th>
							<th class="px-4 py-2">Created</th>
							<th class="px-4 py-2">Last Updated</th>
							<th class="px-4 py-2">Ship To</th>
							<th class="px-4 py-2">Status</th>
						</tr>
						</thead>
						<tbody>
						<tr v-for="cancel in cancellationList" :key="cancel.id" class="even:bg-gray-50 text-center hover:bg-gray-200 text-sm cursor-pointer" @click="handleCancellationClick(cancel)">
							<td class="px-4 py-2">{{ cancel.product_name }}</td>
							<td class="px-4 py-2">{{ cancel.created_at }}</td>
							<td class="px-4 py-2">{{ cancel.updated_at }}</td>
							<td class="px-4 py-2">{{ cancel.ship_to }}</td>
							<td class="px-4 py-2">{{ cancel.status }}</td>
						</tr>
						</tbody>
					</table>

					<!-- Delete Confirmation Popup -->
					<div v-if="showConfirmDelete" class="fixed inset-0 flex justify-center items-center bg-gray-600 bg-opacity-50 z-50">
						<div class="bg-white p-6 rounded-md w-96 text-center text-sm">
							<h2 class="text-xl font-bold">Are you sure you want to delete this cancellation?</h2>
							<div class="mt-4">
								<button class="px-4 py-2 bg-red-500 text-white rounded mr-2" @click="deleteCancellation(confirmCancellationId)">Yes, Delete</button>
								<button class="px-4 py-2 bg-gray-300 text-black rounded" @click="cancelDeletion">Cancel</button>
							</div>
						</div>
					</div>

					<!-- Table for Refun/Return-->
					<table v-if="activeTab === 'refunds'" class="table-auto w-full border-collapse border border-gray-300 text-center" >
						<thead>
							<tr class="bg-gray-300 text-start">
								<th class="px-4 py-2">Name</th>
								<th class="px-4 py-2">Created</th>
								<th class="px-4 py-2">Last Updated</th>
								<th class="px-4 py-2">Ship To</th>
								<th class="px-4 py-2">Status</th>
								<th class="px-4 py-2">Action</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="refund in refundList" :key="refund.id" class="even:bg-gray-50 hover:bg-gray-200 text-sm cursor-pointer" @click="handleRefundClick(refund)">
								<td class="px-4 py-2">{{ refund.product_name }}</td>
								<td class="px-4 py-2">{{ refund.created_at }}</td>
								<td class="px-4 py-2">{{ refund.updated_at }}</td>
								<td class="px-4 py-2">{{ refund.ship_to }}</td>
								<td class="px-4 py-2">{{ refund.status }}</td>
							</tr>
						</tbody>
					</table>
				</div>

					<!-- Tracking Method Interface -->
					<div v-if="!selectedShipment" class="p-5 border-2 border-gray-300 rounded-md mt-2">
						<h1 class="text-xl font-bold">Select a Shipment</h1>
						<p class="text-sm">Please select a shipment from the table to view tracking details.</p>
					</div>

					<!-- Order Status -->
					<div v-else-if="selectedShipment.status === 'Order'" class="p-5 border-2 border-blue-300 rounded-md mt-2">
						<h1 class="text-xl font-bold">Order Shipment</h1>
						<p class="text-sm">This shipment is currently being processed.</p>
						<p class="text-sm">Please track your shipment for further updates.</p>
					</div>

					<!-- Cancelled Status -->
					<div v-else-if="selectedShipment.status === 'Cancelled'" class="p-5 border-2 border-red-300 rounded-md mt-2">
						<h1 class="text-xl font-bold text-red-600">Cancelled Shipment</h1>
						<p class="text-sm">This shipment has been cancelled.</p>
						<p class="text-sm">You can contact customer support for further assistance.</p>
					</div>

					<!-- Refunded Status -->
					<div v-else-if="selectedShipment.status === 'Refund'" class="p-5 border-2 border-yellow-300 rounded-md mt-2">
						<h1 class="text-xl font-bold text-yellow-600">Refunded Shipment</h1>
						<p class="text-sm">This shipment has been refunded.</p>
						<p class="text-sm">You should receive the refund in your account shortly.</p>
					</div>
					<div v-else class="p-5 border-2 border-[#608C54] rounded-md">
						<h1 class="text-xl font-bold">Tracking Details</h1>
						<div class="text-sm">
							<p><strong>Shipment Name:</strong> {{ selectedShipment.product_name }}</p>
							<p><strong>Created:</strong> {{ selectedShipment.created_at }}</p>
							<p><strong>Last Updated:</strong> {{ selectedShipment.updated_at }}</p>
							<p><strong>Ship To:</strong> {{ selectedShipment.ship_to }}</p>
							<p><strong>Status:</strong> {{ selectedShipment.status }}</p>
						</div>

						<!-- Tracking process for orders -->
						<div>
							<div class="relative flex items-center justify-center">
								<div class="absolute w-[480px] h-1 bg-[#608C54] top-1/2 z-0"></div>

								<!-- Tracking Steps (in the front) -->
								<div class="flex space-x-20 z-10">
									<div v-for="status in trackingSteps" :key="status.id" :class="['w-20 h-20 rounded-full flex items-center justify-center',getStatusClass(status.id),]">
									<Icon :icon="status.icon" width="24" height="24" class="text-white" />
									</div>
								</div>
							</div>

							<div class="flex space-x-[68px] justify-center text-center mt-2">
								<span v-for="status in trackingSteps" :key="status.id" class="text-sm">
									{{ status.label }}
								</span>
							</div>

							<!-- Approval Button -->
							<div class="flex justify-center mt-4">
								<button @click="updateStatus()" class="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition">
									Approve
								</button>
							</div>
						</div>

						<!-- Back Button -->
						<button class="mt-24 px-4 py-2 bg-gray-300 rounded text-sm" @click="selectedShipment = null">Back to Shipments</button>
				</div>
			</div>
		</div>	
	</div>
</template>
  

<script setup>
import { debounce } from 'lodash';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

const orderList= computed(() => store.state.User.order.data);
const cancellationList= computed(() => store.state.User.cancel.data);
const refundList= computed(() => store.state.User.refund.data);
const selectedShipment = ref(null);
const activeTab = ref('orders');





/******************************************************************
FUNCTION FOR ORDER
******************************************************************/
function getOrderList() {
    store.dispatch('User/getOrderList');
}


onMounted(() => {
    getOrderList();
})

const handleOrderClick = (order) => {
  selectedShipment.value = order;
};


const trackingSteps = [
  { id: "Order placed", label: "Order placed", icon: "hugeicons:package-process" },
  { id: "Waiting for courier", label: "Waiting for courier", icon: "ic:outline-local-shipping" },
  { id: "In transit", label: "In transit", icon: "la:shipping-fast" },
  { id: "Order delivered", label: "Order delivered", icon: "hugeicons:package-receive" },
];



const getStatusClass = (id) => {
  if (!selectedShipment.value) return "bg-gray-300";

  const statusOrder = trackingSteps.map((step) => step.id.toLowerCase());
  const currentIndex = statusOrder.indexOf(selectedShipment.value.status.toLowerCase());
  const stepIndex = statusOrder.indexOf(id.toLowerCase());

  if (stepIndex < currentIndex) return "bg-green-500"; // Completed steps
  if (stepIndex === currentIndex) return "bg-[#608C54]"; // Current step
  return "bg-gray-300"; // Pending steps
};

//approval status
const statusData = reactive({ 
    id: '', 
    status: ''
});


async function updateStatus() {
    if (!selectedShipment.value) return;

    // Define the order of statuses
    const statusOrder = [
        "Order placed",
        "Waiting for courier",
        "In transit",
        "Order delivered"
    ];

    // Find the current status index
    const currentIndex = statusOrder.indexOf(selectedShipment.value.status);
    
    // Ensure the current status exists in the array and isn't the last status
    if (currentIndex === -1 || currentIndex === statusOrder.length - 1) return;

    // Get the next status
    const nextStatus = statusOrder[currentIndex + 1];

    // Set statusData with the new status
    statusData.id = selectedShipment.value.id;
    statusData.status = nextStatus;

    await store.dispatch('User/updateStatus', statusData)
    .then((response) => {
        if(response.isSuccess) {
            selectedShipment.value.status = nextStatus; // Update frontend status
        }
    })
    .catch((error) => {
        console.error("Error updating status:", error);
    });
}

/******************************************************************
FUNCTION FOR CANCEL
******************************************************************/
function getCancelList() {
    store.dispatch('User/getCancelList');
}


onMounted(() => {
    getCancelList();
})
const handleCancellationClick = (cancel) => {
  selectedShipment.value = cancel;
};

const showConfirmDelete = ref(false);
const confirmCancellationId = ref(null);

function showDeleteConfirmation(id) {
  confirmCancellationId.value = id;
  showConfirmDelete.value = true;
}

function cancelDeletion() {
  showConfirmDelete.value = false;
  confirmCancellationId.value = null;
}

function deleteCancellation(id) {
  // Find the cancellation by ID and delete it from the list
  const index = cancellations.value.findIndex(cancellation => cancellation.id === id);
  if (index !== -1) {
    cancellations.value.splice(index, 1);
  }

  // Close the confirmation modal
  showConfirmDelete.value = false;
  confirmCancellationId.value = null;
}

/******************************************************************
FUNCTION FOR REFUN/RETURN
******************************************************************/
function getRefundList() {
    store.dispatch('User/getRefundList');
}


onMounted(() => {
    getRefundList();
})

const handleRefundClick = (refund) => {
  selectedShipment.value = refund;
};


/******************************************************************
FUNCTION FOR LOG OUT
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
  </script>
  

