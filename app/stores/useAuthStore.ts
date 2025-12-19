import { defineStore } from 'pinia'
import type { User } from '@supabase/supabase-js'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as User | null,
    loading: true
  }),

  actions: {
    setUser(user: User | null) {
      this.user = user
      this.loading = false
    },

    clearUser() {
      this.user = null
      this.loading = false
    }
  }
})
