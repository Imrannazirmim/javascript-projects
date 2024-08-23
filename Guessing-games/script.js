//select the element
"use strict";
const guessingInput = document.querySelector("#input");
const checkBtn = document.getElementById("checkBtn");
const againBtn = document.getElementById("againBtn");
const computer = document.getElementById("computer");
const score = document.getElementById("score");
const message = document.getElementById("win");
const highLowCount = document.querySelector(".highCount");

function guessingNumber() {
  const inputValue = Number(guessingInput.value);

  const random = Math.floor(Math.random() * 20) + 1;
  guessingInput.value = "";

  if (inputValue > 20 || inputValue === "") {
    alert("please enter number and between 1 - 20");
  } else if (inputValue) {
    computer.innerText = `Computer = ${random}`;
    if (inputValue === random) {
      score.innerText = `Score = ${inputValue}`;
      document.body.classList.add("win");
      message.innerText = `You Have Game Win!!`;
      guessingInput.disabled = true;
      highLowCount.innerText = "";
    } else if (random < inputValue) {
      highLowCount.innerText = `High Number`;
    } else {
      highLowCount.innerText = `Low Number`;
    }
  }
}

function displayShow() {
  document.body.classList.remove("win");
  guessingInput.disabled = false;
  message.innerText = "";
  computer.innerText = "";
  score.innerText = "";
}

checkBtn.addEventListener("click", () => {
  guessingNumber();
});

againBtn.addEventListener("click", displayShow);
