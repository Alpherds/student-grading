<script setup lang="ts">
import { useAuthStore } from '~/stores/useAuthStore'

const auth = useAuthStore()

watchEffect(() => {
  if (auth.loading) return

  if (auth.user) {
    navigateTo('/dashboard')
  } else {
    navigateTo('/login')
  }
})
</script>

<template>
  <div />
</template>
