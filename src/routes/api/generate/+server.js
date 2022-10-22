import { json } from '@sveltejs/kit'
import { API_URL } from '$env/static/private'
/**
 *
 * @type {import('@sveltejs/kit').RequestHandler}
 */
export const GET = async () => {
	let quote = []
	const response = await fetch(`${API_URL}/random`)

	if (response.ok) {
		quote = await response.json()
	}

	return json({
		quote: quote[0]
	})
}
