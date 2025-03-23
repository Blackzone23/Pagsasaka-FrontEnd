<template>
     <div>
        <header class="bg-[#608C54] shadow p-4 flex justify-between items-center text-white">
        <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Order Transaction</h1>
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

        <!-- Tabs -->
        <div class="mt-4">
            <div class="flex justify-center border-b border-gray-200">
                <button v-for="tab in tabs" :key="tab" :class="[ 'px-4 py-2 focus:outline-none', activeTab === tab ? 'border-b-2 border-[#608C54] text-[#608C54]' : 'text-gray-600' ]" @click="activeTab = tab">
                {{ tab }}
                </button>
            </div>

            <!-- Tab Content -->
            <div class="mt-4 p-4">
                <div v-if="activeTab === 'Unshipped'">
                    <BaseLabel class="text-xl font-bold">Order:</BaseLabel>
                    <div class="flex items-center space-x-28 py-2 border-2 border-gray-300 rounded-md justify-center text-sm ">
                        <h1 >Action on Selected</h1>
                        <button class="border-2 border-gray-300 py-2 px-4 hover:bg-gray-200 rounded-full" >Print Packing Slip(s)</button>
                        <button class="border-2 border-gray-300 py-2 px-4 hover:bg-gray-200 rounded-full">Confirm Shipment(s)</button>
                    </div>
                    <div class="mt-5">
                        <!-- Header Row -->
                        <div class="flex items-center justify-center py-2 space-x-32 border-2 border-gray-300 rounded-md pb-5">
                            <div class="flex items-center space-x-2 w-1/6 pl-3">
                                <BaseCheckBox class="mt-2" />
                                <BaseLabel class="text-black">Order Date</BaseLabel>
                            </div>
                            <BaseLabel class="text-black w-1/6">Order Details</BaseLabel>
                            <BaseLabel class="text-black w-1/6">Image</BaseLabel>
                            <BaseLabel class="text-black w-1/6">Product Name</BaseLabel>
                            <BaseLabel class="text-black w-1/6">Customer Option</BaseLabel>
                            <BaseLabel class="text-black w-1/6">Action</BaseLabel>
                        </div>

                        <!-- Dynamic Order Rows -->
                        <div class="mt-5 overflow-y-auto max-h-64">
                            <!-- Order List -->
                            <div v-for="(order, index) in orders" :key="index" class="border-2 border-gray-300 mt-5 p-4 flex items-center space-x-16">
                                <div class="flex items-center w-1/6">
                                    <BaseCheckBox />
                                    <div class="ml-3 text-sm">
                                    <p>{{ order.daysAgo }} Days ago</p>
                                    <p>{{ order.orderDate }}</p>
                                    <p>{{ order.time }}</p>
                                    </div>
                                </div>
                                <div class="text-sm w-1/6">
                                    <h1 class="font-bold">Order ID:</h1>
                                    <p>{{ order.orderId }}</p>
                                    <h1 class="font-bold">Buyer Name:</h1>
                                    <p>{{ order.buyerName }}</p>
                                </div>
                                <div class="w-1/6">
                                    <img :src="order.image" alt="Order Image" class="w-[100px] h-[50px]" />
                                </div>
                                <div class="text-sm w-1/6">
                                    <p>{{ order.productName }}</p>
                                    <p>Quantity: {{ order.quantity }}</p>
                                    <p>Item Subtotal: ₱{{ order.itemSubtotal }}</p>
                                </div>
                                <div class="text-xs w-1/6">
                                    <p>Ship by date: {{ order.shipByDate }}</p>
                                    <p>Deliver by date: {{ order.deliverByDate }}</p>
                                    <p>Recommended Carrier: {{ order.carrier }}</p>
                                </div>
                                <div class="text-xs flex flex-col space-y-5 w-1/6">
                                    <button @click="openConfirmPopupModal" class="bg-[#608C54] py-2 px-4 text-white rounded-md">Confirm Shipment</button>
                                    <button class="py-2 px-4 rounded-md border-2 border-gray-300">Print Packing Slip</button>
                                    <button @click="openCancelPopupModal" class="bg-red-500 py-2 px-4 rounded-md">Cancel Order</button>
                                </div>

                                <!-- Confirm Shipment Modal -->
                                <div v-if="isshowConfirmPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 z-50">
                                    <div class="bg-white p-6 rounded-lg shadow-lg w-auto h-auto">
                                            <div class="p-8 max-h-[80vh] overflow-y-auto">
                                            <BaseLabel class="text-2xl font-bold">Complete your Order</BaseLabel>
                                            <div class="flex items-center space-x-3 text-sm mt-3">
                                                <h1 class="text-lg font-semibold">Order Details:</h1>
                                                <p>Order ID # {{ selectedOrder.orderId }}</p>
                                            </div>

                                            <div class="w-[900px] grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
                                                <!-- Order Summary -->
                                                <div class="border-2 rounded-lg p-4 shadow-sm text-sm">
                                                    <div class="flex justify-between items-center">
                                                        <h2 class="text-lg font-bold mb-2">Order Summary</h2>
                                                        <button @click="editOrderSummary" class="text-blue-500 text-xl">
                                                        <Icon icon="mdi:pencil" />
                                                        </button>
                                                    </div>
                                                    <p><span class="font-semibold">Ship by:</span> {{ selectedOrder.shipByDate }}</p>
                                                    <p><span class="font-semibold">Delivery by:</span> {{ selectedOrder.deliverByDate }}</p>
                                                    <p><span class="font-semibold">Purchase date:</span> {{ selectedOrder.orderDate }}, {{ selectedOrder.time }}</p>
                                                    <p class="mt-2"><span class="font-semibold">Shipping Service:</span> {{ selectedOrder.carrier }}</p>
                                                </div>

                                                <!-- Customer Details -->
                                                <div class="border-2 rounded-lg p-4 shadow-sm text-sm">
                                                    <div class="flex justify-between items-center">
                                                        <h2 class="text-lg font-bold mb-2">Customer Details</h2>
                                                        <button @click="editCustomerDetails" class="text-blue-500 text-xl">
                                                        <Icon icon="mdi:pencil" />
                                                        </button>
                                                    </div>
                                                    <p><span class="font-semibold">Name:</span> {{ selectedOrder.buyerName }}</p>
                                                    <p><span class="font-semibold">Customer Address:</span></p>
                                                    <p class="ml-4">{{ selectedOrder.address }}</p>
                                                    <p class="mt-2"><span class="font-semibold">Phone number:</span> {{ selectedOrder.phone }}</p>
                                                </div>

                                                <!-- Sales Proceeds -->
                                                <div class="border-2 rounded-lg p-4 shadow-sm text-sm">
                                                    <div class="flex justify-between items-center">
                                                        <h2 class="text-lg font-bold mb-2">Sales proceeds</h2>
                                                        <button @click="editSalesProceeds" class="text-blue-500 text-xl">
                                                        <Icon icon="mdi:pencil" />
                                                        </button>
                                                    </div>
                                                    <p><span class="font-semibold">Item Subtotal:</span> ₱{{ selectedOrder.itemSubtotal }}</p>
                                                    <p><span class="font-semibold">Tax:</span> ₱00.00</p>
                                                    <p><span class="font-semibold">Promotion:</span> ₱00.00</p>
                                                    <p class="mt-2"><span class="font-semibold">Item Total:</span> ₱{{ selectedOrder.itemSubtotal }}</p>
                                                    <div class="mt-2">
                                                        <p>VAT amounts are not final until the shipment is complete</p>
                                                    </div>
                                                </div>

                                                <!-- Seller Note -->
                                                <div class="border-2 rounded-lg p-4 shadow-sm text-sm">
                                                    <div class="flex justify-between items-center">
                                                        <h2 class="text-lg font-bold mb-2">Seller Note</h2>
                                                    </div>
                                                    <BaseInputField class="shadow-md pb-28" placeholder="For your records only, will not be displayed to the buyer"></BaseInputField>
                                                </div>
                                            </div>

                                            <div class="space-y-4 mt-3">
                                                <div class="flex items-center space-x-4">
                                                    <BaseLabel class="font-semibold w-1/2">Ship Date:</BaseLabel>
                                                    <BaseSelectField class="w-96">
                                                        <BaseOptionDefaultField></BaseOptionDefaultField>
                                                        <BaseOptionField></BaseOptionField>
                                                    </BaseSelectField>
                                                </div>

                                                <div class="flex items-center space-x-4">
                                                    <BaseLabel class="font-semibold w-1/2">Carrier:</BaseLabel>
                                                    <BaseSelectField class="w-96">
                                                        <BaseOptionDefaultField></BaseOptionDefaultField>
                                                        <BaseOptionField></BaseOptionField>
                                                    </BaseSelectField>
                                                </div>

                                                <div class="flex items-center space-x-4">
                                                    <BaseLabel class="font-semibold w-1/2">Shipping Service:</BaseLabel>
                                                    <BaseSelectField class="w-96">
                                                        <BaseOptionDefaultField></BaseOptionDefaultField>
                                                        <BaseOptionField></BaseOptionField>
                                                    </BaseSelectField>
                                                </div>

                                                <div class="flex items-center space-x-4">
                                                    <BaseLabel class="font-semibold w-1/2">Tracking ID:</BaseLabel>
                                                    <BaseSelectField class="w-96">
                                                        <BaseOptionDefaultField></BaseOptionDefaultField>
                                                        <BaseOptionField></BaseOptionField>
                                                    </BaseSelectField>
                                                </div>
                                            </div>

                                            <div class="mt-5 text-end space-x-4">
                                                <button @click="closeConfirmPopupModal" class="py-2 px-4 rounded-md border-2 border-gray-200 text-sm">
                                                Cancel
                                                </button>
                                                <button class="py-2 px-4 rounded-md text-white bg-[#608C54] text-sm">
                                                Confirm shipment
                                                </button>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                 <!-- Cancel Popup -->
                                <div v-if="isshowCancelPopup" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 z-50">
                                    <div class="bg-white p-6 rounded-lg shadow-lg w-96 border-2 border-gray-300">
                                        <h3 class="text-lg font-semibold mb-4 text-center">Are you sure you want to cancel the order?</h3>
                                        <div class="flex justify-end space-x-2">
                                            <button @click="confirmCancel()" class="bg-red-500 text-white py-2 px-9 rounded-md">Yes, Cancel</button>
                                            <button @click="closeCancelPopupModal" class="py-2 px-4 rounded-md border-2 border-gray-300">No, Keep Order</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-if="activeTab === 'Cancelled'">
                    <BaseLabel class="text-lg font-bold">{{ canceledShipmentsCount }} Cancelled</BaseLabel>
                    <p>The lists here are set to be automatically deleted after 30 days.</p>
                    <div class="overflow-x-auto mt-5">
                        <table class="min-w-full table-auto border-collapse">
                            <thead class="bg-gray-200">
                                <tr>
                                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Shipment Name</th>
                                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Created</th>
                                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Last Update</th>
                                <th class="px-4 py-2 text-left text-sm font-semibold text-gray-700">Unit Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="shipment in shipments" :key="shipment.id" class="border-t hover:bg-gray-100">
                                <td class="px-4 py-2 text-sm">{{ shipment.name }}</td>
                                <td class="px-4 py-2 text-sm">{{ shipment.created }}</td>
                                <td class="px-4 py-2 text-sm">{{ shipment.lastUpdate }}</td>
                                <td class="px-4 py-2 text-sm">{{ shipment.unitStatus }}</td>
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
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import BaseOptionDefaultField from '@/components/Input-Fields/BaseOptionDefaultField.vue';
import BaseOptionField from '@/components/Input-Fields/BaseOptionField.vue';
import BaseSelectField from '@/components/Input-Fields/BaseSelectField.vue';
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseCheckBox from '@/components/Input-Fields/BaseCheckBox.vue';
import { ref, computed, reactive, onMounted } from "vue";
import { useVuelidate } from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { Icon } from "@iconify/vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const store = useStore();
const router = useRouter();

