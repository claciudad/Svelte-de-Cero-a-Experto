import { writable, derived } from "svelte/store";

export const contador = writable(0);

export const doble = derived(contador, $contador => $contador * 2);
