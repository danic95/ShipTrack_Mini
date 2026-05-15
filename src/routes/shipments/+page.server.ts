import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
  const user = await locals.getSession()

  if (!user) {
    throw redirect(303, '/login')
  }

  const { data: shipments, error } = await locals.supabase
    .from('shipments')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error(error)
    return { shipments: [] }
  }

  return { shipments }
}