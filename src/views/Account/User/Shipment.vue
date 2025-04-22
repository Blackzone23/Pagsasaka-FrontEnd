<template>

	<div class="flex min-h-screen bg-gray-100">
		<div class="flex-1 flex flex-col">
		<!-- Header -->
		<header class="bg-[#285a19]  shadow p-4 flex justify-between items-center text-white">
			<h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Shipment</h1>
			<div class="flex items-center space-x-4">
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
		</header>

			<div class="p-5">
				<div v-if="!selectedShipment">
					<!-- Tabs Navigation -->
					<div class="mb-4 text-sm flex flex-wrap gap-2">
						<button class="px-4 py-2 rounded transition" :class="{ 'bg-blue-500 text-white': activeTab === 'orders', 'bg-gray-200': activeTab !== 'orders' }" @click="activeTab = 'orders'"> My Orders</button>
						<button class="px-4 py-2 rounded transition" :class="{ 'bg-red-500 text-white': activeTab === 'cancellations', 'bg-gray-200': activeTab !== 'cancellations' }" @click="activeTab = 'cancellations'"> Cancellations</button>
						<!-- <button class="px-4 py-2 rounded transition" :class="{ 'bg-yellow-500 text-white': activeTab === 'refunds', 'bg-gray-200': activeTab !== 'refunds' }" @click="activeTab = 'refunds'"> Return and Refund</button> -->
					</div>

					<!-- Tables -->
					<div>
						<table v-if="activeTab === 'orders'" class="table-auto w-full border-collapse border border-gray-300">
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
							<tr
							v-for="order in orderList"
							:key="order.id"
							class="even:bg-gray-50 hover:bg-gray-200 text-center text-sm cursor-pointer"
							@click="handleOrderClick(order)"
							>
							<td class="px-4 py-2">{{ order.product_name }}</td>
							<td class="px-4 py-2">{{ order.created_at }}</td>
							<td class="px-4 py-2">{{ order.updated_at }}</td>
							<td class="px-4 py-2">{{ order.ship_to }}</td>
							<td class="px-4 py-2">{{ order.status }}</td>
							</tr>
						</tbody>
						</table>
					</div>

						<!-- Tables -->
						<div>
						<table v-if="activeTab === 'cancellations'" class="table-auto w-full border-collapse border border-gray-300">
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
							<tr
							v-for="cancel in cancellationList"
							:key="cancel.id"
							class="even:bg-gray-50 hover:bg-gray-200 text-center text-sm cursor-pointer"
							@click="handleCancellationClick(cancel)"
							>
							<td class="px-4 py-2">{{ cancel.product_name }}</td>
							<td class="px-4 py-2">{{ cancel.created_at }}</td>
							<td class="px-4 py-2">{{ cancel.updated_at }}</td>
							<td class="px-4 py-2">{{ cancel.ship_to }}</td>
							<td class="px-4 py-2">{{ cancel.status }}</td>
							</tr>
						</tbody>
						</table>
					</div>

						<!-- Tables -->
						<!-- <div>
						<table v-if="activeTab === 'refunds'" class="table-auto w-full border-collapse border border-gray-300">
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
							<tr
							v-for="refund in refundList"
							:key="refund.id"
							class="even:bg-gray-50 hover:bg-gray-200 text-center text-sm cursor-pointer"
							@click="handleRefundClick(refund)"
							>
							<td class="px-4 py-2">{{ refund.product_name }}</td>
							<td class="px-4 py-2">{{ refund.created_at }}</td>
							<td class="px-4 py-2">{{ refund.updated_at }}</td>
							<td class="px-4 py-2">{{ refund.ship_to }}</td>
							<td class="px-4 py-2">{{ refund.status }}</td>
							</tr>
						</tbody>
						</table>
					</div> -->

					<!-- Tracking Interface -->
					<div class="p-5 border-2 border-gray-300 rounded-md mt-2 text-center">
						<h1 class="text-lg font-bold">Select a Shipment</h1>
						<p class="text-sm">Please select a shipment from the table to view tracking details.</p>
					</div>
				</div>

				<!-- Order Status -->
				<div v-else class="p-5 border-2 rounded-md mt-2 text-center flex flex-col md:flex-row items-center md:items-start" :class="{ 'border-blue-300': selectedShipment.status === 'Order', 'border-red-300 text-red-600': selectedShipment.status === 'Cancelled', 'border-yellow-300 text-yellow-600': selectedShipment.status === 'Refund', 'border-[#608C54]': selectedShipment.status !== 'Order' && selectedShipment.status !== 'Cancelled' && selectedShipment.status !== 'Refund',}">
					<!-- Left Side - Tracking Info -->
					<div class="flex-1 text-center">
						<h1 class="text-lg font-bold">{{ selectedShipment.status }} Shipment</h1>
						<p class="text-sm">
							{{
								selectedShipment.status === 'Order'
								? 'This shipment is currently being processed.'
								: selectedShipment.status === 'Cancelled'
								? 'This shipment has been cancelled. Contact customer support for assistance.'
								: selectedShipment.status === 'Refund'
								? 'You should receive the refund in your account shortly.'
								: 'Tracking Details'
							}}
						</p>

						<!-- Tracking Process -->
						<div v-if="selectedShipment.status !== 'Cancelled' && selectedShipment.status !== 'Refund'">
							<div class="relative flex items-center justify-center mt-6">
								<div class="absolute w-3/4 md:w-[430px] h-1 bg-[#608C54] top-1/2 z-0"></div>
								<div class="flex space-x-10 md:space-x-[60px] z-10">
									<div v-for="status in trackingSteps" :key="status.id" :class="['w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center',getStatusClass(status.id),]">
										<Icon :icon="status.icon" class="text-white w-6 h-6 md:w-8 md:h-8" />
									</div>
								</div>
							</div>

							<div class="flex space-x-4 md:space-x-[47px] justify-center items-center text-center mt-2 text-xs md:text-sm">
								<span v-for="status in trackingSteps" :key="status.id">{{ status.label }}</span>
							</div>

							<div class="mt-8">
								<!-- <button @click="openPrintModal" class="py-2 px-3 font-semibold rounded-lg shadow-md text-white bg-blue-700 hover:bg-red-600 border-2  text-sm border-gray-300">
                                        Print Packing Slip
								</button> -->

								<div v-if="isshowPrintModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
									<div class="bg-white w-[700px] p-4 rounded-lg relative packing-slip-modal-content">
											<!-- Packing Slip Content -->
											<div class="mt-10 w-full">
											<div  v-for="print in printList" :key="print.id" class="bg-white p- border border-gray-400 rounded-lg text-sm font-sans">
												<!-- Header -->
												<div class="flex justify-between items-center border-b pb-2 mb-2">
													<div class="flex items-center gap-2">
														<!-- <img src="/path-to-pagsasaka-logo.png" alt="Pagsasaka Logo" class="h-10" /> -->
														<div>
															<h1 class="text-lg font-bold text-green-700">Pagsasaka</h1>
															<p class="text-xs text-gray-600">Farmers & Consumer</p>
														</div>
													</div>
													<div class="text-right">
														<p class="font-semibold text-lg">Logistics Logo</p>
													</div>
												</div>

												<!-- Order ID -->
												<div class="text-center mb-2">
													<p class="font-semibold">Product Name: {{ print.orderId }}</p>
														<!-- <img src="/path-to-barcode.png" alt="Barcode" class="h-10 mx-auto my-1" /> -->
													<p class="text-xs">{{ print.orderId }}</p>
												</div>

												<!-- Buyer & Seller Info -->
												<div class="grid grid-cols-2 gap-2 border-y py-2 mb-2">
												<div>
													<p class="font-semibold border-b pb-1">Buyer</p>
													<p class="font-bold">{{ print.name }}</p>
													<p v-html="print.address"></p>
												</div>
													<div>
														<p class="font-semibold border-b pb-1">Seller</p>
														<p class="font-bold">{{ print.name }}</p>
														<p v-html="print.address"></p>
													</div>
												</div>

												<!-- Product Info -->
												<div class="grid grid-cols-4 gap-2 items-start border-b pb-2 mb-2">
													<div class="col-span-1 flex flex-col items-center">
															<!-- <img src="/path-to-qr.png" alt="QR Code" class="h-20 w-20 mb-1" /> -->
														<p class="text-xs text-gray-600">{{ print.orderId }}</p>
													</div>
													<div class="col-span-3">
														<table class="w-full text-left text-sm">
															<thead>
																<tr class="border-b">
																<th class="py-1">Product (Qty)</th>
																<th class="py-1">Price</th>
																<th class="py-1">Total</th>
																</tr>
															</thead>
															<tbody>
																<tr v-for="(item, index) in order.items" :key="index">
																<td class="py-1">
																	<strong>{{ item.name }}</strong><br />
																	<span class="text-xs text-gray-600">Variants: {{ item.variant }}</span>
																</td>
																<td class="py-1">₱{{ item.price.toFixed(2) }}</td>
																<td class="py-1">₱{{ (item.price * item.quantity).toFixed(2) }}</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>

												<!-- Footer Order ID -->
												<div class="text-center font-semibold text-sm mt-4">
													Order ID: {{ order.orderId }}
												</div>
											</div>
										</div>

										<!-- Print Button Inside Modal -->
										<div class="mt-4 text-center">
											<button @click="downloadPackingSlipAsPDF" class="py-2 px-4 rounded-md bg-green-700 text-white"> Download Packing Slip as PDF
											</button>
										</div>
									</div>
								</div>
							</div>

							<!-- Approval Button -->
							<div class="flex justify-center mt-4">
								<button @click="updateStatus()"
								
								class="px-12 py-2 text-sm font-semibold rounded-lg shadow-md transition text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed"
								>Approve</button>
							</div>
							<!-- :disabled="selectedShipment?.status === 'Order placed' && !hasDownloadedSlip" -->
						</div>

						<!-- Back Button -->
						<button class="mt-4 px-4 py-2 bg-gray-300 font-semibold rounded-lg shadow-md  text-sm" @click="selectedShipment = null">
							Back to Shipments
						</button>
					</div>

					<!-- Right Side - Image -->
					<div v-if="image && image.delivery_proof" class="flex justify-center items-center mt-6 md:mt-0">
						<img :src="image.delivery_proof" alt="Shipment Image"
							class="border border-gray-500 w-[280px] h-[300px] md:w-[350px] md:h-[400px] rounded-lg shadow-md object-cover"/>
					</div>
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
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

