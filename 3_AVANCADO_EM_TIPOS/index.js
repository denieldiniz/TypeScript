"use strict";
//------------------------------------------------------
// 4 - Parâmetros tipados
function soma(x, y) {
    console.log(x + y);
}
// soma(5, 4);
//------------------------------------------------------
// 5 - Retorno de função
function ola(nome) {
    return (`Oooopa ${nome}!`);
}
// console.log(ola('Deniel'));
//------------------------------------------------------
// 6 - Função anônima
setTimeout(() => {
    // console.log('Função anônima.');
}, 1800);
//------------------------------------------------------
// 7 - Tipos de objetos
function passarPessoa(pessoa) {
    console.log(`O nome é ${pessoa.nome}`);
    console.log(`O sobrenome é ${pessoa.sobrenome}`);
}
// passarPessoa({nome: 'Deniel', sobrenome:  'Rocha Diniz'});
//------------------------------------------------------
// 8 - Propriedades opcionais
function mostrarPessoa(pessoa) {
    if (pessoa.sobrenome == undefined) {
        console.log(`O nome é ${pessoa.nome} \n`);
    }
    else {
        console.log(`O nome é ${pessoa.nome}`);
        console.log(`O sobrenome é ${pessoa.sobrenome} \n`);
    }
}
// mostrarPessoa({nome: 'Deniel', sobrenome: 'Rocha Diniz'});
// mostrarPessoa({nome: 'Deniel'});
//------------------------------------------------------
//------------------------------------------------------
// 10 - Union type
function dizerIdade(idade) {
    console.log(`A idade é ${idade}`);
}
function showId(id) {
    console.log(`O ID é: ${id}`);
}
function mostrarCoordenada(lugar) {
    console.log(`A coordenada X de ${lugar.nome} é ${lugar.x}`);
    console.log(`A coordenada Y de ${lugar.nome} é ${lugar.y}`);
    console.log(`A coordenada Z de ${lugar.nome} é ${lugar.z}`);
}
const nossaCasa = {
    x: 10,
    y: 15,
    z: 7,
    nome: 'casa'
};
// mostrarCoordenada(nossaCasa);
//------------------------------------------------------
// 14 - Alias X Interface
//------------------------------------------------------
// 15 - Literal Types
function lampada(status) {
    console.log(`A lâmpada está ${status}`);
}
lampada('desligada');
lampada('ligada');
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
