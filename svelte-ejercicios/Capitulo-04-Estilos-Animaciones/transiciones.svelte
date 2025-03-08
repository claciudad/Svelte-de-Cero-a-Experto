<script>
  import { fade } from "svelte/transition";
  let visible = true;
</script>

<button on:click={() => visible = !visible}>Toggle</button>

{#if visible}
  <p transition:fade>¡Hola con transición!</p>
{/if}