const store = useStore();
const router = useRouter();

const orderList= computed(() => store.state.User.order.data);
const cancellationList= computed(() => store.state.User.cancel.data);
const refundList= computed(() => store.state.User.refund.data);
const printList= computed(() => store.state.User.print.data);
const image= computed(() => store.state.User.order.image);
const selectedShipment = ref(null);
const activeTab = ref('orders');
const sellerRaw  = computed(() => store.state.userData.data?.user || {})


/******************************************************************
FUNCTION FOR ORDER
******************************************************************/
function getOrderList() {
    store.dispatch('User/getOrderList');
}


onMounted(() => {
    getOrderList();
})


/******************************************************************
FUNCTION FOR IMAGE
******************************************************************/
function getImage() {
	store.dispatch('User/getImage');
}


onMounted(() => {
    getImage();
})

const handleOrderClick = (order) => {
    selectedShipment.value = order;
    store.dispatch('User/getImage', order.id);
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

	const statusOrder = [
		"Order placed",
		"Waiting for courier",
		"In transit",
		"Order delivered"
	];

	const currentIndex = statusOrder.indexOf(selectedShipment.value.status);

	if (currentIndex === -1 || currentIndex === statusOrder.length - 1) return;

	// Validation: if going from "Waiting for courier" to "In transit", require slip download
	if (
		statusOrder[currentIndex] === "Waiting for courier" &&
		!hasDownloadedSlip
	) {
		console.warn("Slip not downloaded yet.");
		return;
	}

	const nextStatus = statusOrder[currentIndex + 1];

	statusData.id = selectedShipment.value.id;
	statusData.status = nextStatus;

	await store.dispatch("User/updateStatus", statusData)
		.then((response) => {
			if (response.isSuccess) {
				selectedShipment.value.status = nextStatus;
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
FUNCTION FOR REFUND/RETURN
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
FUNCTION FOR PRINT LIST
******************************************************************/
function getPrintList(productId) {
  store.dispatch('User/getPrintList', productId);
}


onMounted(() => {
    getPrintList();
})


/******************************************************************
 FUNCTION FOR PRINT SLIP
******************************************************************/
const isshowPrintModal = ref(false);
const hasDownloadedSlip = ref(false);

const openPrintModal = () => {
    isshowPrintModal.value = true;
};

// Function to handle closing modal
function closePrintModal() {
    isshowPrintModal.value = false;
}


// State to control modal visibility
const showModal = ref(false);



const downloadPackingSlipAsPDF = () => {
  const modalContent = document.querySelector('.packing-slip-modal-content');
  if (!modalContent) {
    console.error('Modal content not found');
    return;
  }

  html2canvas(modalContent).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF();

    const pdfWidth = 210; // A4 width in mm
    const imgWidth = pdfWidth - 40; // leave some margin
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    doc.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
    doc.save('packing-slip.pdf');

    // ✅ Set to true after successful download
    hasDownloadedSlip.value = true;

    // Close modal
    closePrintModal();
  });
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
  