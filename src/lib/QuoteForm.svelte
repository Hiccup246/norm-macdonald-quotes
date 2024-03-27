<script lang="ts">
	import QuoteBox from '$lib/QuoteBox.svelte';
	import QuoteButton from '$lib/QuoteButton.svelte';

	let currentQuote =
		'I always told everybody the perfect joke would be where the setup and punch line were identical';

	async function handleClick() {
		const res = await fetch('/quote');
		const data = await res.json();

		if (res.ok) {
			currentQuote = data.quote;
		} else {
			alert('Norm Macdonald will be right back after you establish an internet connection!');
		}
	}
</script>

<div class="quote-form">
	<QuoteBox quote={currentQuote} />

	<div class="button-wrapper">
		<QuoteButton clickFunction={handleClick} />
	</div>
</div>

<style>
	.button-wrapper {
		margin-top: 40px;
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
