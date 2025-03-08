<script>
  let mensaje = "¡Hola, Svelte!";
</script>

<h1>{mensaje}</h1>
<button on:click={() => mensaje = "¡Bienvenido a Svelte!"}>Cambiar Mensaje</button>
