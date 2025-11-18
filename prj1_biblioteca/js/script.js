let liberi = ["Harry Potter","Il Piccolo Principe","Il Signore degli Anelli","Le avventure di Pinocchio","Le due città","Don Chisciotte della Mancia"];
let autori = ["J.K. Rowling","Antoine de Saint-Exupéry","J.R.R. Tolkien","Carlo Collodi","Charles Dickens","Miguel de Cervantes"];

let nuovoArray=[];
for (let i = 0 ; i < liberi.length ; i++ ){
    nuovoArray.push(liberi[i]+" - "+autori[i]);
}
nuovoArray.sort();
nuovoArray.forEach(nuovoItem => {
    document.writeln(`<p>${nuovoItem}</p>`);
});
//oltre metodo
console.log(liberi.map((libero,index)=>{return libero+" - "+autori[index]}));

let mieiFacoriti = ["L'alchimista","Le quaranta porte"];
document.writeln(`<h3>Il mio favoriti</h3>`);
mieiFacoriti.sort();
mieiFacoriti.forEach(mioFacorito => {
    document.writeln(`<p>${mioFacorito}</p>`);
});

