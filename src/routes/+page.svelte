<script>
	import QuoteForm from '$lib/QuoteForm.svelte';
	import NormFace from '$lib/NormFace.svelte';
	import NormSocials from '$lib/assets/norm-photo-socials.webp';
</script>

<svelte:head>
	<!-- Open Graph META Tags -->
	<meta property="og:title" content="Norm Macdonald Quote Generator" />
	<meta property="og:description" content="Norm Macdonald Quote Generator" />
	<meta property="og:site_name" content="Norm Macdonald Quotes" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={NormSocials} />
	<meta property="og:url" content="https://www.normmacdonaldquotes.com" />

	<!-- Twitter META Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:image" content={NormSocials} />
	<meta name="twitter:image:alt" content="A picture of Norm Macdonald performing stand-up comedy" />
	<meta name="twitter:title" content="Norm Macdonald Quote Generator" />
	<meta name="twitter:creator" content="@jameswattnz" />
	<meta name="twitter:site" content="@jameswattnz" />
	<meta name="twitter:description" content="Norm Macdonald Quote Generator" />
</svelte:head>

<div class="content">
	<div class="left-norm-face">
		<NormFace flipHorizontal={true} />
	</div>

	<QuoteForm />

	<div class="right-norm-face">
		<NormFace />
	</div>
</div>

<style>
	.content {
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

		.content {
			align-items: center;
			flex-direction: column;
		}
	}
</style>
