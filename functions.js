function sorteo() {
    console.log(cantCards.value);
    let num = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
    let pin = ["corazon.png", "diamante.png", "pica.png", "trebol.png"];
    let cards = [];
    for (let i = 0; i < cantCards.value; i++) {
        let rannum = num[Math.floor(Math.random() * num.length)];
        let ranpin = pin[Math.floor(Math.random() * pin.length)];
        cards[i]= {"pinta": ranpin,
                   "numero": rannum  
                  };
    // console.log(rannum);
    // console.log(ranpin);
        document.getElementById("imgtop").src = "../src/assets/img/" + ranpin;
        document.getElementById("imgbot").src = "../src/assets/img/" + ranpin;
        numero.innerHTML = rannum;
    } 
    console.log(cards)
  }
  