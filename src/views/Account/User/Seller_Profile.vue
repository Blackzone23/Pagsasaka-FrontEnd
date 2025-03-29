<template>
    <div class="w-full min-h-screen flex items-center justify-center bg-gray-300 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg">
        <div class="text-center">
          <img :src="seller.profilePic" alt="Profile Picture" class="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-44 lg:h-44 mx-auto rounded-full">
          <h2 class="mt-4 text-lg sm:text-xl font-semibold">{{ seller.name }}</h2>
          <p class="text-gray-600 text-sm sm:text-base">{{ seller.email }}</p>
          <p class="text-gray-600 text-sm sm:text-base">{{ seller.phone }}</p>
        </div>
  
        <div class="mt-6 pt-4 text-center sm:text-left">
          <h3 class="text-md sm:text-lg text-green-800 font-semibold">Store Details</h3>
          <p class="text-gray-700 text-xs sm:text-base"><strong>Name:</strong> {{ seller.storeName }}</p>
          <p class="text-gray-700 text-xs sm:text-base"><strong>Description:</strong> {{ seller.storeDescription }}</p>
        </div>
  
        <div class="flex justify-center mt-6 sm:mt-10">
          <button @click="openEditModal" class="w-full max-w-xs sm:max-w-sm lg:max-w-md bg-green-800 text-white py-2 rounded-lg hover:bg-green-600">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  
    <div v-if="isEditing" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center px-4">
      <div class="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <BaseLabel class="text-xl font-semibold mb-4">Edit Profile</BaseLabel>
            <BaseLabel class="block mb-2">Name</BaseLabel>
            <BaseInputField v-model="tempSeller.name" class="w-full p-2 border rounded mb-4" type="text"/>
    
            <BaseLabel class="block mb-2">Email</BaseLabel>
            <BaseInputField v-model="tempSeller.email" class="w-full p-2 border rounded mb-4" type="email"/>
    
            <BaseLabel class="block mb-2">Phone</BaseLabel>
            <BaseInputField v-model="tempSeller.phone" class="w-full p-2 border rounded mb-4" type="text"/>
    
            <BaseLabel class="block mb-2">Store Name</BaseLabel>
            <BaseInputField v-model="tempSeller.storeName" class="w-full p-2 border rounded mb-4" type="text"/>
    
            <BaseLabel class="block mb-2">Store Description</BaseLabel>
            <textarea v-model="tempSeller.storeDescription" class="w-full p-2 border rounded mb-4 text-sm"></textarea>
            
            <div class="flex justify-end gap-2 text-sm">
                <button @click="isEditing = false" class="bg-gray-400 text-white py-2 px-4 rounded hover:bg-gray-500">Cancel</button>
                <button @click="saveChanges" class="bg-green-800 text-white py-2 px-4 rounded hover:bg-green-600">Save</button>
            </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import BaseLabel from '@/components/Input-Fields/BaseLabel.vue';
  import BaseInputField from '@/components/Input-Fields/BaseInputField.vue';
  import { ref } from "vue";
  
  const seller = ref({
    name: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
    storeName: 'Doe Mart',
    storeDescription: 'We provide quality products at the best price.',
    profilePic: 'https://via.placeholder.com/150'
  });
  
  const isEditing = ref(false);
  const tempSeller = ref({ ...seller.value });
  
  const openEditModal = () => {
    tempSeller.value = { ...seller.value };
    isEditing.value = true;
  };
  
  const saveChanges = () => {
    seller.value = { ...tempSeller.value };
    isEditing.value = false;
  };
  </script>
  