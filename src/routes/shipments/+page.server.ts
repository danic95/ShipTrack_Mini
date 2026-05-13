import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async () => {
  // Acá eventualmente va la query a Supabase
  // Por ahora simulamos el fetch
  const shipments = [
    { id: '1', destination: 'New York', status: 'In Transit' },
    { id: '2', destination: 'Los Angeles', status: 'Delivered' },
    { id: '3', destination: 'Chicago', status: 'Pending' },
  ]

  return { shipments }
}