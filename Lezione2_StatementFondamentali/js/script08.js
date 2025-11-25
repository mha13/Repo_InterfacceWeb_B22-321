//Valore assoluto, parte positiva di un numero
let num1 = Math.abs(-8);
console.log(num1);

//Radice
let num2 = Math.sqrt(64);
console.log(num2);

//Potenza
let num3 = Math.pow(8, 2);
console.log(num3);

//Arrotrondamento con Round
let num4 = Math.round(20.49);
console.log(num4);
let num5 = Math.round(20.5);
console.log(num5);

//Arrotrondamento con ceil (intero superiore) e floor (intero inferiore)
let num6 = Math.ceil(20.2);
console.log("con ceil:" + num6);
let num7 = Math.floor(20.8);
console.log("con ceil:" + num7);

//Trunc, elimina le cifre dopo le virgola
let num8 = Math.trunc(24.81243124234);
console.log(num8);

let num9 = 24.81243124234;
console.log(num9.toPrecision(4));

// Math.rando() ci fornusce un numero casuale tra 0 e 1, 1 non compreso
let numCasuale = Math.random()
console.log(numCasuale);

let numCas2 = Math.ceil(Math.random() * 10);
console.log(numCas2);

// Numero casuale tra 10 e 25
let numCas3 = Math.ceil(Math.random() * 15) + 10;
console.log(numCas3);

// Lotto alle otto
let numEstratto = Math.ceil(Math.random()*90);
console.log(numEstratto);