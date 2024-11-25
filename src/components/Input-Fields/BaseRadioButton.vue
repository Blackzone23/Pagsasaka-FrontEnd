<template>
    <label class="flex items-center space-x-2">
      <input
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        @change="updateValue"
        class="text-[#608C54] focus:ring-[#608C54]"
      />
      <span>{{ label }}</span>
    </label>
  </template>
  
  <script>
  export default {
    name: 'BaseRadioButton',
    props: {
      label: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      value: {
        type: [String, Number],
        required: true,
      },
      modelValue: {
        type: [String, Number],
        default: null,
      },
    },
    emits: ['update:modelValue'],
    methods: {
      updateValue() {
        this.$emit('update:modelValue', this.value);
      },
    },
  };
  </script>
  
  <style scoped>
  /* Optional styles to customize */
  </style>
  