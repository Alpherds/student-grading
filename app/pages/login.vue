<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})

const supabase = useSupabase()

const email = ref('')
const password = ref('')
const error = ref<string | null>(null)
const loading = ref(false)

const login = async () => {
  loading.value = true
  error.value = null

  const { error: err } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value
  })

  loading.value = false

  if (err) {
    error.value = err.message
    return
  }

  navigateTo('/dashboard')
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
    />

    <!-- PASSWORD -->
    <v-text-field
      v-model="password"
      label="Password"
      type="password"
      prepend-inner-icon="mdi-lock"
      variant="outlined"
      rounded="lg"
      density="comfortable"
      class="mb-2"
    />

    <!-- ERROR MESSAGE -->
    <v-alert
      v-if="error"
      type="error"
      variant="tonal"
      density="comfortable"
      class="mb-4"
    >
      {{ error }}
    </v-alert>

    <!-- LOGIN BUTTON -->
    <v-btn
      color="primary"
      rounded="lg"
      size="large"
      block
      :loading="loading"
      class="mb-3"
      @click="login"
    >
      Login
    </v-btn>

    <!-- SECONDARY ACTIONS -->
    <v-row dense>
      <v-col cols="12">
        <v-btn
          variant="outlined"
          color="primary"
          rounded="lg"
          block
          prepend-icon="mdi-lock-reset"
          to="/forgot-password"
        >
          Forgot Password
        </v-btn>
      </v-col>

      <v-col cols="12">
        <v-btn
          variant="text"
          color="primary"
          rounded="lg"
          block
          prepend-icon="mdi-account-plus"
          to="/register"
        >
          Create Account
        </v-btn>
      </v-col>
    </v-row>
  </v-card-text>
</template>
