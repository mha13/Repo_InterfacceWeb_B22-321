
/* ---------------------------------- ES 1 ---------------------------------- */
// Dichiara una funzione con all'interno una variabile e stampa il suo valore.
// Dichiara una variabile globale. Dichiara una funzione che stampa il valore di questa variabile. Sposta il richiamo della funzione prima e dopo la variabile per capire cosa accade.

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
// Scrivi una funzione javascript che accetta due argomenti: una stringa e una lettera. La funzione conterà il numero di occorrenze della specifica lettera nella stringa

/**
 * 
 * @param {Srting} stringa 
 * @param {Srting} lettera 
 */
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
console.log(es3(es2));

/* ----------------------------------- ES4 ---------------------------------- */
// Scrivi una funzione javascript che accetta una stringa come parametro e trova la parola più lunga all’interno della frase. Es (mi chiamo Massimiliano -> Massimiliano).

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
        testo = testo.charAt(testo.length - 1) + testo.slice(0, testo.length - 1); // da sinistra verso destra
        // testo = testo.slice(1, testo.length ) + testo.charAt(0) ; // da destra verso sinistra
        elemento.innerText = testo;
    }, 500);
}

es5();

/* ----------------------------------- ES6 ---------------------------------- */
// Scrivi una funzione che stampa, uno a uno, gli elementi di un array ogni qual volta viene premuto un pulsante nella pagina

const es6 = (array, idDiBottone) => {
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
es6(arrayDiNome, 'clicami');

/* ----------------------------------- ES7 ---------------------------------- */
// Scrivi una funzione javascript che rimuova gli elementi duplicati da un array.
const es7 = (array) => {
    let nonDuplicatiArray = [];
    array.forEach(element => {
        nonDuplicatiArray.indexOf(element) === -1 ? nonDuplicatiArray.push(element) : null;
    });
    console.log(nonDuplicatiArray);
}
let arrayDiNome2 = ['Dario', 'Milo', 'Oscar', 'Davide', 'Dario', 'Milo', 'Oscar', 'Davide', 'Hossein'];
es7(arrayDiNome2);

/* ----------------------------------- ES8 ---------------------------------- */
// Dati due array, calcolare la somma degli elementi presenti nello stesso indice. Utilizza le funzioni. Esempio: array1 = [1,0,2,4,6] array2 = [0,4,5,8,7] Output = [1,4,7,12,13]

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

/* ----------------------------------- ES10 ---------------------------------- */
// Crea i seguenti campi input in html: 
// - nome
// - cognome
// - data di Nascita
// - età
// - corso frequentato

// Con un pulsante mostra info recupera tutte le informazioni dai campi e stampale sotto in un div come se volessi presentare l'utente che ha appena compilato i campi.
// Attenzione: crea una funzione che accetta in ingresso tanti parametri per quanti sono i campi input creati

const es10 = (idDiBottone, ...idsDiInput) => {
    let bottone = document.getElementById(idDiBottone);
    bottone.addEventListener('click', () => {
        let risultatoDiv = document.getElementById("risultato");
        let risultatoTesto = "Le informazioni inserite sono:<br>";
        idsDiInput.forEach(id => {
            let inputElement = document.getElementById(id);
            risultatoTesto += inputElement.value + '<br>';
        });
        risultatoDiv.innerHTML = risultatoTesto;
    });
}

es10('mostraInfo', 'nome', 'cognome', 'dataDiNascita', 'eta', 'corsoFrequentato');

/* ----------------------------------- ES11 ---------------------------------- */
// Scrivi una funzione calcolaAreaRettangolo(base, altezza) che restituisce l'area di un rettangolo o il perimetro in base al pulsante cliccato.

const es11 = (base, altezza, tipoCalcolo) => {
    if (tipoCalcolo === 'area') {
        return base * altezza;
    } else if (tipoCalcolo === 'perimetro') {
        return 2 * (base + altezza);
    } else {
        return null;
    }
}

console.log(es11(5, 10, 'area'));

/* -------------------------------- ### Es 12 ------------------------------- */
// Scrivere un programma per trovare il valor più vicino a 100 tra una coppia di numeri forniti, se sono uguali ritorna un avviso.

const es12 = (num1, num2) => {
    if (num1 === num2) {
        return "I numeri sono uguali!";
    }
    let diff1 = 100 - num1;
    let diff2 = 100 - num2;
    let risulto = "";
    if (diff1 < diff2) {
        risulto = "Tra " + num1 + " e " + num2 + ": il valor più vicino a 100 é " + num1;
    } else {
        risulto = "Tra " + num1 + " e " + num2 + ": il valor più vicino a 100 é " + num2;
    }
    return risulto
}
console.log(es12(95, 90));

/* -------------------------------- ### Es 13 ------------------------------- */
// Scrivi un programma che accetta una frase come parametro e imposta in upper-case l’iniziale di ogni singola parola
// Es: oggi andrò a lezione ---> Oggi Andrò A Lezione

/**
 * 
 * @param {String} parola 
 * 
 */
const es13 = (frase) => {
    parole = frase.split(" ");
    let NuoviForma = [];
    parole.forEach(parola => {
        NuoviForma.push(parola.charAt(0).toUpperCase() + parola.slice(1, parola.length));
    });
    return NuoviForma.join(" ")
}
console.log(es13("oggi andrò a lezione"));

/* -------------------------------- ### Es 14 ------------------------------- */
// Scrivi un programma che controlla se un dato intero si trova tra 20 e 100 o tra 20 e 400
const es14 = (num) => {
    if ((num >= 20 && num <= 100) || (num >= 20 && num <= 400)) {
        return num + " è intero tra 20 e 100 o tra 20 e 400";
    } else {
        return num + " non è intero tra 20 e 100 o tra 20 e 400";
    }
}
console.log(es14(650));

