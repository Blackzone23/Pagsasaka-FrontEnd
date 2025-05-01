<template>
	<div class="flex min-h-screen bg-gray-100">
	  <div class="flex-1 flex flex-col">
			<!-- Header -->
			<header class="bg-[#285a19] shadow p-4 flex justify-between items-center text-white">
				<h1 class="text-lg sm:text-xl lg:text-2xl 2xl:ml-0 md:ml-10 xs:ml-6 2xs:ml-8 font-bold">Shipment</h1>
				<div class="flex items-center space-x-4">
					<div class="relative inline-block text-left">
						<div class="flex items-center space-x-2">
							<img :src="sellerRaw.avatar" alt="Profile" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover shadow-md"/>
							<Icon icon="uil:setting" width="20" height="20" class="cursor-pointer text-white sm:w-6 sm:h-6" @click="toggleDropdown"/>
						</div>
						<div v-if="dropdownVisible" class="absolute right-0 z-50 mt-2 w-40 sm:w-48 bg-white rounded shadow-lg">
							<a href="/seller-profile" class="block px-3 py-2 text-xs sm:text-sm text-black hover:bg-gray-100">Account Info</a>
							<button @click="logout" class="block w-full text-left px-3 py-2 text-xs sm:text-sm text-black hover:bg-gray-100">Logout</button>
						</div>
					</div>
				</div>
			</header>
	
			<div class="p-3 xs:p-4 sm:p-5 lg:p-6">
				<div v-if="!selectedShipment">
					<!-- Tabs Navigation -->
					<div class="mb-4 text-xs sm:text-sm flex flex-wrap gap-2">
						<button class="px-3 py-1.5 xs:px-4 xs:py-2 rounded transition" :class="{ 'bg-blue-500 text-white': activeTab === 'orders', 'bg-gray-200': activeTab !== 'orders' }" @click="activeTab = 'orders'">My Orders</button>
						<button class="px-3 py-1.5 xs:px-4 xs:py-2 rounded transition" :class="{ 'bg-red-500 text-white': activeTab === 'cancellations', 'bg-gray-200': activeTab !== 'cancellations' }" @click="activeTab = 'cancellations'">Cancellations</button>
						<button class="px-3 py-1.5 xs:px-4 xs:py-2 rounded transition" :class="{ 'bg-yellow-500 text-white': activeTab === 'refunds', 'bg-gray-200': activeTab !== 'refunds' }" @click="activeTab = 'refunds'">Return and Refund</button>
						<button class="px-3 py-1.5 xs:px-4 xs:py-2 rounded transition" :class="{ 'bg-green-500 text-white': activeTab === 'record', 'bg-gray-200': activeTab !== 'record' }" @click="activeTab = 'record'">Records</button>
					</div>
	
					<!-- Orders Table -->
					<div v-if="activeTab === 'orders'">
						<div class="mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
							<div class="flex items-center gap-2">
								<label for="order-date-filter" class="text-xs sm:text-sm font-semibold">Filter by Date:</label>
								<input id="order-date-filter" v-model="orderFilterDate" type="date" class="p-1.5 xs:p-2 border rounded-md text-xs sm:text-sm"/>
								<button v-if="orderFilterDate" @click="clearOrderFilter" class="px-2 py-1 xs:px-3 xs:py-1 bg-gray-300 text-xs sm:text-sm rounded-md hover:bg-gray-400">Clear</button>
							</div>
							<div class="flex items-center gap-2">
								<label for="order-status-filter" class="text-xs sm:text-sm font-semibold">Filter by Status:</label>
								<select id="order-status-filter" v-model="orderFilterStatus" class="p-1.5 xs:p-2 border rounded-md text-xs sm:text-sm" @change="debouncedFilterOrders">
									<option value="">All</option>
									<option value="Order placed">Order placed</option>
									<option value="Waiting for courier">Waiting for courier</option>
									<option value="In transit">In transit</option>
									<option value="Order delivered">Order delivered</option>
								</select>
								<button v-if="orderFilterStatus" @click="clearStatusFilter" class="px-2 py-1 xs:px-3 xs:py-1 bg-gray-300 text-xs sm:text-sm rounded-md hover:bg-gray-400">Clear Status</button>
							</div>
						</div>
						<div class="overflow-x-auto">
							<table class="table-auto w-full border-collapse border border-gray-300">
								<thead>
									<tr class="bg-gray-300">
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Name</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Created</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Last Updated</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Ship To</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Status</th>
									</tr>
								</thead>
								<tbody v-if="filteredOrderList.length > 0">
									<tr v-for="order in filteredOrderList" :key="order.id" class="even:bg-gray-50 hover:bg-gray-200 text-center text-xs sm:text-sm cursor-pointer" @click="handleOrderClick(order)">
										<td class="px-2 xs:px-4 py-2">{{ order.product_name }}</td>
										<td class="px-2 xs:px-4 py-2">{{ order.created_at }}</td>
										<td class="px-2 xs:px-4 py-2">{{ order.updated_at }}</td>
										<td class="px-2 xs:px-4 py-2">{{ order.ship_to }}</td>
										<td class="px-2 xs:px-4 py-2">{{ order.status }}</td>
									</tr>
								</tbody>
								<tbody v-else>
									<tr>
										<td colspan="5" class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm text-gray-500">
											{{
												orderFilterDate || orderFilterStatus
													? `No orders found for ${orderFilterDate || ''} ${orderFilterStatus ? orderFilterStatus : ''}`
													: 'No orders available'
											}}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- Cancellations Table -->
					<div v-if="activeTab === 'cancellations'">
						<div class="mb-4 flex items-center gap-2">
							<label for="cancel-date-filter" class="text-xs sm:text-sm font-semibold">Filter by Date:</label>
							<input id="cancel-date-filter" v-model="cancelFilterDate" type="date" class="p-1.5 xs:p-2 border rounded-md text-xs sm:text-sm" @input="debouncedFilterCancellations"/>
							<button v-if="cancelFilterDate" @click="clearCancelFilter" class="px-2 py-1 xs:px-3 xs:py-1 bg-gray-300 text-xs sm:text-sm rounded-md hover:bg-gray-400">Clear</button>
						</div>
						<div class="overflow-x-auto">
							<table class="table-auto w-full border-collapse border border-gray-300">
								<thead>
									<tr class="bg-gray-300">
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Name</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Created</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Last Updated</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Ship To</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Status</th>
									</tr>
								</thead>
								<tbody v-if="filteredCancellationList.length > 0">
									<tr v-for="cancel in filteredCancellationList" :key="cancel.id" class="even:bg-gray-50 hover:bg-gray-200 text-center text-xs sm:text-sm cursor-pointer" @click="handleCancellationClick(cancel)">
										<td class="px-2 xs:px-4 py-2">{{ cancel.product_name }}</td>
										<td class="px-2 xs:px-4 py-2">{{ cancel.created_at }}</td>
										<td class="px-2 xs:px-4 py-2">{{ cancel.updated_at }}</td>
										<td class="px-2 xs:px-4 py-2">{{ cancel.ship_to }}</td>
										<td class="px-2 xs:px-4 py-2">{{ cancel.status }}</td>
									</tr>
								</tbody>
								<tbody v-else>
									<tr>
										<td colspan="5" class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm text-gray-500">
											{{ cancelFilterDate ? `No cancellations found for ${cancelFilterDate}` : 'No cancellations available' }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
	
					<!-- Refunds Table -->
					<div v-if="activeTab === 'refunds'">
						<div class="mb-4 flex items-center gap-2">
							<label for="refund-date-filter" class="text-xs sm:text-sm font-semibold">Filter by Date:</label>
							<input id="refund-date-filter" v-model="refundFilterDate" type="date" class="p-1.5 xs:p-2 border rounded-md text-xs sm:text-sm" @input="debouncedFilterRefunds"/>
							<button v-if="refundFilterDate" @click="clearRefundFilter" class="px-2 py-1 xs:px-3 xs:py-1 bg-gray-300 text-xs sm:text-sm rounded-md hover:bg-gray-400">Clear</button>
						</div>
						<div class="overflow-x-auto">
							<table class="table-auto w-full border-collapse border border-gray-300">
								<thead>
									<tr class="bg-gray-300">
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Name</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Created</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Last Updated</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Ship To</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Status</th>
										<th class="px-2 xs:px-4 py-2 text-xs sm:text-sm">Action</th>
									</tr>
								</thead>
								<tbody v-if="filteredRefundList.length > 0">
									<tr v-for="refund in filteredRefundList" :key="refund.id" class="even:bg-gray-50 hover:bg-gray-200 text-center text-xs sm:text-sm cursor-pointer">
										<td class="px-2 xs:px-4 py-2">{{ refund.product_name }}</td>
										<td class="px-2 xs:px-4 py-2">{{ refund.created_at }}</td>
										<td class="px-2 xs:px-4 py-2">{{ refund.updated_at }}</td>
										<td class="px-2 xs:px-4 py-2">{{ refund.ship_to }}</td>
										<td class="px-2 xs:px-4 py-2">{{ refund.status }}</td>
										<td class="px-2 xs:px-4 py-2 text-end">
											<button @click="approveRefund(refund.id)" :disabled="refund.status === 'Refund' || approvingRefundId === refund.id"
												:class="[ 'font-bold py-1 xs:py-2 px-3 xs:px-4 rounded text-xs sm:text-sm', refund.status === 'Refund'
												? 'bg-gray-400 cursor-not-allowed'
												: 'bg-green-500 hover:bg-green-700 text-white',
												approvingRefundId === refund.id && 'opacity-50 cursor-wait']">
												{{ approvingRefundId === refund.id ? 'Approving...' : 'Approve' }}
											</button>
										</td>
									</tr>
								</tbody>
								<tbody v-else>
									<tr>
										<td colspan="6" class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm text-gray-500">
											{{ refundFilterDate ? `No refunds found for ${refundFilterDate}` : 'No refunds available' }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
					<!-- Records Table -->
					<div v-if="activeTab === 'record'">
						<div class="mb-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
							<div class="flex items-center gap-2">
								<label for="order-date-filter" class="text-xs sm:text-sm font-semibold">Filter by Date:</label>
								<input id="order-date-filter" v-model="recordFilterDate" type="date" class="p-1.5 xs:p-2 border rounded-md text-xs sm:text-sm"/>
								<button v-if="recordFilterDate" @click="clearRecordFilter" class="px-2 py-1 xs:px-3 xs:py-1 bg-gray-300 text-xs sm:text-sm rounded-md hover:bg-gray-400">Clear</button>
							</div>
							<div class="flex items-center gap-2">
								<label for="order-status-filter" class="text-xs sm:text-sm font-semibold">Filter by Status:</label>
								<select id="order-status-filter" v-model="recordFilterStatus" class="p-1.5 xs:p-2 border rounded-md text-xs sm:text-sm">
									<option value="">All</option>
									<option value="Order placed">Order placed</option>
									<option value="Waiting for courier">Waiting for courier</option>
									<option value="In transit">In transit</option>
									<option value="Order delivered">Order delivered</option>
								</select>
								<button v-if="recordFilterStatus" @click="clearstatusFilter" class="px-2 py-1 xs:px-3 xs:py-1 bg-gray-300 text-xs sm:text-sm rounded-md hover:bg-gray-400">Clear Status</button>
							</div>
							<button @click="printOrders" class="flex items-center gap-2 px-3 py-1 xs:px-4 xs:py-1 bg-green-700 text-white text-xs sm:text-sm rounded-md hover:bg-green-600"><Icon icon="arcticons:print" width="24" height="24"  style="color: #f9fffb" />Print</button>
						</div>
						<div class="flex flex-col items-center">
							<div class="max-h-[200px] xs:max-h-[250px] sm:max-h-[300px] md:max-h-[400px] overflow-y-auto w-full">
								<table class="min-w-full bg-white">
									<thead class="bg-gray-200 sticky top-0 z-10">
										<tr>
											<th class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">Name</th>
											<th class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">Orders</th>
											<th class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">Quantity</th>
											<th class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">Total Amount</th>
											<th class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">Date</th>
										</tr>
									</thead>
									<tbody v-if="filteredRecord.length > 0">
										<tr v-for="record in filteredRecord" :key="record.id" class="hover:bg-gray-50">
											<td class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">{{ record.full_name }}</td>
											<td class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">{{ record.product_name }}</td>
											<td class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">{{ record.quantity }}</td>
											<td class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">{{ record.total_amount }}</td>
											<td class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm">{{ record.created_at }}</td>
										</tr>
									</tbody>
									<tbody v-else>
										<tr>
											<td colspan="5" class="px-2 xs:px-4 py-2 text-center text-xs sm:text-sm text-gray-500">
												{{
													recordFilterDate || recordFilterStatus
														? `No orders found for ${recordFilterDate || ''} ${recordFilterStatus ? recordFilterStatus : ''}`
														: 'No orders available'
												}}
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
					</div>
	
					<!-- Tracking Interface -->
					<div class="p-3 xs:p-4 sm:p-5 border-2 border-gray-300 rounded-md mt-2 text-center">
						<h1 class="text-base sm:text-lg font-bold">Select a Shipment</h1>
						<p class="text-xs sm:text-sm">Please select a shipment from the table to view tracking details.</p>
					</div>
				</div>
	
				<!-- Order Status -->
				<div v-else class="p-3 xs:p-4 sm:p-5 border-2 rounded-md mt-2 text-center flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start" :class="{ 'border-blue-300': selectedShipment.status === 'Order', 'border-red-300 text-red-600': selectedShipment.status === 'Cancelled', 'border-yellow-300 text-yellow-600': selectedShipment.status === 'Refund', 'border-[#608C54]': selectedShipment.status !== 'Order' && selectedShipment.status !== 'Cancelled' && selectedShipment.status !== 'Refund' }">
					<!-- Left Side - Tracking Info -->
					<div class="flex-1 text-center">
						<h1 class="text-base sm:text-lg md:text-xl font-bold">{{ selectedShipment.status }} Shipment</h1>
						<p class="text-xs sm:text-sm">
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
							<div class="relative flex items-center justify-center mt-4 sm:mt-6">
								<div class="absolute w-3/4 h-1 bg-[#608C54] top-1/2 z-0"></div>
								<div class="flex space-x-6 xs:space-x-8 sm:space-x-10 md:space-x-12 lg:space-x-16 z-10">
									<div v-for="status in trackingSteps" :key="status.id" :class="['w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center', getStatusClass(status.id)]">
										<Icon :icon="status.icon" class="text-white w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
									</div>
								</div>
							</div>

							<div class="flex space-x-2 xs:space-x-4 sm:space-x-6 md:space-x-10 lg:space-x-14 justify-center items-center text-center mt-2 text-[10px] xs:text-xs sm:text-sm">
								<span v-for="status in trackingSteps" :key="status.id">{{ status.label }}</span>
							</div>

							<div class="mt-6 sm:mt-8">
								<div v-if="isshowPrintModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
									<div class="bg-white w-full max-w-[90%] sm:max-w-[700px] p-4 rounded-lg relative packing-slip-modal-content">
										<!-- Packing Slip Content -->
										<div class="mt-6 sm:mt-10 w-full">
											<div v-for="print in printList" :key="print.id" class="bg-white p-3 sm:p-4 border border-gray-400 rounded-lg text-xs sm:text-sm font-sans">
												<!-- Header -->
												<div class="flex flex-col sm:flex-row justify-between items-center border-b pb-2 mb-2 gap-2">
													<div class="flex items-center gap-2">
														<div>
															<h1 class="text-base sm:text-lg font-bold text-green-700">Pagsasaka</h1>
															<p class="text-[10px] sm:text-xs text-gray-600">Farmers & Consumer</p>
														</div>
													</div>
													<div class="text-right">
														<p class="font-semibold text-base sm:text-lg">Logistics Logo</p>
													</div>
												</div>

												<!-- Order ID -->
												<div class="text-center mb-2">
													<p class="font-semibold">Product Name: {{ print.orderId }}</p>
													<p class="text-[10px] sm:text-xs">{{ print.orderId }}</p>
												</div>

												<!-- Buyer & Seller Info -->
												<div class="grid grid-cols-1 sm:grid-cols-2 gap-2 border-y py-2 mb-2">
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
												<div class="grid grid-cols-1 sm:grid-cols-4 gap-2 items-start border-b pb-2 mb-2">
													<div class="col-span-1 flex flex-col items-center">
														<p class="text-[10px] sm:text-xs text-gray-600">{{ print.orderId }}</p>
													</div>
													<div class="col-span-1 sm:col-span-3">
														<table class="w-full text-left text-[10px] sm:text-xs">
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
																		<span class="text-[9px] sm:text-xs text-gray-600">Variants: {{ item.variant }}</span>
																	</td>
																	<td class="py-1">₱{{ item.price.toFixed(2) }}</td>
																	<td class="py-1">₱{{ (item.price * item.quantity).toFixed(2) }}</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>

												<!-- Footer Order ID -->
												<div class="text-center font-semibold text-xs sm:text-sm mt-4">
													Order ID: {{ order.orderId }}
												</div>
											</div>
										</div>

										<!-- Print Button Inside Modal -->
										<div class="mt-4 text-center">
											<button @click="downloadPackingSlipAsPDF" class="py-1.5 xs:py-2 px-3 xs:px-4 rounded-md bg-green-700 text-white text-xs sm:text-sm">Download Packing Slip as PDF</button>
										</div>
									</div>
								</div>
							</div>

							<!-- Approval Button -->
							<div class="flex justify-center mt-4">
								<button @click="updateStatus()" class="px-8 xs:px-10 sm:px-12 py-1.5 xs:py-2 text-xs sm:text-sm font-semibold rounded-lg shadow-md transition text-white bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed">Approve</button>
							</div>
						</div>

						<!-- Back Button -->
						<button class="mt-4 px-3 xs:px-4 py-1.5 xs:py-2 bg-gray-300 font-semibold rounded-lg shadow-md text-xs sm:text-sm" @click="selectedShipment = null">Back to Shipments</button>
					</div>

					<!-- Right Side - Image -->
					<div v-if="image && image.delivery_proof" class="flex justify-center items-center mt-4 md:mt-0">
						<img :src="image.delivery_proof" alt="Shipment Image" class="border border-gray-500 w-[200px] h-[220px] xs:w-[240px] xs:h-[260px] sm:w-[280px] sm:h-[300px] md:w-[320px] md:h-[360px] lg:w-[350px] lg:h-[400px] rounded-lg shadow-md object-cover"/>
					</div>
				</div>
			</div>
	  </div>
	</div>
</template>

<script setup>
import Loading from '@/components/Alerts/Loading.vue'
import Toast from '@/components/Alerts/Toast.vue'
import { debounce } from 'lodash';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import logo from '@/assets/Logo2.png'

const store = useStore();
const router = useRouter();

const orderList = computed(() => store.state.User.order.data);
const cancellationList = computed(() => store.state.User.cancel.data);
const refundList = computed(() => store.state.User.refund.data);
const printList = computed(() => store.state.User.print.data);
const recordList = computed(() => store.state.User.record.data);
const image = computed(() => store.state.User.order.image);
const selectedShipment = ref(null);
const activeTab = ref('orders');
const sellerRaw = computed(() => store.state.userData.data?.user || {});

/******************************************************************
 FUNCTION FOR FILTER
******************************************************************/
const recordFilterDate = ref('');
const recordFilterStatus = ref('');

// Helper function to parse "April 21 2025" into "2025-04-21"
const parseDateString = (dateStr) => {
  const [month, day, year] = dateStr.split(' ');
  const monthMap = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12',
  };
  const monthNum = monthMap[month];
  return `${year}-${monthNum}-${day.padStart(2, '0')}`;
};

