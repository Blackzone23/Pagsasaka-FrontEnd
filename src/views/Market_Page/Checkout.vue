<template>
    <!-- Loading screen and toast message -->
    <Loading v-if="showLoading" class="loading" />
    <Toast />

    <Market_NavBar />
    <div class="flex flex-col min-h-screen">
        <div class="p-5 flex-grow">
            <BaseLabel class="text-3xl font-bold">Check out</BaseLabel>

            <!-- Delivery Address Section -->
            <div v-if="checkoutList.length" class="flex flex-wrap items-center gap-2 border-2 border-[#608C54] py-5 p-2 rounded-md shadow-md mt-4">
                <Icon icon="lsicon:location-outline" width="24" height="24" style="color: #276d22" />
                <p class="ml-2 font-semibold">Delivery address:</p>
                <p>{{ checkoutList[0].name }}</p>
                <p>{{ checkoutList[0].email }}</p>
                <p>{{ checkoutList[0].shipping_address }}</p>
                <p>{{ checkoutList[0].phone_number }}</p>
            </div>

            <!-- Main Order Section -->
            <div class="mt-6 w-full mx-auto p-3 bg-white shadow-md border-2 border-[#608C54] rounded-lg">
                <!-- Header -->
                <div class="flex flex-wrap justify-between items-center mb-4 border-b pb-2">
                    <div class="flex items-center space-x-2">
                        <Icon icon="streamline:store-1" width="28" height="28" style="color: #276d22" />
                        <h2 class="text-xl font-bold">Product ordered</h2>
                    </div>
                    <div class="hidden sm:grid grid-cols-3 gap-10 text-gray-600 text-sm text-center font-semibold w-full sm:w-1/2 mt-2 sm:mt-0">
                        <p>Unit price</p>
                        <p>Quantity</p>
                        <p>Item subtotal</p>
                    </div>
                </div>

                <!-- Product section -->
                <div class="overflow-y-auto border rounded-md p-2 max-h-[30rem]">
                    <div v-for="checkout in checkoutList" :key="checkout.id" class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                        <div class="flex space-x-4 items-center">
                            <input type="checkbox" v-model="checkout.selected" class="mr-2" />
                            <img v-if="checkout?.product_img?.length" :src="checkout.product_img[0]" alt="Product Image" class="w-20 h-20 rounded-md object-cover" />
                            <div>
                                <h3 class="font-semibold">{{ checkout.product_name }}</h3>
                                <p class="text-sm text-gray-500">Variants: {{ checkout.unit }}</p>
                            </div>
                        </div>
                        <div class="grid grid-cols-3 gap-4 text-center w-full sm:w-1/2 text-sm font-medium">
                            <p>₱{{ checkout.price }}</p>
                            <p>{{ checkout.quantity }}</p>
                            <p>₱{{ checkout.price * checkout.quantity }}</p>
                        </div>
                    </div>
                </div>

                <!-- Billing and Payment Section -->
                <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-6 mt-6">
                    <!-- Payment Method -->
                    <div class="col-span-1 xl:col-span-2 pt-2">
                        <h3 class="font-semibold mb-2">Payment method</h3>
                        <div class="flex flex-wrap gap-4">
                            <button @click="selectedPayment = 'GCash'" :class="[
                                'px-4 py-2 border rounded-md focus:outline-none transition',
                                selectedPayment === 'GCash' ? 'bg-[#608C54] text-white' : 'bg-white text-black'
                            ]">
                                E-Wallet
                            </button>
                            <button @click="selectedPayment = 'COD'" :class="[
                                'px-4 py-2 border rounded-md focus:outline-none transition',
                                selectedPayment === 'COD' ? 'bg-[#608C54] text-white' : 'bg-white text-black'
                            ]">
                                COD
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Summary -->
                <div class="border-t pt-4 mb-6">
                    <div class="flex justify-between text-sm mb-2">
                        <span>Merchandise Subtotal</span>
                        <span>₱{{ merchandiseSubtotal }}</span>
                    </div>
                    <div class="flex justify-between text-sm mb-2">
                        <span>Shipping Subtotal</span>
                        <span>₱{{ shippingSubtotal }}</span>
                    </div>
                    <div class="flex justify-between text-lg font-bold">
                        <span>Total Payment</span>
                        <span>₱{{ totalPayment }}</span>
                    </div>
                </div>

                <!-- Place Order Button -->
                <div class="text-right">
                    <button @click="placeOrderSelected" class="bg-[#608C54] text-white px-6 py-2 rounded-md hover:bg-gray-300">
                        Place order
                    </button>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>

