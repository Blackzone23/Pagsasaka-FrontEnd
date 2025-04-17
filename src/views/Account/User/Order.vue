<template>
     <div>
        <header class="bg-[#285a19]  shadow p-4 flex justify-between items-center text-white">
        <h1 class="text-lg sm:text-xl 2xl:ml-0 md:ml-10 2xs:ml-10 font-bold">Order Transaction</h1>
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

        <!-- Tabs -->
        <div class="mt-4">
            <div class="flex justify-center border-b border-gray-200">
                <button v-for="tab in tabs" :key="tab" :class="[ 'px-4 py-2 focus:outline-none',activeTab === tab ? 'border-b-2 border-[#608C54] text-[#608C54]' : 'text-gray-600']" @click="activeTab = tab">
                    {{ tab }}
                </button>
            </div>

            <!-- Tab Content -->
            <div class="mt-4 p-4">
                <div v-if="activeTab === 'Unshipped'">
                    <BaseLabel class="text-xl font-bold">Order:</BaseLabel>
                    
                    <div class="flex flex-col md:flex-row items-center md:justify-between space-y-2 md:space-y-0  border-2 border-gray-300 rounded-md p-4 text-sm">
                        <h1 class="text-center md:text-left">Action on Selected</h1>
                        <div class="flex flex-wrap justify-center md:justify-end space-x-2 2xs:gap-2">
                            <button class="border-2 border-gray-300 py-2 px-4 hover:bg-gray-200 rounded-full">
                                Print Packing Slip(s)
                            </button>
                            <button class="border-2 border-gray-300 py-2 px-4 hover:bg-gray-200 rounded-full">
                                Confirm Shipment(s)
                            </button>
                        </div>
                    </div>

                    <div class="mt-5">
                        <!-- Header Row -->
                        <div class="hidden lg:flex items-center justify-center py-2 space-x-2 border-2 border-gray-300 rounded-md pb-5 text-xs sm:text-sm md:text-base">
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
                            <div v-for="(order, index) in orders" :key="index" 
                                class="border-2 border-gray-300 mt-5 p-4 flex flex-col sm:flex-row items-center sm:space-x-5 space-y-4 sm:space-y-0">
                                
                                <div class="flex items-center w-full sm:w-1/6">
                                    <BaseCheckBox />
                                    <div class="ml-3 text-sm">
                                        <p>{{ order.daysAgo }} Days ago</p>
                                        <p>{{ order.orderDate }}</p>
                                        <p>{{ order.time }}</p>
                                    </div>
                                </div>
                                
                                <div class="text-sm w-full sm:w-1/6">
                                    <h1 class="font-bold">Order ID:</h1>
                                    <p>{{ order.orderId }}</p>
                                    <h1 class="font-bold">Buyer Name:</h1>
                                    <p>{{ order.buyerName }}</p>
                                </div>

                                <div class="w-full sm:w-1/6 flex justify-center">
                                    <img :src="order.image" alt="Order Image" class="w-[80px] h-[50px] sm:w-[100px] sm:h-[50px]" />
                                </div>

                                <div class="text-sm w-full sm:w-1/6">
                                    <p>{{ order.productName }}</p>
                                    <p>Quantity: {{ order.quantity }}</p>
                                    <p>Item Subtotal: ₱{{ order.itemSubtotal }}</p>
                                </div>

                                <div class="text-xs w-full sm:w-1/6">
                                    <p>Ship by: {{ order.shipByDate }}</p>
                                    <p>Deliver by: {{ order.deliverByDate }}</p>
                                    <p>Carrier: {{ order.carrier }}</p>
                                </div>

                                <!-- Confrim modal -->
                                <div class="text-xs flex flex-col space-y-2 w-full sm:w-1/6">
                                    <button @click="openConfirmModal" class="bg-[#608C54] py-2 px-4 text-white rounded-md w-full">
                                        Confirm Shipment
                                    </button>
                                    <div v-if="isshowConfirmModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                        <div class="bg-white rounded-lg p-6 w-96 shadow-lg">
                                            <h2 class="text-lg font-semibold mb-4">Confirm Shipment</h2>
                                            <p class="text-gray-700 mb-6">Are you sure you want to confirm this shipment?</p>
                                            <div class="flex justify-end space-x-4">
                                                <button @click="confirmShipment" class="bg-[#608C54] text-white px-4 py-2 rounded-md">Yes</button>
                                                <button @click="closeConfirmModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Print Packing Modal -->
                                    <button @click="openPrintModal" class="py-2 px-4 rounded-md border-2 border-gray-300 w-full">
                                        Print Packing Slip
                                    </button>
                                    <div v-if="isshowPrintModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                        <div class="bg-white w-[700px] p-4 rounded-lg relative packing-slip-modal-content">
                                                <!-- Close Modal Button -->
                                                <button @click="closePrintModal" class="absolute top-2 right-2 text-gray-600">
                                                    <Icon icon="fontisto:close" width="1.2rem" height="1.2rem" style="color: #5D5F5D" />
                                                </button>

                                                <!-- Packing Slip Content -->
                                                <div class="mt-10 w-full">
                                                <div  v-for="(order, index) in orders" :key="index" class="bg-white p-4 border border-gray-400 rounded-lg text-sm font-sans">
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
                                                        <p class="font-semibold">Order ID: {{ order.orderId }}</p>
                                                          <!-- <img src="/path-to-barcode.png" alt="Barcode" class="h-10 mx-auto my-1" /> -->
                                                        <p class="text-xs">{{ order.orderId }}</p>
                                                    </div>

                                                    <!-- Buyer & Seller Info -->
                                                    <div class="grid grid-cols-2 gap-2 border-y py-2 mb-2">
                                                    <div>
                                                        <p class="font-semibold border-b pb-1">Buyer</p>
                                                        <p class="font-bold">{{ order.name }}</p>
                                                        <p v-html="order.address"></p>
                                                    </div>
                                                        <div>
                                                            <p class="font-semibold border-b pb-1">Seller</p>
                                                            <p class="font-bold">{{ order.name }}</p>
                                                            <p v-html="order.address"></p>
                                                        </div>
                                                    </div>

                                                    <!-- Product Info -->
                                                    <div class="grid grid-cols-4 gap-2 items-start border-b pb-2 mb-2">
                                                        <div class="col-span-1 flex flex-col items-center">
                                                             <!-- <img src="/path-to-qr.png" alt="QR Code" class="h-20 w-20 mb-1" /> -->
                                                            <p class="text-xs text-gray-600">{{ order.orderId }}</p>
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

                                    <!-- Cancelled modal -->
                                    <button @click="openCancelModal" class="bg-red-500 py-2 px-4 rounded-md w-full">
                                        Cancel Order
                                    </button>
                                    <div v-if="isshowCancelModal" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                                        <div class="bg-white rounded-lg p-6 w-96 shadow-lg">
                                            <h2 class="text-lg font-semibold mb-4">Cancel Shipment</h2>
                                            <p class="text-gray-700 mb-6">Are you sure you want to cancel this shipment?</p>
                                            <div class="flex justify-end space-x-4">
                                                <button @click="cancelShipment" class="bg-red-900 text-white px-4 py-2 rounded-md">Yes</button>
                                                <button @click="closeCancelModal" class="bg-gray-300 text-gray-700 px-4 py-2 rounded-md">Cancel</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Cancelled Tab -->
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
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import BaseCheckBox from '@/components/Input-Fields/BaseCheckBox.vue';
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

