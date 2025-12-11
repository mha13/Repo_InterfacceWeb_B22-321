//Crea una classe "Azienda" avente nome e settore (metodi da creare: stampaListaDipendenti(),toString()). La classe azienda dovrà avere dei dipendenti, oggetti di tipo Dipendente (nome, cognome, matricola, stipendio, calcolStipendio(), toString())
/**
 * @param {String} nome 
 * @param  {String} cognome
 * @param  {Number} matricola
 * @param  {String} ruolo
 */
class Dipendente {
    constructor(nome, cognome, matricola, ruolo) {
        this.nome = nome;
        this.cognome = cognome;
        this.matricola = matricola;
        this.ruolo = ruolo;
        this.stipendioBase = 1200;
    }

    calcolStipendio = () => {
        let StipendioFinale = 0;
        switch (this.ruolo.toLowerCase()) { 
            case 'junior':
                StipendioFinale = this.stipendioBase * 1.1;
                break;
            case 'senior':
                StipendioFinale = this.stipendioBase * 1.3;
                break;
            case 'manager':
                StipendioFinale = this.stipendioBase * 1.5;
                break;
            default:
                StipendioFinale = this.stipendioBase;
                break;
        }
        return StipendioFinale;
    }

    toString() {
        return `Dipentede: ${this.nome} ${this.cognome} ${this.matricola} ${this.ruolo} ${this.calcolStipendio()}`
    }
}
/**
 * @param {String} nome 
 * @param  {String} settore
 * @param  {Dipendente[]} dipendenti
 */
class Azienda {
    constructor(nome, settore, dipendenti) {
        this.nome = nome;
        this.settore = settore;
        this.dipendenti = dipendenti;
    }
    stampaListaDipendenti() {
        let lista = "";
        this.dipendenti.forEach(dipendente => {
           lista += `dipentede: ${dipendente.nome} ${dipendente.cognome} ${dipendente.matricola} ${dipendente.ruolo} ${dipendente.calcolStipendio()}\n`;
        });
        return lista;
    }
    toString(){
        return `Azienda: ${this.nome} - ${this.settore} - Numero Dipendenti: ${this.dipendenti.length}\n`+ this.stampaListaDipendenti();
    }
    aggiungiDipendente(dipendente){
        this.dipendenti.push(dipendente);
    }
}


let dipendente1 = new Dipendente('Mario', 'Rossi', 12345, 'junior');
console.log(dipendente1.toString());
let dipendente2 = new Dipendente('Luigi', 'Verdi', 67890, 'senior');
console.log(dipendente2.toString());

let azienda = new Azienda('Ro technology', 'Informatica', [dipendente1, dipendente2]);
console.log(azienda.toString());