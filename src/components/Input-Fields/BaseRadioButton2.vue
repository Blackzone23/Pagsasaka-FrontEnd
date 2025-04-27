<template>
    <label class="flex items-center space-x-2">
      <input
        type="radio"
        :name="name"
        :value="value"
        v-model="modelValue"
        @change="$emit('update:modelValue', value)"
      />
      <span>{{ label }}</span>
    </label>
  </template>
  
  <script setup>
  defineProps(['name', 'label', 'value', 'modelValue']);
  defineEmits(['update:modelValue']);
  </script>