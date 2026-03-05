let addBtn = document.getElementById("addBtn");
let formBox = document.getElementById("formBox");
let saveBtn = document.getElementById("saveMatch");
let matchArea = document.getElementById("matches");

addBtn.onclick = function () {
  if (formBox.style.display === "none") {
    formBox.style.display = "block";
  } else {
    formBox.style.display = "none";
  }
};

saveBtn.onclick = function () {
  let playerOne = document.getElementById("p1").value;
  let playerTwo = document.getElementById("p2").value;
  let scoreVal = document.getElementById("scoreInput").value;

  if (playerOne === "" || playerTwo === "" || scoreVal === "") {
    alert("Please fill everything");
    return;
  }

  let div = document.createElement("div");
  div.className = "matchItem";
  div.innerHTML = "<b>" + playerOne + "</b> vs <b>" + playerTwo + "</b> - " + scoreVal;

  matchArea.appendChild(div);

  document.getElementById("p1").value = "";
  document.getElementById("p2").value = "";
  document.getElementById("scoreInput").value = "";

  formBox.style.display = "none";
};
