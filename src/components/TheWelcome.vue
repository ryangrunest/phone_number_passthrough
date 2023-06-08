<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import { useNumberStore } from '@/stores/number';
const store = useNumberStore();
</script>

<template>
  <WelcomeItem>
    <template #heading>Phone Number</template>

    The phone number passed was {{ store.phoneNumber }}.
    Redirecting to <a :href="store.href">AutoTask.</a>
  </WelcomeItem>
</template>
