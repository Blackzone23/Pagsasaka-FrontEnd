<template>
    <select
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="inputText inputLayout border-gray-300 lg:h-9 2xs:h-12"
    >
        <slot/>
    </select>
</template>

<script setup>
  defineProps({
      modelValue:{
          type: String,
          default:"",
      }
  });
</script>