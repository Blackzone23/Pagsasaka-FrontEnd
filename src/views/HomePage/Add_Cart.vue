<template>
    <Market_NavBar />
    <div class="p-6 w-full h-full">
        <!-- Header -->
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-bold text-[#608C54] flex items-center">
                Add to cart
                <span class="ml-2 w-24 border-dotted border-b-2 border-[#608C54]"></span>
                <Icon icon="bitcoin-icons:cart-filled" width="24" height="24" style="color: #608C54" />
            </h2>
        </div>
    
        <!-- Table Header -->
        <div class="grid grid-cols-7 gap-4 items-center bg-gray-100 p-3 text-sm font-medium border-t border-b border-gray-300">
            <p class="col-span-1">Seller</p>
            <p class="col-span-1 text-green-600">{{ seller }}</p>
            <p class="col-span-1">Buyer</p>
            <p class="col-span-1 text-green-600">{{ buyer }}</p>
            <p class="col-span-1 text-gray-500">Unit Price</p>
            <p class="col-span-1 text-gray-500">Shipping fee</p>
            <p class="col-span-1 text-gray-500">Actions</p>
        </div>
    
        <!-- Product Item -->
        <div v-for="item in cart" :key="item.id" class="grid grid-cols-7 gap-4 items-center p-4 border-b border-gray-300">
            <!-- Checkbox and Image -->
            <div class="flex items-center col-span-1">
                <BaseCheckBox v-model="item.selected" />
                <img :src="item.image" alt="Product" class="w-16 h-16 rounded-lg ml-4" />
            </div>
    
            <!-- Product Info -->
            <div class="col-span-3 flex flex-col">
                <h3 class="font-semibold">{{ item.product.name }}</h3>
                <p class="text-gray-500 text-sm">Variants: {{ item.product.variant }}</p>
            </div>
    
            <!-- Price Info -->
            <div class="col-span-1 items-center">
                <p>₱{{ item.product.unitPrice }}</p>
            </div>
            <div class="col-span-1 items-center">
                <p>₱{{ item.product.shippingFee }}</p>
            </div>
    
            <!-- Quantity and Total -->
            <div class="col-span-1 items-center">
                <div class="flex items-center text-sm text-white space-x-2">
                    <button @click="decreaseQuantity(item.id)" class="px-3 py-1 bg-[#608C54] rounded-full">-</button>
                    <BaseInputField v-model="item.product.quantity" class="w-12 text-center border rounded" />
                    <button @click="increaseQuantity(item.id)" class="px-3 py-1 bg-[#608C54] rounded-full">+</button>
                </div>
                <p class="mt-2 font-semibold">₱{{ calculateTotalPrice(item) }}</p>
            </div>
    
            <!-- Actions -->
            <div class="col-span-1 text-center space-x-3">
                <button @click="deleteSimilar(item.id)" class="text-red-500">Delete</button>
                <button class="text-blue-500">Find Similar</button>
            </div>
        </div>
    
        <!-- Checkout -->
        <div class="flex justify-between items-center p-4 border-t border-gray-300 mt-4">
            <div class="flex items-center space-x-4">
                <BaseCheckBox v-model="selectAll" @change="toggleSelectAll" />
                <p>Select All ({{ selectedItemsCount }})</p>
                <button class="text-red-500">Delete</button>
                <p class="text-gray-500">Remove inactive products</p>
            </div>
            <div class="text-right space-y-1">
                <p>Unit Price: ₱{{ calculateUnitTotal }}</p>
                <p>Shipping Fee: ₱{{ calculateShippingTotal }}</p>
                <p class="font-bold">Total ({{ selectedItemsCount }} item): ₱{{ calculateGrandTotal }}</p>
                <!-- <button class="bg-[#608C54] text-white px-6 py-2 rounded-lg">Check Out</button> -->

            </div>
        </div>
        <div class="text-end">
              <a href="/checkout" class="bg-[#608C54] text-white px-6 py-2 rounded-lg">Check Out</a>
        </div>
    </div>
    <Footer />
</template>

<script setup>
import BaseCheckBox from '@/components/Input-Fields/BaseCheckBox.vue';
import Market_NavBar from '@/components/Navbar/Market_NavBar.vue';
import Footer from '@/components/Input-Fields/Footer.vue';
import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
import { ref, computed } from 'vue';
import { Icon } from '@iconify/vue';

// Cart data (simulating fetched data)
const cart = ref([
  {
    id: 1,
    seller: 'Janromil Dela Cruz',
    buyer: 'NormanCruz123',
    product: {
      name: 'Salad package',
      variant: '500 Grams',
      unitPrice: 390,
      shippingFee: 20,
      quantity: 2,
    },
    image: 'https://via.placeholder.com/100',
    selected: false,
  },
  {
    id: 2,
    seller: 'Janromil Dela Cruz',
    buyer: 'NormanCruz123',
    product: {
      name: 'Fruit Basket',
      variant: '1 kg',
      unitPrice: 450,
      shippingFee: 30,
      quantity: 1,
    },
    image: 'https://via.placeholder.com/100',
    selected: false,
  },
]);

// Track "Select All" state
const selectAll = ref(false);

// Toggle "Select All"
function toggleSelectAll() {
  cart.value.forEach(item => {
    item.selected = selectAll.value;
  });
}

// Calculate total price for a single item
function calculateTotalPrice(item) {
  return (item.product.quantity * item.product.unitPrice + item.product.shippingFee).toFixed(2);
}

// Increase item quantity
function increaseQuantity(id) {
  const product = cart.value.find((item) => item.id === id);
  if (product) product.product.quantity++;
}

// Decrease item quantity
function decreaseQuantity(id) {
  const product = cart.value.find((item) => item.id === id);
  if (product && product.product.quantity > 1) product.product.quantity--;
}

// Delete item by ID
function deleteSimilar(id) {
  cart.value = cart.value.filter((item) => item.id !== id);
}

// Calculate unit total for selected items
const calculateUnitTotal = computed(() =>
  cart.value.filter(item => item.selected).reduce((total, item) => total + item.product.unitPrice * item.product.quantity, 0)
);

// Calculate shipping total for selected items
const calculateShippingTotal = computed(() =>
  cart.value.filter(item => item.selected).reduce((total, item) => total + item.product.shippingFee, 0)
);

// Calculate grand total for selected items
const calculateGrandTotal = computed(() => calculateUnitTotal.value + calculateShippingTotal.value);

// Get the number of selected items
const selectedItemsCount = computed(() => cart.value.filter(item => item.selected).length);
</script>

<style scoped>
/* Add custom styles if needed */
</style>
