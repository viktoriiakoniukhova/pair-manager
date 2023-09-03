const tbody = document.querySelector("tbody");

export function createRow(key, value) {
  const row = document.createElement("tr");
  const rowInnerHTML = `
  <td><span>${key}</span></td>
  <td><span>${value}</span></td>
  `;
  row.innerHTML = rowInnerHTML;
  tbody.appendChild(row);
}
