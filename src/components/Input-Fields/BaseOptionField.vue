<template>
    <option
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="inputText inputLayout"  
    >
        <slot/>
    </option>
    
</template>

<script setup>
  defineProps({
      modelValue:{
          type: String,
          default:"",
      }
  });
</script>