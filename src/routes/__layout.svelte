<script lang="ts">
	import '../app.css';
</script>

<header>
	<h1>Norm Macdonald</h1>
</header>

<main>
	<slot />
</main>

<footer>
	<p>Made with lots of ❤️ for the man and his legacy</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
