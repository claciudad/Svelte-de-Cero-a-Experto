<script>
  export let nombre = "Desarrollador";
</script>

<h2>Hola, {nombre}!</h2>
<button on:click={() => alert(`¡Bienvenido, ${nombre}!`)}>Saludar</button>
