"use strict";

const titleElement = document.querySelector(".js-title");
const buttonElement = document.querySelector(".js-button");
const imputClueElement = document.querySelector(".js-clue");
const imputAcumulatorElement = document.querySelector(".js-acumulator");
const imputHTML = document.querySelector(".js-imputHTML");
let Attempts = 0;

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const randomNumber = getRandomNumber(100);
console.log(`Mi número aleatorio es: ${randomNumber}`);

function handlerClue() {
  let imputClueElementValue = parseInt(imputHTML.value);

  if (imputClueElementValue === randomNumber) {
    imputClueElement.value = "Has ganado campeona!!!";
  } else if (imputClueElementValue > 100) {
    imputClueElement.value = "El número debe estar entre 1 y 100";
  } else if (imputClueElementValue > randomNumber) {
    imputClueElement.value = "Demasiado alto";
  } else if (imputClueElementValue < randomNumber) {
    imputClueElement.value = "Demasiado bajo";
  }
}

function handlerAttempts() {
  Attempts = Attempts + 1;
  imputAcumulatorElement.value = `Número de intentos: ${Attempts}`;
}

function handleClickButton() {
  handlerClue();
  handlerAttempts();
}

buttonElement.addEventListener("click", handleClickButton);
