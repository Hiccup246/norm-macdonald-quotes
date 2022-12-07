<script>
	import QuoteForm from "$lib/QuoteForm.svelte";
	import NormFace from "$lib/NormFace/NormFace.svelte";
	import NormFaceImage from "$lib/assets/norm-face.webp";
</script>

<svelte:head>
	<!-- Essential META Tags -->
	<meta property="og:title" content="Norm Macdonald Quotes" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={NormFaceImage} />
	<meta property="og:url" content="https://www.normmacdonaldquotes.com" />
	<meta name="twitter:card" content="summary_large_image" />

	<!-- Non-Essential, But Recommended -->
	<meta
		property="og:description"
		content="Norm Macdonald Quote Generator"
	/>
	<meta property="og:site_name" content="Norm Macdonald Quotes" />
	<meta name="twitter:image:alt" content="%sveltekit.assets%/norm-face.webp" />

	<!-- Non-Essential, But Required for Analytics -->
	<meta name="twitter:site" content="@jameswattnz" />
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
</style>
