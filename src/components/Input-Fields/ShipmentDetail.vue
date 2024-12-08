<template>
    <div class="p-4 border rounded-md bg-white shadow-md">
      <h1 class="text-xl font-bold mb-4">{{ shipment.name }}</h1>
      <div class="grid grid-cols-2 gap-4">
        <div>
          <p><strong>Ship from:</strong> {{ shipment.shipFrom }}</p>
          <p><strong>Ship to:</strong> {{ shipment.shipTo }}</p>
        </div>
        <div>
          <p><strong>Weight:</strong> {{ shipment.weight }}</p>
          <p><strong>Status:</strong> {{ shipment.status }}</p>
        </div>
      </div>
      <div class="mt-4">
        <h2 class="text-lg font-bold">Shipment History</h2>
        <ul class="list-disc ml-5">
          <li v-for="event in shipment.history" :key="event.date">
            {{ event.date }} - {{ event.status }}
          </li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  defineProps({
    shipment: {
      type: Object,
      required: true,
    },
  });
  </script>
  