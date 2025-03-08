<script>
  let contador = 0;

  $: mensaje = contador > 5 ? "¡Alto contador!" : "Sigue contando";
</script>

<h1>Contador: {contador}</h1>
<p>{mensaje}</p>
<button on:click={() => contador++}>Incrementar</button>
