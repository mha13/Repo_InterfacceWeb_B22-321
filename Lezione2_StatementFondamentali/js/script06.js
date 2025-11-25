// lo switch permette di controllare direttamente il valore di una variabile

let msg = "";

let livelloGioco = 0;

switch (livelloGioco) {
    case "uno":
    case 1:
        msg = "Caio giocatore, sei nel primo livello";
        break;
    case "due":
    case 2:
        msg = "Caio giocatore, sei nel secondo livello";
        break;
    case "tre":
    case 3:
        msg = "Caio giocatore, sei nel ultima livello";
        break;
    default:
        msg = "Caio giocatore, non sei in nessun livello";
        break;
}

let giornoSettimana = "Martedi";
let feed = "";

switch(giornoSettimana){
    case "Lunedi":
        feed = "Il lunedi e tragico per tutti";
        break;
    case "Venerdi":
        feed = "finalemente sta finendo la settimana";
        break;
    default:
        feed = "non capisco il giorno che mi stai passando";
        break;
}