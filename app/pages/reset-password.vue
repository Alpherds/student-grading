<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})

const supabase = useSupabase()

const newPassword = ref('')
const confirmPassword = ref('')
const error = ref<string | null>(null)
const success = ref<string | null>(null)
const loading = ref(false)

const updatePassword = async () => {
  error.value = null

  if (newPassword.value.length < 6) {
    error.value = 'Password must be at least 6 characters.'
    return
  }

  if (newPassword.value !== confirmPassword.value) {
    error.value = 'Passwords do not match.'
    return
  }

  loading.value = true

  const { error: err } = await supabase.auth.updateUser({
    password: newPassword.value
  })

  loading.value = false

  if (err) {
    error.value = err.message
    return
  }

  success.value = 'Password updated successfully! Redirecting to login...'

  setTimeout(() => {
    navigateTo('/login')
  }, 2000)
}
</script>

<template>
  <v-card-text>
    <!-- NEW PASSWORD -->
    <v-text-field
      v-model="newPassword"
      label="New Password"
      type="password"
      prepend-inner-icon="mdi-lock"
      variant="outlined"
      rounded="lg"
      density="comfortable"
      class="mb-4"
    />

    <!-- CONFIRM PASSWORD -->
    <v-text-field
      v-model="confirmPassword"
      label="Confirm Password"
      type="password"
      prepend-inner-icon="mdi-lock-check"
      variant="outlined"
      rounded="lg"
      density="comfortable"
      class="mb-2"
    />

    <!-- ERROR -->
    <v-alert
      v-if="error"
      type="error"
      variant="tonal"
      density="comfortable"
      class="mb-4"
    >
      {{ error }}
    </v-alert>

    <!-- SUCCESS -->
    <v-alert
      v-if="success"
      type="success"
      variant="tonal"
      density="comfortable"
      class="mb-4"
    >
      {{ success }}
    </v-alert>

    <!-- PRIMARY ACTION -->
    <v-btn
      color="primary"
      rounded="lg"
      size="large"
      block
      :loading="loading"
      :disabled="!!success"
      class="mb-3"
      @click="updatePassword"
    >
      Set New Password
    </v-btn>
  </v-card-text>
</template>
