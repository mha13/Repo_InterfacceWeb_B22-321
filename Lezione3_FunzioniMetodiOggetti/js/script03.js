function salutaStudente() {
    console.log("Ciao Hossein!");
}
function saluteDocente(nomeDocente) {
    console.log("Ciao Docente! "+ nomeDocente);
}
//Recpero il pulsante dall' HTML 
let btn1 = document.getElementById("btn1");

//Associo l'evento click al pulsante
btn1.addEventListener("click", salutaStudente);

let btn2 = document.getElementById("btn2");
btn2.addEventListener("click", ()=>{
    let nomeDocente = "Dario";
    saluteDocente(nomeDocente);
});