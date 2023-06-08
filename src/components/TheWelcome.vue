<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import { useNumberStore } from '@/stores/number';
const store = useNumberStore();
</script>

<template>
  <WelcomeItem>
    <template #heading>Phone Number</template>

    The phone number passed was {{ store.phoneNumber }}.
    <template v-if="store.href.length < 1">
      Unable to redirect.
    </template>
    <template v-else>
      Redirecting to <a :href="store.href">AutoTask.</a>
    </template>
  </WelcomeItem>
</template>
