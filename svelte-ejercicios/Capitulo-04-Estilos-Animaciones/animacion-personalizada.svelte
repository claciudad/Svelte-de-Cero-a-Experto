<script>
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";

  let posicion = tweened(0, { duration: 500, easing: cubicOut });

  function mover() {
    posicion.set(Math.random() * 500);
  }
</script>

<button on:click={mover}>Mover</button>
<p style="transform: translateX({$posicion}px);">🔵</p>
