<template>
    <nav class="bg-[#285a19] text-white">
       <div class="container mx-auto flex items-center  py-2">
               <!-- Logo with Link -->
               <a href="/" class="flex items-center">
                <img :src="Logo" alt="Logo" class="h-20">
               </a>
               <!-- Page Title -->
               <h1 class="text-lg font-bold">Log In</h1>
       </div>
</nav>
</template>

<script setup>
import Logo from '@/assets/Logo.png';
</script>