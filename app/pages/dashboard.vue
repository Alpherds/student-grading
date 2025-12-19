<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  middleware: 'auth'
})
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>You are logged in as faculty.</p>
  </div>
</template>
