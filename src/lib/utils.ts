type DateStyle = Intl.DateTimeFormatOptions["dateStyle"];

export function formatDate(
	date: string,
	dateStyle: DateStyle = "medium",
	locales = "en-UK",
) {
	return new Intl.DateTimeFormat(locales, { dateStyle }).format(new Date(date));
}

/**
 * format of date is DD/MM/YYYY
 **/
export function stringToDate(date: string) {
	const split = date.split("/");
	const day = parseInt(split[0]);
	const month = parseInt(split[1]) - 1;
	const year = parseInt(split[2]);
	return new Date(year, month, day);
}

export function mapRange(
	number: number,
	inMin: number,
	inMax: number,
	outMin: number,
	outMax: number,
): number {
	return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