// Reactive states
const tabs = ['Unshipped', 'Cancelled'];
const activeTab = ref(tabs[0]);

const dropdownVisible = ref(false);

function toggleDropdown() {
  dropdownVisible.value = !dropdownVisible.value;
}

// Order data array
const orders = ref([
  {
    daysAgo: 2,
    orderDate: "10/28/2024",
    time: "11:04 am UTC",
    orderId: "123-123-123123",
    buyerName: "Norman Cruz",
    address: "Los Angeles blk 14 lot 3 Longos, Malolos City, Bulacan, North Luzon, 3000",
    phone: "09123123123",
    itemSubtotal: "800.00",
    shipByDate: "Nov 3 2024 to Nov 5 2024",
    deliverByDate: "Nov 12 2024 to Nov 15 2024",
    carrier: "Standard (Light Parcel) LBC",
  },
  // Add more orders as needed
]);
const selectedOrder = ref({
  orderId: '',
  shipByDate: '',
  deliverByDate: '',
  orderDate: '',
  time: '',
  carrier: '',
  buyerName: '',
  address: '',
  phone: '',
  itemSubtotal: 0,
});

const isshowCancelPopup = ref(false);

const openCancelPopupModal = () => {
    isshowCancelPopup.value = true;
};

const closeCancelPopupModal = () => {
    isshowCancelPopup.value = false;
};

