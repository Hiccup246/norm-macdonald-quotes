<script context="module" lang="ts">
	export const prerender = true;
</script>

<script lang="ts">
	import QuoteForm from '$lib/QuoteForm.svelte';
	import NormFace from '$lib/NormFace/NormFace.svelte';
</script>

<svelte:head>
	<title>Norm Macdonald Quotes</title>
	<meta name="description" content="Norm Macdonald Quotes" />
</svelte:head>

<section>
	<NormFace />

	<QuoteForm />

	<NormFace />
</section>

<style>
	section {
		margin-top: 50px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}
</style>
