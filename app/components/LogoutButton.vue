<script setup lang="ts">
const supabase = useSupabase()

const logout = async () => {
  await supabase.auth.signOut()
  navigateTo('/login')
}
</script>

<template>
  <v-btn color="error" @click="logout">Logout</v-btn>
</template>
