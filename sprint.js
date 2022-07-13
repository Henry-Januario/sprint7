//Importando a lib que possibilita receber input direto do Terminal
import readlineSync from "readline-sync";

//Definindo array onde serão inseridos os itens do input
let propriedades = [];

//Iniciando looping
while (true) {
    
    //Constante que irá perguntar ao usuário, utilizando a lib
    const input = readlineSync.question('Insira uma propriedade CSS:');
    
    //Saída do looping
    if (input.toUpperCase() === 'SAIR') {
        break;
    }

    //Validação para que se o usuário não escrever nada, não apareça no array final o campo vazio
    if (input != ''){
        //Push insere o item do input no array propriedades
        propriedades.push(input);
    }
}

//O método sort() ordena os elementos do array e retorna o próprio array.
const organiza = propriedades.sort ((a,b)=>{
    //O sort() por padrão ordena de forma ascendente o valor UTF-16. 
    //Essa linha serve para que não haja diferença na organização entre palavras com a letra maiúscula e minúscula, já que o valor UTF-16 de "A" = 65 e "a" = 97
    return a.localeCompare(b)
})

//Mostra resultado no terminal
console.log(organiza);