import { addPair } from "./functions/addPair.js";
import { createRow } from "./functions/createRow.js";
import { sortData } from "./functions/sortData.js";

const inputElement = document.querySelector("input");
const tableElement = document.querySelector("table");
const tbody = document.querySelector("tbody");
const thead = document.querySelector("thead");

const modalOverlay = document.querySelector(".modal-overlay");
const modalContentContainer = document.querySelector(
  ".modal-overlay__content div"
);

const [
  btnAdd,
  btnSortByName,
  btnSortByValue,
  btnDelete,
  btnShowXml,
  btnCloseModal,
] = [
  document.getElementById("add"),
  document.getElementById("sortByName"),
  document.getElementById("sortByValue"),
  document.getElementById("delete"),
  document.getElementById("showXml"),
  document.getElementById("closeModal"),
];

const isEmpty = localStorage.getItem("dictionary") === null;
const dictionary = !isEmpty
  ? JSON.parse(localStorage.getItem("dictionary"))
  : {};
let targetRow = null;

//Event handlers

window.addEventListener("load", () => {
  if (!isEmpty) {
    for (const key in dictionary) {
      if (dictionary.hasOwnProperty(key)) {
        const value = dictionary[key];
        console.log(tbody);
        createRow(key, value);
      }
    }
  }

  document.querySelectorAll("tbody td").forEach((td) =>
    td.addEventListener("click", (e) => {
      targetRow = e.target.parentNode;
      targetRow.className
        ? (targetRow.className = "")
        : (targetRow.className = "selected");
    })
  );
});

//Buttons

btnAdd.addEventListener("click", () => {
  console.log(inputElement, inputElement.value);
  addPair(dictionary, inputElement.value);
});

btnSortByName.addEventListener("click", () => {
  const names = thead.firstElementChild.firstElementChild;
  sortData(names);
});

btnSortByValue.addEventListener("click", () => {
  const values = thead.firstElementChild.lastElementChild;
  sortData(values);
});

btnDelete.addEventListener("click", () => {
  const selected = document.querySelectorAll(".selected");

  if (selected) {
    selected.forEach((targetRow) => {
      const targetKey = targetRow.firstElementChild.innerText;
      delete dictionary[targetKey];
      targetRow.parentNode.removeChild(targetRow);
    });

    localStorage.setItem("dictionary", JSON.stringify(dictionary));
  }
});

btnShowXml.addEventListener("click", () => {
  const serializer = new XMLSerializer();
  const xmlTableString = serializer.serializeToString(tableElement);
  modalOverlay.classList.remove("hidden");
  modalContentContainer.innerText = xmlTableString;
});

btnCloseModal.addEventListener("click", () => {
  modalOverlay.classList.add("hidden");
});
