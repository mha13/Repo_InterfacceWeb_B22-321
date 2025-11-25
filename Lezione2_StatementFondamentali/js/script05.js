// Stampa i numri da1 a 100  in console. Accanto a multipli di 3 stampa "ZOOM", accanto a multipli di 5 stampa "BOOM", accanto ai multipli di 3 e5 stampa "ZOOM BOOM"

for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log(i + ": ZOOM BOOM")
    } else if (i % 5 == 0) {
        console.log(i + ": BOOM")
    } else if (i % 3 == 0) {
        console.log(i + ": ZOOM")
    } else {
        console.log(i)
    }
}

// BREAK, utiliziamo nei cicli, all'interno di un if permette di uscire anticipatamente da un ciclo
for (let i = 1; i < 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i)
}

// continue: con questa keyword aslto un'iterazione, cioe salta un giro
console.log("------continue------")
for (let i = 1; i < 10; i++) {
    if (i < 5) {
        continue;
    }
    console.log(i)
}

// Esempio : data un lista 
let numeri = [7, 5, 3, 2, 9, 10, 4, 11, 12];
for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] % 2 == 0) {
        console.log("salto un numero pari");
        continue;
    }
    console.log(numeri[i]);
}

// Esempio : Trava il nome
let nomi =["Ana","Marco","Paolo","Luisa","Valeria","Gianni","Dario","Valeria"]
for (let i = 0; i < nomi.length; i++) {
    if(nomi[i] == "Valeria"){
        console.log("Hai appena trovato un Valeria");
        break;
    }
    console.log(nomi[i])
}