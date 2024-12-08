<template>
    <Market_NavBar/>
    <div class="h-screen">
        <div class="p-5">
            <BaseLabel class="text-3xl font-bold">Check out</BaseLabel>
            <div class="flex items-center space-x-4 border-2 border-[#608C54] py-5 p-2 rounded-md shadow-md">
                <Icon icon="lsicon:location-outline" width="24" height="24" style="color: #276d22" />
                <p class="ml-2">Delivery address</p>
                <p>{{ user.name }}</p>
                <p>{{ user.contact }}</p>
                <p>{{ user.address }}</p>
            </div>
            <div class="mt-10 min-h-screen mx-auto p-6 bg-white shadow-md border-2 border-[#608C54] rounded-lg">
                <!-- Header -->
                <div class="flex justify-between items-center mb-4 border-b pb-2">
                    <!-- Icon and Title -->
                    <div class="flex items-center space-x-2">
                        <Icon icon="streamline:store-1" width="28" height="28" style="color: #276d22" />
                        <h2 class="text-xl font-bold">Product ordered</h2>
                    </div>

                    <!-- Headers for Unit Price, Quantity, and Subtotal -->
                    <div class="flex space-x-4 text-gray-600 text-sm">
                        <p>Unit price</p>
                        <p>Quantity</p>
                        <p>Item subtotal</p>
                    </div>
                </div>

                <!-- Product section -->
                <div class="overflow-y-auto h-96 border rounded-md p-4">
                    <!-- Dynamically render products -->
                    <div v-for="(product, index) in products" :key="index"  class="flex items-center justify-between mb-6">
                        <div class="flex space-x-4">
                            <img :src="product.image" :alt="product.name"  class="w-24 h-24 rounded-md object-cover" />
                            <div>
                                <h3 class="font-semibold">{{ product.name }}</h3>
                                <p class="text-sm text-gray-500">Variants: {{ product.variant }}</p>
                            </div>
                        </div>
                        <div class="flex space-x-20 items-center">
                            <p>₱{{ product.unitPrice }}</p>
                            <p>{{ product.quantity }}</p>
                            <p>₱{{ product.unitPrice * product.quantity }}</p>
                        </div>
                    </div>
                </div>


                <!-- Billing and payment -->
                <div class="border-t grid grid-cols-3 gap-6 mb-6 mt-3">
                    <!-- Billing address -->
                    <div class="col-span-1 pt-5">
                        <h3 class="font-semibold mb-2">Billing address</h3>
                        <div class="space-y-2">
                            <label class="flex items-center space-x-2">
                                <input type="radio" name="billing" class="form-radio" />
                                <span>Same as shipping address</span>
                            </label>
                            <label class="flex items-center space-x-2">
                                <input type="radio" name="billing" class="form-radio" />
                                <span>Use a different billing address</span>
                            </label>
                        </div>
                    </div>

                    <!-- Payment method -->
                    <div class="col-span-2 pt-5">
                        <h3 class="font-semibold mb-2">Payment method</h3>
                        <div class="flex space-x-4">
                            <!-- GCash Button -->
                            <button @click="selectedPayment = 'GCash'" :class="[ 'px-4 py-2 border rounded-md focus:outline-none', selectedPayment === 'GCash' ? 'bg-[#608C54] text-white' : 'bg-white text-black' ]">
                                GCash
                            </button>
                            <!-- COD Button -->
                            <button @click="selectedPayment = 'COD'"  :class="[ 'px-4 py-2 border rounded-md focus:outline-none', selectedPayment === 'COD' ? 'bg-[#608C54] text-white' : 'bg-white text-black' ]">
                                COD
                            </button>
                        </div>

                        <!-- Input Fields -->
                        <div class="mt-4 space-y-4">
                            <!-- GCash Fields -->
                            <div v-if="selectedPayment === 'GCash'" class="space-y-3">
                                <BaseInputField  type="text"  placeholder="Phone number"  class="w-full px-4 py-2 border rounded-md focus:outline-none" />
                                <BaseInputField  type="text"  placeholder="Account name"  class="w-full px-4 py-2 border rounded-md focus:outline-none"  />
                                <BaseInputField type="email"  placeholder="Email" class="w-full px-4 py-2 border rounded-md focus:outline-none" />
                            </div>
                            
                            <!-- COD Fields -->
                            <div v-if="selectedPayment === 'COD'" class="space-y-3">
                                <BaseInputField type="text"  placeholder="Full name"  class="w-full px-4 py-2 border rounded-md focus:outline-none"  />
                                <BaseInputField  type="text"  placeholder="Delivery instructions"  class="w-full px-4 py-2 border rounded-md focus:outline-none" />
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Summary section -->
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

                <!-- Place order button -->
                <div class="text-right">
                    <button class="bg-[#608C54] text-white px-6 py-2 rounded-md hover:bg-gray-300">
                        Place order
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script setup>
import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import { Icon } from '@iconify/vue';
import { reactive, computed, ref } from 'vue';
import { required, email, helpers } from '@vuelidate/validators';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';

const user = ref({
  name: 'Norman Cruz',
  contact: '(+63) 9143 143 6196',
  address: 'Los Angeles City Pampanga, blk 143 lot 619',
});

const products = ref([
  {
    name: 'Salad package',
    variant: '500 Grams',
    image: 'https://via.placeholder.com/100',
    unitPrice: 390,
    quantity: 2,
  },
  {
    name: 'Fruit basket',
    variant: '1 KG',
    image: 'https://via.placeholder.com/100',
    unitPrice: 520,
    quantity: 1,
  },
  {
    name: 'Fruit basket',
    variant: '1 KG',
    image: 'https://via.placeholder.com/100',
    unitPrice: 520,
    quantity: 1,
  },
  {
    name: 'Fruit basket',
    variant: '1 KG',
    image: 'https://via.placeholder.com/100',
    unitPrice: 520,
    quantity: 1,
  },
]);
const selectedPayment = ref(false); // Default to GCash

const merchandiseSubtotal = computed(() =>
  products.value.reduce((sum, product) => sum + product.unitPrice * product.quantity, 0)
);

const shippingSubtotal = computed(() => {
  return products.value.length * 50; // Example: ₱20 per product
});

const totalPayment = computed(() => {
  return merchandiseSubtotal.value + shippingSubtotal.value;
});
</script>