<script setup>
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import { Icon } from '@iconify/vue';
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

// Define toast constants (match values used in your Vuex actions)
const toastDuration = 3000; // Duration for toast visibility (in milliseconds)
const toastDelay = 500;    // Delay before showing toast (in milliseconds)

const store = useStore();
const router = useRouter();

// Reactive state for checkout list
const checkoutList = ref([]);

// Computed property for loading state (adjust path if needed)
const showLoading = computed(() => store.state.showLoading?.state || false);

// Shipping fee per item
const shippingFeePerItem = 30;

// Computed properties for totals (only include selected items)
const merchandiseSubtotal = computed(() => {
    return checkoutList.value
        .filter(item => item.selected)
        .reduce((total, item) => total + item.price * item.quantity, 0);
});

const shippingSubtotal = computed(() => {
    return checkoutList.value
        .filter(item => item.selected)
        .reduce((total, item) => total + shippingFeePerItem * item.quantity, 0);
});

const totalPayment = computed(() => {
    return merchandiseSubtotal.value + shippingSubtotal.value;
});

// Fields for payment methods
const selectedPayment = ref(null);
const gcashPhoneNumber = ref('');
const gcashAccountName = ref('');
const gcashEmail = ref('');
const codFullName = ref('');
const codDeliveryInstructions = ref('');

// Fetch checkout list on component mount
function getCheckoutList() {
    store.dispatch('Consumer/getCheckoutList').then(response => {
        checkoutList.value = (response.cart_statuses || []).map(item => ({
            ...item,
            selected: true, // Default to true for all items
        }));
    });
}

onMounted(() => {
    getCheckoutList();
});

// Place order function
const placeOrderSelected = async () => {
    // Validate payment method
    if (!selectedPayment.value) {
        store.commit('Consumer/showToast', { showToast: true, toastMessage: 'Please select a payment method', toastType: 'error' });
        setTimeout(() => {
            store.commit('Consumer/showToast', { showToast: false, toastMessage: '', toastType: 'default' });
        }, toastDuration);
        return;
    }

    // Filter selected items
    const selectedItems = checkoutList.value.filter(checkout => checkout.selected);
    if (selectedItems.length === 0) {
        store.commit('Consumer/showToast', { showToast: true, toastMessage: 'Please select at least one item', toastType: 'error' });
        setTimeout(() => {
            store.commit('Consumer/showToast', { showToast: false, toastMessage: '', toastType: 'default' });
        }, toastDuration);
        return;
    }

    try {
        // Update state with selected items
        store.commit('Consumer/setCheckout', selectedItems);

        if (selectedPayment.value === 'COD') {
            console.log('Dispatching placeCODOrder with selected items:', selectedItems);
            await store.dispatch('Consumer/placeCODOrder');
            router.push('/profile');
        } else if (selectedPayment.value === 'GCash') {
            console.log('Dispatching placeGCashOrder with selected items:', selectedItems);
            const response = await store.dispatch('Consumer/placeGCashOrder');
            if (response.isSuccess) {
                // Redirect to the PayMongo checkout URL
                window.location.href = response.checkout_url;
            } else {
                // Handle failure (error message is already shown by the action)
                console.error('Failed to create payment session:', response.message);
            }
        }
    } catch (error) {
        console.error('Checkout failed:', error);
    }
};
</script>