// Computed property for filtered records
const filteredRecord = computed(() => {
  let filtered = [...recordList.value];

  // Filter by status
  if (recordFilterStatus.value) {
    filtered = filtered.filter((record) => record.status === recordFilterStatus.value);
  }

  // Filter by date
  if (recordFilterDate.value) {
    filtered = filtered.filter((record) => {
      // Parse the created_at string to YYYY-MM-DD format
      const recordDate = parseDateString(record.created_at);
      return recordDate === recordFilterDate.value;
    });
  }

  return filtered;
});

// Debounced filter function
const debouncedFilterRecord = debounce(() => {
  // Filters are automatically applied through the computed filteredReports
}, 300);

// Clear filters
const clearRecordFilter = () => {
  recordFilterDate.value = '';
  debouncedFilterRecord();
};

const clearstatusFilter = () => {
  recordFilterStatus.value = '';
  debouncedFilterRecord();
};

/******************************************************************
 FUNCTION FOR PRINTING
******************************************************************/

const printOrders = () => {
  const printWindow = window.open('', '_blank');

  let printContent = `
    <html>
    <head>
      <title>Pagsasaka Report</title>
      <style>
        body { font-family: Arial, sans-serif; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { border: 1px solid #ddd; padding: 8px; text-align: center; }
        th { background-color: #f2f2f2; }
        h1 { text-align: start; font-size: 1.5rem; } 
        .logo { max-width: 200px; display: block; margin: 0 auto 20px; }
      </style>
    </head>
    <body>
      <img src="${logo}" class="logo" alt="Company Logo" />
     	<h1>Order Record</h1>
      <table>
        <thead>
          <tr>
           	<th>Name</th>
			<th>Orders</th>
			<th>Quantity</th>
			<th>Total Amount</th>
			<th>Date</th>
          </tr>
        </thead>
        <tbody>
`;

  if (filteredRecord.value.length > 0) {
    filteredRecord.value.forEach(record => {
      printContent += `
        <tr>
         	<td>${record.full_name}</td>
			<td>${record.product_name}</td>
			<td>${record.quantity}</td>
			<td>${record.total_amount}</td>
			<td>${record.created_at}</td>
        </tr>
      `;
    });
  } else {
    printContent += `
      <tr>
        <td colspan="5">No orders found for the selected filters</td>
      </tr>
    `;
  }

  printContent += `
        </tbody>
      </table>
    </body>
    </html>
  `;

  printWindow.document.write(printContent);
  printWindow.document.close();

  // Wait for the logo image to load before printing
  const logoImg = printWindow.document.querySelector('.logo');
  if (logoImg) {
    logoImg.onload = () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
    // Handle case where the image fails to load
    logoImg.onerror = () => {
      console.error('Failed to load logo image');
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
  } else {
    // If there's no logo, proceed with printing
    printWindow.focus();
    printWindow.print();
    printWindow.close();
  }
};
/******************************************************************
FUNCTION FOR ORDER
******************************************************************/
function getRecordList() {
  store.dispatch('User/getRecordList');
}

onMounted(() => {
	getRecordList();
});

// Date filter variables
const orderFilterDate = ref('');
const cancelFilterDate = ref('');
const refundFilterDate = ref('');
const orderFilterStatus = ref(''); // New status filter

/******************************************************************
FUNCTION FOR DATE
******************************************************************/
// Helper function to parse "Month DD YYYY" to "YYYY-MM-DD"

const parseDate = (dateStr) => {
  if (!dateStr) return null;
  // Split "April 21 2025" into parts
  const months = {
    'January': '01', 
	'February': '02', 
	'March': '03',
	'April': '04',
    'May': '05',
	'June': '06',
	'July': '07', 
	'August': '08',
    'September': '09',
	'October': '10', 
	'November': '11', 
	'December': '12'
  };
  const [month, day, year] = dateStr.split(' ');
  if (!month || !day || !year || !months[month]) {
    console.warn(`Invalid date format: ${dateStr}`);
    return null;
  }
  const formattedDate = `${year}-${months[month]}-${day.padStart(2, '0')}`;
  console.log(`Input: ${dateStr}, Formatted: ${formattedDate}`);
  return formattedDate;
};

// Computed properties for filtered lists
const filteredOrderList = computed(() => {
  let filtered = orderList.value;

  // Filter by date
  if (orderFilterDate.value) {
    filtered = filtered.filter((order) => {
      const createdDate = parseDate(order.created_at);
      return createdDate === orderFilterDate.value;
    });
  }

  // Filter by status
  if (orderFilterStatus.value) {
    filtered = filtered.filter(
      (order) => order.status.toLowerCase() === orderFilterStatus.value.toLowerCase()
    );
  }

  return filtered;
});


const filteredCancellationList = computed(() => {
  if (!cancelFilterDate.value) return cancellationList.value;
  const filtered = cancellationList.value.filter(cancel => {
    const createdDate = parseDate(cancel.created_at);
    const matches = createdDate === cancelFilterDate.value;
    return matches;
  });
  console.log('Filtered Cancellations:', filtered);
  return filtered;
});

const filteredRefundList = computed(() => {
  if (!refundFilterDate.value) return refundList.value;
  const filtered = refundList.value.filter(refund => {
    const createdDate = parseDate(refund.created_at);
    const matches = createdDate === refundFilterDate.value;
    return matches;
  });
  console.log('Filtered Refunds:', filtered);
  return filtered;
});

// Debounced filter functions
const debouncedFilterOrders = debounce(() => {
  // Trigger computed property update by reactivity
}, 300);

const debouncedFilterCancellations = debounce(() => {
  // Trigger computed property update by reactivity
}, 300);

const debouncedFilterRefunds = debounce(() => {
  // Trigger computed property update by reactivity
}, 300);

// Clear filter methods
const clearStatusFilter = () => {
	orderFilterStatus.value = '';
};

// Clear filter methods
const clearOrderFilter = () => {
  orderFilterDate.value = '';
};


const clearCancelFilter = () => {
  cancelFilterDate.value = '';
};

const clearRefundFilter = () => {
  refundFilterDate.value = '';
};

/******************************************************************
FUNCTION FOR ORDER
******************************************************************/
function getOrderList() {
  store.dispatch('User/getOrderList');
}

onMounted(() => {
  getOrderList();
});

/******************************************************************
FUNCTION FOR IMAGE
******************************************************************/
function getImage() {
  store.dispatch('User/getImage');
}

onMounted(() => {
  getImage();
});

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
  const currenthyphen = statusOrder.indexOf(selectedShipment.value.status.toLowerCase());
  const stepIndex = statusOrder.indexOf(id.toLowerCase());

  if (stepIndex < currenthyphen) return "bg-green-500"; // Completed steps
  if (stepIndex === currenthyphen) return "bg-[#608C54]"; // Current step
  return "bg-gray-300"; // Pending steps
};

