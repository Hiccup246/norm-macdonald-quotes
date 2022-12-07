<script>
	import QuoteForm from '$lib/QuoteForm.svelte';
	import NormFace from '$lib/NormFace/NormFace.svelte';
	import NormFaceImage from '$lib/assets/norm-face.webp';
</script>

<svelte:head>
	<meta charset="utf-8" />
	<title>Norm Macdonald Quotes</title>
	<meta name="description" content="Norm Macdonald Quote Generator" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="robots" content="index, follow" />
	<meta
		name="keywords"
		content="Norm Macdonald, Norm Macdonald Quotes, Norm Macdonald Quote Generator, Norm Macdonald SNL, Norm Macdonald Standup Comedy, Norm Macdonald Comedy"
	/>
	<meta name="author" content="James Watt" />
	<link rel="canonical" href="https://www.normmacdonaldquotes.com/" />
	<link rel="manifest" href="/site.webmanifest" />
	<link href="https://www.normmacdonaldquotes.com/" rel="publisher" />

	<link rel="icon" href="/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

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
	<meta name="twitter:image:alt" content={NormFaceImage} />

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
