<template>
  <div class="flex items-center space-x-2">
    <input :id="id" type="checkbox" :value="value" v-model="localValue" :disabled="disabled"
      class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" @change="handleChange" />
    <label :for="id" class="text-xs font-medium text-gray-700 cursor-pointer" v-if="label">
      {{ label }}
    </label>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

// Props
const props = defineProps({
  modelValue: Boolean, // Bound value
  id: {
    type: String,
    default: () => `checkbox-${Math.random().toString(36).substr(2, 9)}`, // Unique ID
  },
  label: String, // Optional label
  value: [String, Number, Boolean], // Value when checked
  disabled: Boolean, // Disables checkbox
});

// Emits
const emit = defineEmits(["update:modelValue", "change"]);

// Local value to enable v-model
const localValue = ref(props.modelValue);

// Watch for external changes in modelValue
watch(
  () => props.modelValue,
  (newValue) => {
    localValue.value = newValue;
  }
);

// Handle change events
function handleChange(event) {
  const isChecked = event.target.checked;
  emit("update:modelValue", isChecked);
  emit("change", isChecked);
}
</script>
