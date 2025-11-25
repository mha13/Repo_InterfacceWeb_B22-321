let numeriEstratti = [];

while (numeriEstratti.length < 5) {
    let numeroEstratto= Math.ceil(Math.random() * 90);
    if(numeriEstratti.indexOf(numeroEstratto)== -1){
        numeriEstratti.push(numeroEstratto);
    }
}
console.log(numeriEstratti);

let numeriEstratti2 = [];

for (let i = 0; i < 50; i++) {
    let numeroEstratto= Math.ceil(Math.random() * 90);
    if(numeriEstratti2.indexOf(numeroEstratto)== -1){
        numeriEstratti2.push(numeroEstratto);
    }else{
        i--; //fatti di nuovo lo stesso giro
    }
}

console.log(numeriEstratti2);

