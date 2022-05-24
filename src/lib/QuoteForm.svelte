<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import QuoteBox from '$lib/QuoteBox.svelte';
	import QuoteButton from '$lib/QuoteButton.svelte';
</script>

<div class="quote-form">
	<QuoteBox />

	<div class="button-wrapper">
		<QuoteButton />
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