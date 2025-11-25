// while e do-while. parliano di cicli idefiniti
//esempio numero segreto

const NUMERO_SEGRETO = 7;
let numeroUtente = 0;
let tentativi = 0;

while (numeroUtente != NUMERO_SEGRETO) {
    numeroUtente = prompt("Inserici il numero segreto per accedere");
    tentativi++;
}
console.log("Bravo, sei riuscito ad entrare con " + tentativi + " tentativi");

console.log("=== Tabellina del 7 ===");
let i = 1;//variabili di suppoeti backup
let msg = "";

// il whilte esegue il codice nel suo body fintanto che e TRUE la condizione
while(i <= 10){
    let risultato = i * 7;
    msg += i + " x 7 =" + risultato+"\n";
    i++;
}
console.log(msg);

// do-while: prima esegue qualcosa poi controlla con un while
numeroUtente = 0;
do {
    numeroUtente=prompt("Inserici il numero segreto");
} while (numeroUtente != NUMERO_SEGRETO);
console.log("Hai di nuovo travota il numero segreto")