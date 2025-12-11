//Crea una classe "Azienda" avente nome e settore (metodi da creare: stampaListaDipendenti(),toString()). La classe azienda dovrà avere dei dipendenti, oggetti di tipo Dipendente (nome, cognome, matricola, stipendio, calcolStipendio(), toString())

class Dipendente {
    constructor(nome, cognome, matricola, stipendio) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.stipendio = stipendio;
    }

    calcolStipendio = () => {
        return this.stipendio * 85 / 100;
    }

    toString() {
        return `Dipentede: ${this.nome} ${this.cognome} ${this.matricola} ${this.stipendio} ${this.calcolStipendio()}`
    }
}
/**
 * @param {String} nome 
 * @param  {String} settore
 */
class Azienda {
    constructor(nome, settore) {
        this.nome = nome;
        this.settore = settore;
        this.dipendenti = [];
    }
    stampaListaDipendenti() {
        let lista = "";
        this.dipendenti.forEach(thisdipendente => {
           lista += `dipentede: ${thisdipendente.nome} ${thisdipendente.cognome} ${thisdipendente.matricola} ${thisdipendente.stipendio} ${thisdipendente.calcolStipendio()}\n`;
        });
        return lista;
    }
    toString(){
        return `Azienda: ${this.nome} - ${this.settore} - Numero Dipendenti: ${this.dipendenti.length}`;
    }
    aggiungiDipendente(dipendente){
        this.dipendenti.push(dipendente);
    }
}

let azienda = new Azienda('Ro technology', 'Informatica');
let dipendente1 = new Dipendente('Mario', 'Rossi', '12345', 2000);
console.log(dipendente1.toString());
let dipendente2 = new Dipendente('Luigi', 'Verdi', '67890', 2500);
azienda.aggiungiDipendente(dipendente1);
azienda.aggiungiDipendente(dipendente2);

console.log(azienda.toString());
console.log(azienda.stampaListaDipendenti());