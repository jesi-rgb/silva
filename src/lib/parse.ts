const HEIGHT = 630;
const WIDTH = 1200;
const factor = 1.5;

export function parseQuery(query: URLSearchParams) {
	const title = query.get("title") ?? undefined;
	const desc = query.get("desc") ?? undefined;
	// only allow seeds in the random word list
	const width = query.get("w") ?? WIDTH;
	const height = query.get("h") ?? HEIGHT;
	return {
		title: title,
		desc: desc,
		width: +width * factor,
		height: +height * factor,
	};
}