// Reactive states
const tabs = ['Unshipped', 'Cancelled'];
const activeTab = ref(tabs[0]);
const sellerRaw  = computed(() => store.state.userData.data?.user || {})

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

const shipments = [
  { id: 1, name: 'Shipment A', created: '2024-12-01', lastUpdate: '2024-12-02', unitStatus: 'Cancelled' },
  { id: 2, name: 'Shipment B', created: '2024-12-03', lastUpdate: '2024-12-04', unitStatus: 'Cancelled' },
  { id: 3, name: 'Shipment C', created: '2024-12-05', lastUpdate: '2024-12-06', unitStatus: 'Cancelled' },
  { id: 4, name: 'Shipment D', created: '2024-12-07', lastUpdate: '2024-12-08', unitStatus: 'Cancelled' },
  { id: 5, name: 'Shipment E', created: '2024-12-09', lastUpdate: '2024-12-10', unitStatus: 'Cancelled' }
];

const canceledShipmentsCount = shipments.filter(shipment => shipment.unitStatus === 'Cancelled').length;

/******************************************************************
 FUNCTION FOR CONFIRM
******************************************************************/
const isshowConfirmModal = ref(false);

const openConfirmModal = () => {
    isshowConfirmModal.value = true;
};

// Function to handle closing modal
function closeConfirmModal() {
    isshowConfirmModal.value = false;
}

/******************************************************************
 FUNCTION FOR CANCEL
******************************************************************/
const isshowCancelModal = ref(false);

const openCancelModal = () => {
    isshowCancelModal.value = true;
};

// Function to handle closing modal
function closeCancelModal() {
    isshowCancelModal.value = false;
}

/******************************************************************
 FUNCTION FOR LOG OUT
******************************************************************/
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

/******************************************************************
 FUNCTION FOR PRINT SLIP
******************************************************************/
const isshowPrintModal = ref(false);

const openPrintModal = () => {
    isshowPrintModal.value = true;
};

// Function to handle closing modal
function closePrintModal() {
    isshowPrintModal.value = false;
}


// State to control modal visibility
const showModal = ref(false);

// Order data for the packing slip
const order = ref({
  orderId: '123456789',
  buyer: {
    name: 'Juan Dela Cruz',
    address: '123 Farm Rd, Barangay, City',
  },
  seller: {
    name: 'Maria Santos',
    address: '456 Market St, Barangay, City',
  },
  items: [
    {
      name: 'Rice',
      variant: '5kg',
      price: 250.00,
      quantity: 2,
    },
    {
      name: 'Cocomelon',
      variant: '1kg',
      price: 100.00,
      quantity: 3,
    },
  ],
});

const downloadPackingSlipAsPDF = () => {
  const modalContent = document.querySelector('.packing-slip-modal-content');
  if (!modalContent) {
    console.error('Modal content not found');
    return;
  }

  html2canvas(modalContent).then(canvas => {
    const imgData = canvas.toDataURL('image/png');
    const doc = new jsPDF();

    // Set the width and height for the image (resize as needed)
    const pdfWidth = 210; // A4 paper width in mm
    const pdfHeight = 297; // A4 paper height in mm

    // Optional: Adjust the width and height of the image to fit within the PDF dimensions
    const imgWidth = pdfWidth - 40; // Leave some margin
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    doc.addImage(imgData, 'PNG', 20, 20, imgWidth, imgHeight);
    doc.save('packing-slip.pdf');
  });
};
</script>