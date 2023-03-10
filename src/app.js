/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { createPopperBase } from "@popperjs/core";

window.onload = function() {
  //write your code here
  let num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let pin = ["corazon.png", "diamante.png", "pica.png", "trebol.png"];
  let rannum = num[Math.floor(Math.random() * num.length)];
  let ranpin = pin[Math.floor(Math.random() * pin.length)];
  let cards = [];
  document.getElementById("imgtop").src = "../src/assets/img/" + ranpin;
  document.getElementById("imgbot").src = "../src/assets/img/" + ranpin;
  numero.innerHTML = rannum;

  document.getElementById("sorteo").addEventListener("click", function() {
    let num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let pin = ["corazon.png", "diamante.png", "pica.png", "trebol.png"];
    cartas.innerHTML = "";
    for (let i = 0; i < cantCards.value; i++) {
      let rannum = num[Math.floor(Math.random() * num.length)];
      let ranpin = pin[Math.floor(Math.random() * pin.length)];
      cards[i] = { pinta: ranpin, numero: rannum };
      cartas.innerHTML +=
        "<div class='carta'><img id='imgtop" +
        i +
        "' class='pintatop' alt=''/><p id='numero" +
        i +
        "'" +
        "class='numero'></p><img id='imgbot" +
        i +
        "' class='pintabot' alt=''/></div>";
      document.getElementById("imgtop" + i).src = "../src/assets/img/" + ranpin;
      document.getElementById("numero" + i).innerHTML = cards[i].numero;
      document.getElementById("imgbot" + i).src = "../src/assets/img/" + ranpin;
    }
  });
  document.getElementById("sort").addEventListener("click", function() {
    let cardsord = [];
    let cardsn = [].concat(cards);
    let paso = "";
    let ind = 0;
    order.innerHTML = "";
    console.log("vemos las cartas");
    console.log(cards);
    for (let i = 1; i <= cantCards.value; i++) {
      for (let j = 0; j < cantCards.value - 1; j++) {
        if (numcar(cardsn[j].numero) > numcar(cardsn[j + 1].numero)) {
          cardsord[ind] = cardsn[j];
          ind++;
          cardsord[ind] = cardsn[j + 1];
          ind++;
          paso = cardsn[j + 1];
          cardsn[j + 1] = cardsn[j];
          cardsn[j] = paso;
        }
      }
      // order.innerHTML +=
      //   "<div class='carta'><img id='imgtopo" +
      //   i +
      //   "' class='pintatop' alt=''/><p id='numeroo" +
      //   i +
      //   "'" +
      //   "class='numero'></p><img id='imgboto" +
      //   i +
      //   "' class='pintabot' alt=''/></div>";
      // document.getElementById("imgtopo" + i).src =
      //   "../src/assets/img/" + cards[i].pinta;
      // document.getElementById("numeroo" + i).innerHTML = cards[i].numero;
      // document.getElementById("imgboto" + i).src =
      //   "../src/assets/img/" + cards[i].pinta;
    }
    console.log("Ordenado");
    console.log(cardsn);
    console.log("cambios");
    console.log(cardsord);
    function numcar(num) {
      if (num == "A") {
        return 1;
      }
      if (num == "J") {
        return 11;
      }
      if (num == "Q") {
        return 12;
      }
      if (num == "K") {
        return 13;
      }
      return num;
    }
  });
};
