import type { User } from '@supabase/supabase-js'

export const useAuth = () => {
  const supabase = useSupabase()
  const authStore = useAuthStore()

  const init = async () => {
    const { data } = await supabase.auth.getSession()
    authStore.setUser(data.session?.user ?? null)

    supabase.auth.onAuthStateChange((_event, session) => {
      authStore.setUser(session?.user ?? null)
    })
  }

  return {
    init
  }
}
