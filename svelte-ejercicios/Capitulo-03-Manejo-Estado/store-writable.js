import { writable } from "svelte/store";

export const contador = writable(0);

export function incrementar() {
  contador.update(n => n + 1);
}
