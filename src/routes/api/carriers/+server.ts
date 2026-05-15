import { SHIPENGINE_API_KEY } from '$env/static/private'
import { json, error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async () => {
  const response = await fetch('https://api.shipengine.com/v1/carriers', {
    headers: {
      'API-Key': SHIPENGINE_API_KEY,
      'Content-Type': 'application/json',
    },
  })

  if (!response.ok) {
    throw error(response.status, 'ShipEngine API error')
  }

  const data = await response.json()
  return json(data)
}