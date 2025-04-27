<!-- BaseSearchField.vue -->
<template>
  <span class="relative flex items-center md:w-[600px] sm:w-[400px] 2xs:w-[200px] border-none p-0 z-10">
    <Icon 
      icon="iconamoon:search" 
      class="z-20 w-5 h-5 absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" 
    />
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      v-bind="$attrs"
      class="inputText inputLayout pl-3 md:h-10 md:text-sm 2xs:h-10 xs:text-lg z-5 w-full"
      placeholder="Search for products..."
    />
  </span>
</template>

<script setup>
import { Icon } from '@iconify/vue';

defineProps({
  modelValue: {
    type: String,
    default: '',
  },
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.inputText {
  border: 1px solid #d1d5db;
  border-radius: 0.375rem;
  transition: border-color 0.2s;
}

.inputText:focus {
  outline: none;
  border-color: #10b981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.1);
}
</style>