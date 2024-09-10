/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let button = document.querySelector("#generateButton");
  button.addEventListener("click", generateCard);
  generateCard();
};
function generateCard() {
  let generateFiguras = Math.floor(Math.random() * 4);
  let arrFiguras = ["♦", "♥", "♠", "♣"];
  let colorFiguras = generateFiguras < 2 ? "red" : "black";
  generateFiguras = arrFiguras[generateFiguras];
  function generateNumber() {
    let number = Math.floor(Math.random() * 13) + 1;
    switch (number) {
      case 11:
        number = "J";
        break;
      case 12:
        number = "Q";
        break;
      case 13:
        number = "K";
        break;
      case 1:
        number = "A";
        break;
    }
    return number;
  }
  let valor = generateNumber();

  document.getElementById("generateNumber").innerText = valor;
  let figuras = document.querySelectorAll(".generateFiguras");
  figuras.forEach(fig => {
    fig.innerText = generateFiguras;
    fig.style.color = colorFiguras;
  });
}
setInterval(generateCard, 10000);
