import { render, fireEvent } from "@testing-library/svelte";
import Button from "../Capitulo-02-Componentizacion/componente-reutilizable.svelte";
import { expect, test } from "vitest";

test("El botón debe renderizarse correctamente", () => {
  const { getByText } = render(Button, { texto: "Click Me" });
  expect(getByText("Click Me")).toBeTruthy();
});
