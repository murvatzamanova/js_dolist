const tbody = document.querySelector("#data");
const table = document.querySelector("#table");

const plusBtn = document.querySelector(".plusBtn");
const tbody = document.querySelector("tbody");


plusBtn.addEventListener("click", () => {
  const row = document.createElement("tr");
  const no = document.createElement("td");
  const name = document.createElement("td");
  const nameInput = document.createElement("input");
  nameInput.setAttribute("type", "text");
  nameInput.setAttribute("placeholder", "Adi daxil ed");
  name.append(nameInput);
  const surname = document.createElement("td");
  const surnameInput = document.createElement("input");
  surnameInput.setAttribute("type", "text");
  surnameInput.setAttribute("placeholder", "Soyadi daxil ed");
  surname.append(surnameInput);
  const age = document.createElement("td");
  const ageInput = document.createElement("input");
  ageInput.setAttribute("type", "number");
  ageInput.setAttribute("placeholder", "Yaşi daxil ed");
  age.append(ageInput);
  const emeliyyatlar = document.createElement("td");
  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Yadda saxla";
  saveBtn.classList.add("saveBtn");
  const cancelBtn = document.createElement("button");
  cancelBtn.textContent = "Sil";
  cancelBtn.classList.add("remoweBtn");
  emeliyyatlar.append(saveBtn, remoweBtn);
  row.append(no, name, surname, age, emeliyyatlar);
  tbody.append(row);
});
