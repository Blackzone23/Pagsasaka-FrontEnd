<template>
  <div class="flex items-center space-x-2">
    <input
      :id="id"
      type="checkbox"
      :value="value"
      v-model="localValue"
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
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  modelValue: Boolean,
  id: {
    type: String,
    required: true,
  },
  label: String,
  value: [String, Number, Boolean],
  disabled: Boolean,
});

const emit = defineEmits(["update:modelValue", "change"]);
const localValue = ref(props.modelValue);

// Watch for changes to the parent `modelValue` (cartItem.selected)
watch(
  () => props.modelValue,
  (val) => {
    localValue.value = val;
  }
);

// Load checkbox state from sessionStorage on mount
onMounted(() => {
  const stored = sessionStorage.getItem(`checkbox-${props.id}`);
  if (stored !== null) {
    localValue.value = stored === "true";
    emit("update:modelValue", localValue.value); // Optional: update parent
  }
});

// Sync changes to `localValue` to sessionStorage and emit
function handleChange(event) {
  const isChecked = event.target.checked;
  sessionStorage.setItem(`checkbox-${props.id}`, isChecked);
  emit("update:modelValue", isChecked);
  emit("change", isChecked);
}
</script>
