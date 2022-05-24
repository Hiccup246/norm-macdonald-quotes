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
		position: absolute;
		top: 100px;
		height: calc(100vh - 100px - 45px);
		flex: 1;
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	header {
		position: absolute;
		top: 0;
		width: 100%;
	}

	footer {
		position: absolute;
		bottom: 0;
		width: 100%;
	}

	footer p {
		padding: 10px;
		margin: 0 auto;
		width: fit-content;
	}
</style>
