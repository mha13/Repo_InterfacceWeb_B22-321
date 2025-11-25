// Il circlo for permette di ripetere un'operazione per un numero definito di volte.
// INZIALIZZAZIONE CONDIZIONE AGGIORNAMENTO

for (let i = 0; i < 3; i++) {
    console.log("Cioa " + i);
}
for (let i = 1; i <= 3; i++) {
    console.log("Ciao " + i)
}

// ATT: quando faccio let i = 0 dentro il for questo variabile vive solo ed esclusivamente nel for, fuori non esiste, non so cosa e. i e una variabile LOCALE, vive e muore nel costrutto in cui l'ho dichiarata
// console.log(i)

// Circlo inverso
for (let i = 3; i > 0; i--) {
    console.log("Ciao " + i)
}

// Applichiamo il circlo 
let listaNumeri = [3, 5, 9, 10, 11, -3];
for (let i = 0; i < listaNumeri.length; i++) {
    console.log("Stai leggendo il numero: " + listaNumeri[i])
}


let parole = ["caio", "addio", "buondi", "buon", "buonsera", "arriverderci"];
for (let i = 0; i < parole.length; i++) {
    console.log(parole[i])
}

for (let i = parole.length - 1; i >= 0; i--) {
    console.log(parole[i])
}

// Giochiamo con il circlo for. DAta una lista di voti, stampare un voto alla volta e fornire un feedback all'utente se questo e < 18

let votiEsami = [30, 26, 28, 19, 30, 22, 16, 30];
for (let i = 0; i < votiEsami.length; i++) {
    let msg = "Esame num: " + (i + 1) + " - voto " + votiEsami[i];
    if (votiEsami[i] < 18) {
        console.log(msg + " Attenzione, qui hai preso un brutto voto");
    } else {
        console.log(msg);
    }
}