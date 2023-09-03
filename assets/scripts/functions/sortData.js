const tbody = document.querySelector("tbody");

const getCellValue = (tr, idx) => tr.children[idx].innerText;

export function sortData(param) {
  const columnIdx = Array.from(param.parentNode.children).indexOf(param);
  const rows = Array.from(document.querySelectorAll("tbody > tr"));

  rows
    .sort((a, b) => {
      const cellA = getCellValue(a, columnIdx);
      const cellB = getCellValue(b, columnIdx);

      return cellA.localeCompare(cellB);
    })
    .forEach((row) => {
      tbody.appendChild(row);
    });
}
