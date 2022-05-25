import quotes from '$lib/data/quotes.json';

export async function get() {
	const min = Math.ceil(0);
	const max = Math.floor(quotes.length - 1);
	const randomQuoteIndex = Math.floor(Math.random() * (max - min + 1)) + min;
	const quote = quotes[randomQuoteIndex];

	if (quote) {
		return {
			body: { quote: quote }
		};
	}

	return {
		status: 500
	};
}
