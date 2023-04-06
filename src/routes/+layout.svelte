<script>
	import './styles.css';
	import { PUBLIC_UMAMI_WEBSITE_ID, PUBLIC_UMAMI_WEBSITE_URL } from '$env/static/public';
</script>

<svelte:head>
	<!-- Umami Analytics Tracking Tags -->
	<!-- Umami Analytics Tracking Tags -->
	<script async defer data-website-id={PUBLIC_UMAMI_WEBSITE_ID} src={PUBLIC_UMAMI_WEBSITE_URL}>
	</script>
</svelte:head>

<div class="app">
	<header>
		<h1>Norm Macdonald</h1>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>
			<james-watt-calling-card modal-bg-color="var(--primary-color)">
				Made
			</james-watt-calling-card> with lots of ❤️ for the man and his legacy
		</p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100vh;
	}

	main {
		flex: 1;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		max-width: 1300px;
		width: 100%;
		padding: 0 16px;
	}

	header {
		max-width: 1300px;
		width: 100%;
	}

	footer {
		background-color: var(--secondary-color);
		width: 100%;
		text-align: center;
	}

	footer p {
		padding: 10px;
		margin: 0 auto;
		width: fit-content;
	}

	h1 {
		font-style: italic;
		font-weight: bold;
		font-size: xxx-large;
	}

	james-watt-calling-card:hover {
		text-decoration: underline;
	}
</style>
