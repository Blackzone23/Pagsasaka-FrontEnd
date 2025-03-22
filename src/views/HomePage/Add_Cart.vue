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
      <div class="grid grid-cols-6 gap-10 items-center bg-gray-100 p-3 text-sm font-medium border-t border-b border-gray-300">
          <p class="col-span-2 text-gray-500">Product</p>
          <p class="col-span-1 text-gray-500 text-center">Unit Price</p>
          <p class="col-span-1 text-gray-500 text-center">Quantity</p>
          <p class="col-span-1 text-gray-500 text-center">Total Price</p>
          <p class="col-span-1 text-gray-500 text-end">Actions</p>
      </div>

      <!-- Product Item -->
      <div v-for="cartItem in cartList" :key="cartItem.id" class="grid grid-cols-6 gap-4 items-center p-4 border-b border-gray-300">
          <!-- Checkbox -->
          <div class="flex items-center col-span-2">
              <BaseCheckBox v-model="cartItem.selected" class="mr-2" />
              <img :src="cartItem.product_img[0]" alt="Product" class="w-16 h-16 rounded-lg" />
              <div class="ml-4">
                  <h3 class="font-semibold">{{ cartItem.product_name }}</h3>
                  <p class="text-gray-500 text-sm">Variants: {{ cartItem.unit }}</p>
              </div>
          </div>

          <!-- Price Info -->
          <div class="col-span-1 text-center">
              <p>₱{{ cartItem.price }}</p>
          </div>

          <!-- Quantity -->
          <div class="col-span-1 text-center">
              <div class="flex items-center justify-center text-sm text-white space-x-2">
                  <button @click="decreaseQuantity(cartItem.id)" class="px-3 py-1 bg-[#608C54] rounded-full">-</button>
                  <BaseInputField v-model="cartItem.quantity" class="w-13 text-center border rounded" />
                  <button @click="increaseQuantity(cartItem.id)" class="px-3 py-1 bg-[#608C54] rounded-full">+</button>
              </div>
          </div>

          <!-- Total Price -->
          <div class="col-span-1 text-center">
              <p>₱{{ cartItem.price * cartItem.quantity }}</p>
          </div>

          <!-- Actions -->
          <div class="col-span-1 text-end space-x-3">
              <button @click="deleteItem(cartItem.id)" class="text-red-500">Delete</button>
          </div>
      </div>

      <!-- Checkout -->
      <div class="flex justify-between items-center p-4 border-t border-gray-300 mt-4">
          <div class="flex items-center space-x-4">
              <BaseCheckBox v-model="selectAll" @change="toggleSelectAll" />
              <p>Select All ({{ selectedItemsCount }})</p>
              <button @click="deleteSelectedItems" class="text-red-500">Delete</button>
          </div>
          <div class="text-right space-y-1">
              <p class="font-bold">Total ({{ selectedItemsCount }} items): ₱{{ calculateGrandTotal }}</p>
          </div>
      </div>
      <div class="text-end">
          <a href="/checkout" class="bg-[#608C54] text-white px-6 py-2 rounded-lg">Check Out</a>
      </div>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Icon } from "@iconify/vue";
import Market_NavBar from "@/components/Navbar/Market_NavBar.vue";
import Footer from "@/components/Input-Fields/Footer.vue";
import BaseCheckBox from "@/components/Input-Fields/BaseCheckBox.vue";
import BaseInputField from "@/components/Input-Fields/BaseInputField.vue";

const store = useStore();

// Fetch Cart Items from Vuex Store
const cartList = computed(() => store.state.Consumer.cartItem.data);

// Fetch cart data on component mount
onMounted(() => {
  store.dispatch("Consumer/getCartList");
});

// Track "Select All" state
const selectAll = ref(false);

// Toggle "Select All"
function toggleSelectAll() {
  cartList.value.forEach((item) => {
      item.selected = selectAll.value;
  });
}

// Increase item quantity
function increaseQuantity(id) {
  const product = cartList.value.find((item) => item.id === id);
  if (product) product.quantity++;
}

// Decrease item quantity
function decreaseQuantity(id) {
  const product = cartList.value.find((item) => item.id === id);
  if (product && product.quantity > 1) product.quantity--;
}

// Delete item by ID (Update Vuex store)
function deleteItem(id) {
  store.dispatch("Consumer/removeCartItem", id);
}

// Delete selected items
function deleteSelectedItems() {
  const selectedIds = cartList.value.filter(item => item.selected).map(item => item.id);
  selectedIds.forEach(id => store.dispatch("Consumer/removeCartItem", id));
}

// Compute grand total for selected items
const calculateGrandTotal = computed(() =>
  cartList.value
      .filter((item) => item.selected)
      .reduce((total, item) => total + item.price * item.quantity, 0)
);

// Get the number of selected items
const selectedItemsCount = computed(() => cartList.value.filter((item) => item.selected).length);
</script>
