import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.getSession()

  if (!session) {
    throw redirect(303, '/login')
  }

  const shipments = [
    { id: '1', destination: 'New York', status: 'In Transit' },
    { id: '2', destination: 'Los Angeles', status: 'Delivered' },
    { id: '3', destination: 'Chicago', status: 'Pending' },
  ]

  return { shipments }
}