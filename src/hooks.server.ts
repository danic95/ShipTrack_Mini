import { createSupabaseServerClient } from '$lib/supabase'
import type { Handle } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
  event.locals.supabase = createSupabaseServerClient(event)

  event.locals.getSession = async () => {
    const { data: { user }, error } = await event.locals.supabase.auth.getUser()
    if (error || !user) return null
    return user
  }

  const response = await resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === 'content-range'
    },
  })

  return response
}