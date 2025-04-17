<template>
    <div class="fixed top-0 left-0 flex flex-col min-h-screen w-full bg-white justify-center items-center z-50">
      <div>
        <p class="corn-jump">🌽</p>
      </div>
      <div class="mt-4">
        <p class="font-semibold 2xl:text-lg xl:text-lg lg:text-sm md:text-sm sm:text-sm xs:text-sm 2xs:text-xs">
          Processing, Please Wait . . .
        </p>
      </div>
    </div>
  </template>
  
  <script setup>
  // no script needed for animation
  </script>
  
  <style scoped>
  .corn-jump {
    font-size: 100px;
    animation: jump 0.6s ease-in-out infinite;
  }
  
  @keyframes jump {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  </style>
  