<template>
    <div class="flex items-center space-x-2">
      <input
        :id="id"
        type="checkbox"
        :checked="modelValue"
        :disabled="disabled"
        class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        @change="handleChange"
      />
      <label
        v-if="label"
        :for="id"
        class="text-xs font-medium text-gray-700 cursor-pointer"
      >
        {{ label }}
      </label>
    </div>
  </template>
  
  <script setup>
  import { ref, computed, reactive, onMounted, watch  } from "vue";
  const props = defineProps({
    modelValue: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    label: String,
    disabled: Boolean,
  });
  
  const emit = defineEmits(["update:modelValue", "change"]);
  
  // Check for stored state in sessionStorage (or localStorage if you prefer)
  const storedState = sessionStorage.getItem(props.id);
  const initialCheckedState = storedState !== null ? JSON.parse(storedState) : props.modelValue;
  
  // Set the initial state of the checkbox based on stored value
  const state = ref(initialCheckedState);
  
  watch(state, (newState) => {
    sessionStorage.setItem(props.id, JSON.stringify(newState)); // Store state to sessionStorage
    emit("update:modelValue", newState);
    emit("change", newState);
  });
  
  function handleChange(event) {
    state.value = event.target.checked;
  }
  </script>
  