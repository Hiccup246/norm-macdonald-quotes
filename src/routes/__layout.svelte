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
	}
	main {
		position: absolute;
		top: 100px;
		height: calc(100vh - 100px - 45px);
		flex: 1;
		display: flex;
		flex-direction: column;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
		width: 100%;
		/* width: calc(100% - 32px); */
		padding: 0 16px;
	}

	header {
		position: absolute;
		max-width: 1024px;
		top: 0;
		width: 100%;
		/* width: calc(100% - 32px); */
		padding: 0 16px;
	}

	footer {
		position: absolute;
		bottom: 0;
		max-width: 1024px;
		width: 100%;
		/* width: calc(100% - 32px); */
		padding: 0 16px;
	}

	footer p {
		padding: 10px;
		margin: 0 auto;
		width: fit-content;
	}
</style>
