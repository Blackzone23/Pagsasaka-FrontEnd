<template>
    <span class="relative flex items-center md:w-[600px] 2xs:w-[200px] border-none p-0 z-10">
      <Icon icon="iconamoon:search" class="z-20 w-5 h-5  absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
      <input
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="inputText inputLayout pl-3 md:h-10 md:text-sm 2xs:h-10 xs:text-lg z-5"
      />
    </span>
        
  </template>
  
  <script setup>
  import { Icon } from '@iconify/vue';
    defineProps({
        modelValue:{
            type: String,
            default:"",
        }
    });
  
  </script>