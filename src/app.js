/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let pin = ["corazon.png", "diamante.png", "pica.png", "trebol.png"];
  let rannum = num[Math.floor(Math.random() * num.length)];
  let ranpin = pin[Math.floor(Math.random() * pin.length)];
  // console.log(rannum);
  // console.log(ranpin);
  document.getElementById("imgtop").src = "../src/assets/img/" + ranpin;
  document.getElementById("imgbot").src = "../src/assets/img/" + ranpin;
  numero.innerHTML = rannum;
  console.log("Hello Rigo from the console!");
};
