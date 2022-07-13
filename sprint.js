import readlineSync from "readline-sync";

let propriedades = [];

while (true) {
    
    const input = readlineSync.question('Insira uma propriedade CSS:');
    
    if (input.toUpperCase() === 'SAIR') {
        break;
    }
    if (input != ''){
        propriedades.push(input);
    }
}

const organiza = propriedades.sort ((a,b)=>{
    return a.localeCompare(b)
})

console.log(organiza);