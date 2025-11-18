// ARRAY strutture contenitori 0-based

let colori = ["blue", "verde", "rosso", "giallo"];

let numElems = colori.length;

console.log("Nell'Array ci sono " + numElems + " elementi");
console.log(colori[0]);
console.log(colori[1]);
console.log(colori[2]);
console.log(colori[3]);

let primEl = colori[0];
console.log(primEl);


//aggiungo un colore al fondo della'array
colori.push("nero");
colori.push("maroni");

let ultimoEl = colori[colori.length - 1];
console.log(ultimoEl);
console.log(colori.indexOf("blue"));

// rimuovo l' ultimo colore
colori.pop();


// rimuovo un colore all'inizio della'array
colori.shift();

// aggiungo un colore all'inizio della'array
colori.unshift("arancione");

// inverto l'ordine degli elementi
colori.reverse();

// ordino gli elemnti alfabeticamnete
colori.sort();

// creo un alto array e con l'operatore speard lo unisco al precedente
let altriColori = ["ciano", "colbato"];
colori.push(...altriColori);


// Estraggo degli elementi con slice()
console.log(colori);
console.log(colori.slice(1, 5));
console.log(colori.slice(0, 1));


let nuoviColori = colori.map((colore) => { return colore + " chiara" });
console.log(nuoviColori);

// unire gli elementi di un array 
let saluti = ["Ciao", "come", "stai"];

console.log(saluti.join(" "));


let stringaParole = "Ciao come stai"
// posso prendere le parole di questo string e inserirle in un array
console.log(stringaParole.split(" "));


let frutti = ["mela", "arachia", "pesca", "kiwi"];
frutti.forEach((frutto, index) => console.log(index + "." + frutto))

for (let i = 0; i < frutti.length; i++) {
    console.log(i + "." + frutti[i])
}