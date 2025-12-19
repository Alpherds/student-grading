<script setup lang="ts">
import { useSupabase } from '~/composables/useSupabase'

const supabase = useSupabase()

onMounted(async () => {
  const { data } = await supabase.auth.getSession()
  console.log('Supabase session:', data)
})
</script>

<template>
  <v-app>
    <v-main class="pa-4">
      <v-card>
        <v-card-title>Supabase Global Client</v-card-title>
        <v-card-text>
          Check browser console for session output.
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>
