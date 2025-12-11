//ES1 Scrivi, utilizzando if-statement, un programma per trovare il numero più grande tra 5 numeri. Mostra il risultato in un alert.
let numeri=[]
do{
numeri.push(prompt("insersci nuovo vumero"));
}while(numeri.length<5)
let numeroGrande = numeri[0];
for (let i = 0; i < numeri.length; i++) {
    if (numeri[i] > numeroGrande) {
        numeroGrande = numeri[i];
    }
}
alert("Numero piu grande e " + numeroGrande);

//Es2 Scrivi un loop che itera da 0 a 15. Per ogni ciclo controlla se il numero è pari o dispari. Mostra il risultato in console.
for (let i = 0; i < 15; i++) {
    if (i % 2 == 0) {
        console.log(i + ": pari");
    } else {
        console.log(i + ": dispari");
    }
}

//Es3 Scrivi un programma che itera tutti i numeri interi da 1 a 100. Per i multipli di 3 stamperà “Zoom” mentre per i multipli di 5 stamperà “Boom”. Controlla anche il caso in cui il numero è divisibile sia per 3 sia per 5 stampando “Zoom Boom”.
for (let i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        console.log(i + ": Zoom Boom");
    } else if (i % 3 == 0) {
        console.log(i + ": Zoom");
    } else if (i % 5 == 0) {
        console.log(i + ": Boom");
    } else {
        console.log(i);
    }
}

/* Es4 Scrivi un programma per costruire il seguente pattern.
*  
* *  
* * *  
* * * *  
* * * * * 
*/
for (let index = 0; index < 5; index++) {
    let stella = "";
    for (let i = 0; i <= index; i++) {
        stella += "*";
    }
    console.log(stella + "\n");
}

//Es5 Scrivi un programma che somma i multipli di 3 e multipli di 5 sotto il numero 1000. ris: 233168
let somma=0;
for (let index = 0; index < 1000; index++) {
    if (index % 3 == 0 || index % 5 == 0) {
        somma +=index;
    } 
}
console.log(somma);

// /* Es.6 Scrivi un programma che stampa un pattern come il seguente triangolo, chiedendo all’utente il numero di righe:
// 1
// 12
// 123
// 1234
// 12345
// */
for (let index = 0; index < 4; index++) {
    let numeri = "";
    for (let i = 0; i <= index; i++) {
        numeri += (i+1);
    }
    console.log(numeri + "\n");
}

/* Es.7
Scrivi un programma che stampa il seguente pattern :
1
2 3
4 5 6
7 8 9 10
*/
let counter = 1;
for (let index = 1; index <= 4; index++) {

    let text = '';
    for (let i = 0; i < index; i++) {
        text += counter + " ";
        counter++;
    }
    console.log(text);
}

/* Es.8 Scrivi un programma che stampa il seguente pattern con un numero di righe variabile:
@
@@
@@@
@@@@
@@@@@
@@@@@@
*/
for (let index = 0; index < 6; index++) {
    let stella = "";
    for (let i = 0; i <= index; i++) {
        stella += "@";
    }
    console.log(stella + "\n");
}