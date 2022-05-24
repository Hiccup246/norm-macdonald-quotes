<script lang="ts">
	import '../app.css';
</script>

<div class="app">
	<header>
		<h1>Norm Macdonald</h1>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>Made with lots of ❤️ for the man and his legacy</p>
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
		max-width: 1024px;
		box-sizing: border-box;
		width: 100%;
		padding: 0 16px;
	}

	header {
		max-width: 1024px;
		width: 100%;
		padding: 0 16px;
	}

	footer {

		max-width: 1024px;
		width: 100%;
		padding: 0 16px;
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
</style>
