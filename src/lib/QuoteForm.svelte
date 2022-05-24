<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import QuoteBox from '$lib/QuoteBox.svelte';
	import QuoteButton from '$lib/QuoteButton.svelte';

	let currentQuote = "I always told everybody the perfect joke would be where the setup and punch line were identical"

	function handleClick () {
		// Generate new random quote here
	}
</script>

<div class="quote-form">
	<QuoteBox quote={currentQuote} />

	<div class="button-wrapper">
		<QuoteButton clickFunction={handleClick}/>
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