import { createRow } from "./createRow.js";
const tbody = document.querySelector("tbody");

export function addPair(dictionary, inputValue) {
  const [key, value] = inputValue.replace(/\s/g, "").split("=");

  const isValid = /^[a-zA-Z0-9 ]+=[a-zA-Z0-9 ]+$/.test(inputValue);
  const hasKey = dictionary[key] !== undefined;

  if (!isValid || hasKey) throw new Error("Invalid input");

  dictionary[key] = value;
  createRow(key, value);
  localStorage.setItem("dictionary", JSON.stringify(dictionary));
}
