<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import QuoteBox from '$lib/QuoteBox.svelte';
	import QuoteButton from '$lib/QuoteButton.svelte';
	import NormFace from '$lib/NormFace/NormFace.svelte';
</script>

<svelte:head>
	<title>Norm Macdonald Quotes</title>
	<meta name="description" content="Norm Macdonald Quotes" />
</svelte:head>

<section>
	<NormFace />

	<div class="quote-box">
		<p>“I always told everybody the perfect joke would be where the setup and punch line were identical” - Norm Macdonald</p>
	</div>

	<NormFace />
</section>

<style>
	section {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.quote-box {
		background-color: var(--secondary-color);
		border-radius: 5px;
		height: 250px;
		width: 400px;
		padding: 20px;
	}

	.quote-box p {
		margin: 0;
	}
</style>
