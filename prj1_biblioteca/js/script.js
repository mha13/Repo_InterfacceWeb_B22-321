let liberi = ["Don Chisciotte della Mancia","Harry Potter","Il Piccolo Principe","Il Signore degli Anelli","Le avventure di Pinocchio","Le due città"];
let autori = ["Miguel de Cervantes","J.K. Rowling","Antoine de Saint-Exupéry","J.R.R. Tolkien","Carlo Collodi","Charles Dickens"];

let mieiFacoriti = ["L'alchimista","Le quaranta porte"];

for (let i = 0 ; i < liberi.length ; i++ ){
    document.writeln(`<p>${liberi[i]} - ${autori[i]}</p>`);
}

document.writeln(`<h3>Il mio favoriti</h3>`);
mieiFacoriti.sort();
mieiFacoriti.forEach(mioFacorito => {
    document.writeln(`<p>${mioFacorito}</p>`);
});

