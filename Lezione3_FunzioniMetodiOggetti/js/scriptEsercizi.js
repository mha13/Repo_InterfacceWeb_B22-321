/**
 * @param {string} stringa
 * @param {string} lettera
 */

/* ---------------------------------- ES 1 ---------------------------------- */
//Dichiara una funzione con all'interno una variabile e stampa il suo valore.
//Dichiara una variabile globale. Dichiara una funzione che stampa il valore di questa variabile. Sposta il richiamo della funzione prima e dopo la variabile per capire cosa accade.

const primo = () => {
    let variabileLocale = "Ciao, sono una variabile locale!";
    console.log(variabileLocale);
}
primo();

let variabileGlobale = "Ciao, sono una variabile globale!";

const secondo = () => {
    console.log(variabileGlobale);
}
secondo();

/* ----------------------------------- ES2 ---------------------------------- */
//Scrivi una funzione javascript che accetta due argomenti: una stringa e una lettera. La funzione conterà il numero di occorrenze della specifica lettera nella stringa

const es2 = (stringa, lettera) => {
    let count = 0;
    for (let i = 0; i < stringa.length; i++) {
        if (stringa[i].toLowerCase() == lettera.toLowerCase()) {
            count++;
        }
    }
    return count;
}

console.log(es2("javascript è divertente", "e"));

/* ----------------------------------- ES3 ---------------------------------- */
//Scrivi una funzione javascript che accetta un argomento e restituisce il tipo di dato: oggetto, funzione, stringa, numero, undefined.
const es3 = (argomento) => {
    return typeof argomento;
}

console.log(es3(42));
console.log(es3("Ciao"));
console.log(es3({}));

/* ----------------------------------- ES4 ---------------------------------- */
//Scrivi una funzione javascript che accetta una stringa come parametro e trova la parola più lunga all’interno della frase. Es (mi chiamo Massimiliano -> Massimiliano).
const es4 = (frase) => {
    let parola = frase.split(" ");
    let parolaPiuLunga = "";
    for (let i = 0; i < parola.length; i++) {
        if (parola[i].length > parolaPiuLunga.length) parolaPiuLunga = parola[i];
    }
    return parolaPiuLunga;
}

console.log(es4("mi chiamo Massimiliano"));

/* ----------------------------------- ES5 ---------------------------------- */
//Dall’html recupera una stringa e ruotala da sinistra verso destra rimuovendo una lettera dal fondo ed inserendola all’inizio, deve essere visibile l’animazione. 
const es5 = () => {
    let elemento = document.getElementById("ruotalaStringa");
    let testo = elemento.innerText;
    setInterval(() => {
        testo = testo.charAt(testo.length - 1) + testo.slice(0, testo.length - 1);
        elemento.innerText = testo;
    }, 500);
}

es5();

/* ----------------------------------- ES6 ---------------------------------- */
//Scrivi una funzione che stampa, uno a uno, gli elementi di un array ogni qual volta viene premuto un pulsante nella pagina

const es6 = (array,idDiBottone) => {
    let counter = 0;
    let bottone = document.getElementById(idDiBottone);
    bottone.addEventListener('click', () => {
        console.log(counter + ' ' + array[counter]);
        if (counter < array.length - 1) {
            counter++;
        } else {
            counter = 0;
        }
    });
}
let arrayDiNome = ['Dario', 'Milo', 'Oscar', 'Davide'];
es6(arrayDiNome,'clicami');

/* ----------------------------------- ES7 ---------------------------------- */
//Scrivi una funzione javascript che rimuova gli elementi duplicati da un array.
const es7 = (array) => {
    let nonDuplicatiArray=[];
    array.forEach(element => {
        nonDuplicatiArray.indexOf(element) === -1 ? nonDuplicatiArray.push(element) : null;
    });
    console.log(nonDuplicatiArray);
}
let arrayDiNome2 = ['Dario', 'Milo', 'Oscar', 'Davide','Dario', 'Milo', 'Oscar', 'Davide'];
es7(arrayDiNome2);

/* ----------------------------------- ES8 ---------------------------------- */
//Dati due array, calcolare la somma degli elementi presenti nello stesso indice. Utilizza le funzioni. Esempio: array1 = [1,0,2,4,6] array2 = [0,4,5,8,7] Output = [1,4,7,12,13]
const es8 = (array1, array2) => {
    let sommaArray = [];
    for (let i = 0; i < array1.length; i++) {
        sommaArray.push(array1[i] + array2[i]);
    }
    console.log(sommaArray);
}

let array1 = [1, 0, 2, 4, 6];
let array2 = [0, 4, 5, 8, 7];
es8(array1, array2);

/* ----------------------------------- ES9 ---------------------------------- */
//Dati due numeri: num1 = 5; num2 = 9; stampa in console il risultato delle 4 operazioni matematiche di base quando premo un pulsante "Calcola" nella pagina html. Ogni operazione avrà una sua funzione dedicata.
const es9 = (num1, num2, idDiBottone) => {
    let bottone = document.getElementById(idDiBottone);
    bottone.addEventListener('click', () => {
        console.log(`Somma: ${num1 + num2}`);
        console.log(`Sottrazione: ${num1 - num2}`);
        console.log(`Moltiplicazione: ${num1 * num2}`);
        console.log(`Divisione: ${num1 / num2}`);
    });
}

let num1 = 5;
let num2 = 9;
es9(num1, num2, 'calcola');