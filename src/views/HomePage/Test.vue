<template>
  <div v-if="order" class="mt-10 w-[700px] mx-auto bg-white p-4 border border-gray-400 rounded-lg text-sm font-sans">
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
        <p class="font-bold">{{ order.buyer.name }}</p>
        <p v-html="order.buyer.address"></p>
      </div>
      <div>
        <p class="font-semibold border-b pb-1">Seller</p>
        <p class="font-bold">{{ order.seller.name }}</p>
        <p v-html="order.seller.address"></p>
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
</template>

<script setup>
import { ref } from 'vue';

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
      name: 'cocomelon',
      variant: '1kg',
      price: 100.00,
      quantity: 3,
    },
  ],
});
</script>


