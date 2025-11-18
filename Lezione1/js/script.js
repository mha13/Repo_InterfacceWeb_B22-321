let nomeUser = "Hossein";
let cognomeUser = "Abdollahi";
let etaUser = 28;
let presenza = true;

// cambia il valore di alcune variabili
etaUser = 25;
nomeUser = prompt("Come ti chiami?");

// stamp una miscela di variablili, ho concatenato dello stinghe 
let presentazione = "Caio, mi chiamo " + nomeUser + " " + cognomeUser + " e ho " + etaUser + " anni."

console.log(presentazione);
console.log(typeof presentazione);

// scrivo la presentazione nella pagina com metodo documnet.write()
document.writeln("<h2>" + presentazione + "</h2>");

// facciamo un poco di matematica
let incassi = prompt("Quanto hai incassato qus'anno");
const IVA = 0.22;
// ATT : le costanti non possono essere assolutamente riassegnate
// IVA = 0.2;

let guadagno = incassi - (incassi * IVA);
let costaIva = incassi * IVA;

let ressconto = "<p> Quest'anno hai incassato "+ incassi + " </p><p> Il tuo guadagno finale e stato di " + guadagno + "<p> Il costa totale dell'IVA e : "+ costaIva;

document.writeln(ressconto);