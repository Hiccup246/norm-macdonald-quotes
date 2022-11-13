<script>
	export let quote = "";
</script>

<div class="quote-box">
  <p>“{quote}”</p>
</div>

<style>
	.quote-box {
		background-color: var(--secondary-color);
		border-radius: 5px;
		height: 250px;
		max-width: 400px;
		padding: 20px;
		word-wrap: break-word;
		overflow-x: scroll;
	}
</style>