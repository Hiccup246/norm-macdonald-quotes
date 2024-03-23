<script lang="ts">
	export let clickFunction: Function;
</script>

<button class="quote-button" on:click={() => clickFunction()}>
	Quote Me
</button>

<style>
	.quote-button {
		background-color: var(--secondary-color);
		border-radius: 5px;
		padding: 15px 30px;
		border: none;
	}

	.quote-button:hover {
		opacity: 0.7;
		cursor: pointer;
	}
</style>
