<template>
    <div class="min-h-screen bg-gray-50 py-10">
        <!-- Page Header -->
        <div class="text-center mb-8">
            <h1 class="text-xl font-bold">Archive</h1>
            <p class="text-gray-600">Manage and access archive data</p>
        </div>
    
        <!-- Card Container -->
        <div class="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Accounts Card -->
            <div class="bg-gray-100 rounded-lg shadow-md">
                <div class="bg-green-600 rounded-t-lg flex justify-center items-center h-32">
                    <Icon icon="ic:outline-account-circle" width="40" height="40" style="color: white" />
                </div>
                <div class="p-4 text-center">
                    <h2 class="text-lg font-bold">Accounts</h2>
                    <p class="text-gray-600">0 Archive</p>
                    <a href="#" class="text-blue-500 hover:underline mt-2 inline-block">View All</a>
                </div>
            </div>
    
            <!-- Products Card -->
            <div class="bg-gray-100 rounded-lg shadow-md">
                <div class="bg-green-600 rounded-t-lg flex justify-center items-center h-32">
                    <Icon icon="ic:outline-category" width="40" height="40" style="color: white" />
                </div>
                <div class="p-4 text-center">
                    <h2 class="text-lg font-bold">Products</h2>
                    <p class="text-gray-600">0 Archive</p>
                    <a href="#" class="text-blue-500 hover:underline mt-2 inline-block">View All</a>
                </div>
            </div>
        </div>
    </div>
  </template>

<script setup>
import { Icon } from "@iconify/vue"; // Ensure you have @iconify/vue installed
</script>  