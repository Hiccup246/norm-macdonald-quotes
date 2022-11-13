import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import quotes from '$lib/data/quotes.json';

export const GET: RequestHandler = () => {
	const min = Math.ceil(0);
	const max = Math.floor(quotes.length - 1);
	const randomQuoteIndex = Math.floor(Math.random() * (max - min + 1)) + min;
	const quote = quotes[randomQuoteIndex];

	if (quote) {
		return json({ quote });
	}

	throw error(500, 'Internal Server Error');
}

