<script setup lang="ts">
import { definePageMeta } from '#imports'

definePageMeta({
  layout: 'auth',
  middleware: 'guest'
})

const supabase = useSupabase()

const firstName = ref('')
const lastName = ref('')
const email = ref('')
const password = ref('')
const error = ref<string | null>(null)
const loading = ref(false)

const register = async () => {
  loading.value = true
  error.value = null

  const { data, error: signUpError } = await supabase.auth.signUp({
    email: email.value,
    password: password.value
  })

  if (signUpError || !data.user) {
    error.value = signUpError?.message || 'Registration failed'
    loading.value = false
    return
  }

  await supabase.from('faculty').insert({
    id: data.user.id,
    email: email.value,
    first_name: firstName.value,
    last_name: lastName.value
  })

  loading.value = false
  navigateTo('/login')
}
</script>

<template>
  <v-card-text>
    <!-- NAME FIELDS -->
    <v-row dense>
      <v-col cols="12" md="6">
        <v-text-field
          v-model="firstName"
          label="First Name"
          variant="outlined"
          rounded="lg"
          density="comfortable"
          class="mb-4"
        />
      </v-col>

      <v-col cols="12" md="6">
        <v-text-field
          v-model="lastName"
          label="Last Name"
          variant="outlined"
          rounded="lg"
          density="comfortable"
          class="mb-4"
        />
      </v-col>
    </v-row>

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

    <!-- PRIMARY ACTION -->
    <v-btn
      color="primary"
      rounded="lg"
      size="large"
      block
      :loading="loading"
      class="mb-3"
      @click="register"
    >
      Create Account
    </v-btn>

    <!-- SECONDARY -->
    <v-btn
      variant="text"
      color="primary"
      rounded="lg"
      block
      prepend-icon="mdi-login"
      to="/login"
    >
      Already have an account?
    </v-btn>
  </v-card-text>
</template>
