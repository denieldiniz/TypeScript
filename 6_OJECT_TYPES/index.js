"use strict";
//------------------------------------------------------
// 1 - Tipo de objeto para função com interface
function mostrarProduto(produto) {
    if (produto.disponivel == true) {
        console.log(`Item ${produto.nome} custa ${produto.preco}.`);
    }
    else {
        console.log(`Item ${produto.nome} não está disponível.`);
    }
}
const camiseta = {
    nome: "regata branca",
    preco: 29.90,
    disponivel: true
};
const short = {
    nome: "bermuda jeans",
    preco: 49.90,
    disponivel: false
};
function mostrarDados(usuario) {
    console.log(`\nNome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    if (usuario.estadoCivil != undefined) {
        if (usuario.estadoCivil == true) {
            console.log(`Estado civíl: Casado`);
        }
        else {
            console.log(`Estado civíl: Solteiro`);
        }
    }
}
const pessoa = { nome: "Deniel", idade: 41, estadoCivil: true };
const pessoa2 = { nome: "José", idade: 15, estadoCivil: false };
const pessoa3 = { nome: "Maria", idade: 46 };
function mostratCarro(automovel) {
    console.log(`${automovel.modelo} possui ${automovel.rodas} rodas.`);
}
const vw = { modelo: "fusca", rodas: 4 };
// mostratCarro(vw);
// vw.modelo = "Gol";
// // vw.rodas = 3;  // nao permite atribuir por ser readonly
// mostratCarro(vw);
//------------------------------------------------------
// 4 - Index Signature
//------------------------------------------------------
// 5 -  
//------------------------------------------------------
// 6 - 