const confirmCancel = () => {
  console.log("Item deleted!");
  closeCancelPopupModal();
};

const isshowConfirmPopup = ref(false);

const openConfirmPopupModal = (order) => {
  selectedOrder.value = order;
  isshowConfirmPopup.value = true;
};

const closeConfirmPopupModal = () => {
    isshowConfirmPopup.value = false;
};

// Define the method functions
const editOrderSummary = () => {
  // Handle editing order summary
  console.log("Editing order summary");
};

const editCustomerDetails = () => {
  // Handle editing customer details
  console.log("Editing customer details");
};

const editSalesProceeds = () => {
  // Handle editing sales proceeds
  console.log("Editing sales proceeds");
};

const shipments = [
  { id: 1, name: 'Shipment A', created: '2024-12-01', lastUpdate: '2024-12-02', unitStatus: 'Cancelled' },
  { id: 2, name: 'Shipment B', created: '2024-12-03', lastUpdate: '2024-12-04', unitStatus: 'Cancelled' },
  { id: 3, name: 'Shipment C', created: '2024-12-05', lastUpdate: '2024-12-06', unitStatus: 'Cancelled' },
  { id: 4, name: 'Shipment D', created: '2024-12-07', lastUpdate: '2024-12-08', unitStatus: 'Cancelled' },
  { id: 5, name: 'Shipment E', created: '2024-12-09', lastUpdate: '2024-12-10', unitStatus: 'Cancelled' }
];

const canceledShipmentsCount = shipments.filter(shipment => shipment.unitStatus === 'Cancelled').length;

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