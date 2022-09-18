"use strict";

//ELEMENTS
const buttonSlider = document.querySelector(".slider--btn");
const buttonToggle = document.querySelector(".toggle");
const button1 = +document.querySelector(".button--1").value;
const button2 = +document.querySelector(".button--2").value;
const button3 = +document.querySelector(".button--3").value;
const button4 = +document.querySelector(".button--4").value;
const button5 = +document.querySelector(".button--5").value;
const button6 = +document.querySelector(".button--6").value;
const button7 = +document.querySelector(".button--7").value;
const button8 = +document.querySelector(".button--8").value;
const button9 = +document.querySelector(".button--9").value;
const button0 = +document.querySelector(".button--0").value;
const buttonDot = document.querySelector(".button--dot").value;
const buttonDivide = document.querySelector(".button--divide").value;
const buttonMultiply = document.querySelector(".button--multiply").value;
const buttonAdd = document.querySelector(".button--add").value;
const buttonSubtract = document.querySelector(".button--subtract").value;
const buttonReset = document.querySelector(".button--reset");
const buttonEqual = document.querySelector(".button--equal");
const buttonDelete = document.querySelector(".button--del");
let grandTotal = document.querySelector(".total--number");
let last = +grandTotal.textContent;
const operators = ["+", "-", "*", "/"];

//LOGIC
grandTotal.textContent = "0";
const allButtons = document.querySelectorAll(".button");
const allKeyValues = [...allButtons].map((ele) => ele.value);

//ENTERING THE VALUES
allButtons.forEach((element) => {
  element.addEventListener("click", function () {
    grandTotal.textContent === "0"
      ? (grandTotal.textContent = element.value)
      : (grandTotal.textContent += element.value);
  });
});

//RESET LOGIC
buttonReset.addEventListener("click", () => {
  grandTotal.textContent = "0";
});

//DELETE LOGIC
buttonDelete.addEventListener("click", () => {
  grandTotal.textContent.length === 1
    ? (grandTotal.textContent = "0")
    : (grandTotal.textContent = grandTotal.textContent.slice(0, -1));
});

//CALCULATION LOGIC
buttonEqual.addEventListener("click", function () {
  grandTotal.textContent = eval(grandTotal.textContent).toFixed(2);
});

//THEME LOGIC
buttonToggle.addEventListener("click", function () {
  document.querySelector("body").classList.toggle("active");
});
