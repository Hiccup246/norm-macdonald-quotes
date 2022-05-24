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
	<div class="left-norm-face">
		<NormFace flipHorizontal={true} />
	</div>

	<QuoteForm />

	<div class="right-norm-face">
		<NormFace />
	</div>
</section>

<style>
	section {
		margin-top: 50px;
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		flex-wrap: wrap;
	}

	@media (max-width: 990px) {
		.left-norm-face {
			display: none;
		}

		.right-norm-face {
			margin: 40px 0;
		}

		section {
			align-items: center;
			flex-direction: column;
		}
	}

 	/* TODO Reintroduce if in need of separate mobile view */
	/* @media (max-width: 425px) {
		.left-norm-face {
			display: none;
		}

		.right-norm-face {
			margin: 40px 0;
		}

		section {
			align-items: center;
			flex-direction: column;
		}
	} */
</style>