// Approval status
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
});

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
  const index = cancellations.value.findIndex(cancellation => cancellation.id === id);
  if (index !== -1) {
    cancellations.value.splice(index, 1);
  }
  showConfirmDelete.value = false;
  confirmCancellationId.value = null;
}

/******************************************************************
FUNCTION FOR REFUND/RETURN
******************************************************************/
const approvingRefundId = ref(null); 

function getRefundList() {
  store.dispatch('User/getRefundList');
}

onMounted(() => {
  getRefundList();
});

const approveRefund = async (refundId) => {
  approvingRefundId.value = refundId;
  try {
    const approveData = { id: refundId };
    await store.dispatch('User/approveRefund', approveData);
    await store.dispatch('User/getRefundList');
  } catch (error) {
    console.error('Failed to approve refund:', error);
  } finally {
    approvingRefundId.value = null;
  }
};

/******************************************************************
FUNCTION FOR PRINT LIST
******************************************************************/
// function getPrintList(productId) {
//   store.dispatch('User/getPrintList', productId);
// }

// onMounted(() => {
//   getPrintList();
// });

/******************************************************************
FUNCTION FOR PRINT SLIP
******************************************************************/
const isshowPrintModal = ref(false);
const hasDownloadedSlip = ref(false);

const openPrintModal = () => {
  isshowPrintModal.value = true;
};

function closePrintModal() {
  isshowPrintModal.value = false;
}

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

    hasDownloadedSlip.value = true;
    closePrintModal();
  });
};

/******************************************************************
FUNCTION FOR LOG OUT
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
</script>