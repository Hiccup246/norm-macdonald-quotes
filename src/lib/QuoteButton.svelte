<script lang="ts">
  export let clickFunction:Function;
</script>

<button class="quote-button" on:click={() => clickFunction()}>
  <p>Quote Me</p>
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