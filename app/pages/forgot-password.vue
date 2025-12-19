<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})

const supabase = useSupabase()

const email = ref('')
const message = ref<string | null>(null)
const error = ref<string | null>(null)
const loading = ref(false)

const sendReset = async () => {
  loading.value = true
  error.value = null
  message.value = null

  const { error: err } = await supabase.auth.resetPasswordForEmail(
    email.value,
    {
      redirectTo: `${window.location.origin}/reset-password`
    }
  )

  loading.value = false

  if (err) {
    error.value = err.message
    return
  }

  message.value = 'Password reset link sent. Please check your email.'
}
</script>

<template>
  <v-card-text>
    <!-- EMAIL -->
    <v-text-field
      v-model="email"
      label="Email Address"
      type="email"
      prepend-inner-icon="mdi-email"
      variant="outlined"
      rounded="lg"
      density="comfortable"
      class="mb-4"
      :disabled="!!message"
    />

    <!-- ERROR ALERT -->
    <v-alert
      v-if="error"
      type="error"
      variant="tonal"
      density="comfortable"
      class="mb-4"
    >
      {{ error }}
    </v-alert>

    <!-- SUCCESS ALERT -->
    <v-alert
      v-if="message"
      type="success"
      variant="tonal"
      density="comfortable"
      class="mb-4"
    >
      {{ message }}
    </v-alert>

    <!-- PRIMARY ACTION -->
    <v-btn
      color="primary"
      rounded="lg"
      size="large"
      block
      :loading="loading"
      :disabled="!!message"
      class="mb-3"
      @click="sendReset"
    >
      Send Reset Link
    </v-btn>

    <!-- SECONDARY -->
    <v-btn
      variant="text"
      color="primary"
      rounded="lg"
      block
      prepend-icon="mdi-arrow-left"
      to="/login"
    >
      Back to Login
    </v-btn>
  </v-card-text>
</template>
