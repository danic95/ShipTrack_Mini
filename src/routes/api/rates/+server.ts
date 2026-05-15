import { SHIPENGINE_API_KEY } from '$env/static/private'
import { json, error } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const POST: RequestHandler = async ({ request }) => {
  const body = await request.json()

  const response = await fetch('https://api.shipengine.com/v1/rates', {
    method: 'POST',
    headers: {
      'API-Key': SHIPENGINE_API_KEY,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      rate_options: {
        carrier_ids: ['se-5519486'],
      },
      shipment: {
        ship_from: {
          name: 'Test Sender',
          phone: '512-555-1234',
          address_line1: '123 Main St',
          city_locality: 'Austin',
          state_province: 'TX',
          postal_code: '78751',
          country_code: 'US',
        },
        ship_to: {
          name: 'Test Receiver',
          phone: '212-555-5678',
          address_line1: '456 Elm St',
          city_locality: 'New York',
          state_province: 'NY',
          postal_code: '10001',
          country_code: 'US',
        },
        packages: [
          {
            weight: { value: 2, unit: 'pound' },
            dimensions: { unit: 'inch', length: 10, width: 8, height: 4 },
          },
        ],
      },
    }),
  })

  if (!response.ok) {
    const err = await response.json()
    throw error(response.status, JSON.stringify(err))
  }

  const data = await response.json()
  return json(data)
}