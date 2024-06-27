import { error } from '@sveltejs/kit'

export async function load({ params, fetch }) {
	try {
		const post = await import(`../../../posts/${params.post}.md`)

		return {
			content: post.default,
			metadata: post.metadata
		}
	} catch (e) {
		throw error(
			404,
			'Whoops, could not find ' +
			params.post +
			'. You probably have to upload the file to github first'
		)
	}
}
