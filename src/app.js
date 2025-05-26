import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const suits = ["heart", "diamond", "club", "spade"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];
  let randomSuit = Math.floor(Math.random() * suits.length);
  let randomNumber = Math.floor(Math.random() * numbers.length);
  let cardNumber = document.getElementById("number");
  let cardSuit = document.getElementById("card");
  cardNumber.innerHTML = numbers[randomNumber];
  cardSuit.classList.add(suits[randomSuit]);
};
