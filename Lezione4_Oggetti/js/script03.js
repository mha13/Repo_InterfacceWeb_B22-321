let auto = {
    neme: "",
    cognome: "",
    eta: 0,
    corso: "",

    iscrivereStudente(nome, cognome, eta, corso) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corso = corso;
        return "Studente: " + this.nome + " " + this.cognome;
    },

    informazioniDiStudente(nome, cognome, eta, corso) {
        this.nome = nome;
        this.cognome = cognome;
        this.eta = eta;
        this.corso = corso;
        return "Informazione di studente: " + this.eta + " " + this.corso;
    }
}

function agguingreStudente(){
    let nome = document.getElementById("nome").value;
    let cognome = document.getElementById("cognome").value;
    let eta = document.getElementById("eta").value;
    let corso = document.getElementById("corso").value;

    let demo = document.getElementById("demo");
    if(nome === "" || cognome === "" || eta === "" || corso === ""){
        demo.innerHTML = "<p>Compila tutti i campi!</p>";
        return;
    }

    demo.innerHTML = "<p>" + auto.iscrivereStudente(nome, cognome, eta, corso) + "</p>";
    demo.innerHTML += "<p>" + auto.informazioniDiStudente(nome, cognome, eta, corso) + "</p>";  
    document.getElementById("nome").value = "";
    document.getElementById("cognome").value = "";
    document.getElementById("eta").value = "";
    document.getElementById("corso").value = "";
}

let btn = document.getElementById("btn");
btn.addEventListener("click", agguingreStudente);