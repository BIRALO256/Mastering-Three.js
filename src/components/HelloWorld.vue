<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-blue-100 text-center">
    <h1 class="text-4xl font-bold text-blue-700 mb-4">Welcome to My Vue App!</h1>
    <p class="text-lg text-gray-600 mb-4">This is a sample app using Vue 3, TypeScript, and Tailwind CSS.</p>
    <!-- Using traditional <i> tag for Font Awesome icons -->
    <i class="fas fa-info-circle fa-lg mr-2 text-blue-600"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WelcomeComponent',
});
</script>

<style scoped>
</style>
