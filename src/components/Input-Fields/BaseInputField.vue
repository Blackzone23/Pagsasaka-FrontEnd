<template>
    <input 
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        class="inputText inputLayout sm:text-base 2xs:text-lg lg:h-9 2xs:h-12"/>
      
</template>

<script setup>
  defineProps({
      modelValue:{
          type: String,
          default:"",
      }
  });

</script>