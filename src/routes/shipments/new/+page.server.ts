import { SHIPENGINE_API_KEY } from '$env/static/private'
import { fail, redirect } from '@sveltejs/kit'
import type { Actions, PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ locals }) => {
  const session = await locals.getSession()
  if (!session) throw redirect(303, '/login')
  return {}
}

export const actions: Actions = {
  default: async ({ request, locals }) => {
    const session = await locals.getSession()
    if (!session) throw redirect(303, '/login')

    const data = await request.formData()

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
            name: data.get('from_name'),
            phone: data.get('from_phone'),
            address_line1: data.get('from_address'),
            city_locality: data.get('from_city'),
            state_province: data.get('from_state'),
            postal_code: data.get('from_zip'),
            country_code: 'US',
          },
          ship_to: {
            name: data.get('to_name'),
            phone: data.get('to_phone'),
            address_line1: data.get('to_address'),
            city_locality: data.get('to_city'),
            state_province: data.get('to_state'),
            postal_code: data.get('to_zip'),
            country_code: 'US',
          },
          packages: [
            {
              weight: {
                value: Number(data.get('weight')),
                unit: 'pound',
              },
            },
          ],
        },
      }),
    })

    if (!response.ok) {
      return fail(400, { error: 'ShipEngine error — check your addresses' })
    }

    const result = await response.json()
    const rates = result.rate_response?.rates ?? []

    return { rates }
  },
}