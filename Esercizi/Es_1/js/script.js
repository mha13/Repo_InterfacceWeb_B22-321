
/* ------------------------------- Esercizio 1 ------------------------------ */
let username = "pippo";
let password = "1234";

let usernameInserci = prompt("Inserisci username:");
let passwordInserci = prompt("Inserisci password:");

if (usernameInserci === username && passwordInserci === password) {
    console.log("Benvenuto " + username);
} else if (usernameInserci === username && passwordInserci !== password) {
    console.log("Password errata!");
} else {
    console.log("Accesso non possibile con queste credenziali.");
}

/* ------------------------------- Esercizio 2 ------------------------------ */

let temperatura = 22;
let sole = true;
let weekend = false;

if ((temperatura > 20 && sole === true) || weekend === true) {
    console.log("Oggi è una buona giornata per una gita!");
} else {
    console.log("Meglio restare a casa oggi");
}

/* ------------------------------- Esercizio 3 ------------------------------ */

let a = 10;
let b = 5;
let risultato = (a * b) / 2;

if (risultato > 20 && risultato < 30) {
    console.log("Il risultato (" + risultato + ") è nel range 20–30.");
} else {
    console.log("Il risultato (" + risultato + ") non è nel range.");
}

/* ------------------------------- Esercizio 4 ------------------------------ */

let score = 99;

score++;

if (score % 10 === 0 && !false) {
    console.log("Score perfetto! Hai ottenuto un bonus!");
} else {
    console.log("Score attuale: " + score);
}