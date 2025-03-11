<template>
    <n-pagination v-model:page="page" :page-count="100" simple />
  </template>
  
  <script>
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    setup() {
      return {
        page: ref(2)
      };
    }
  });
  </script>