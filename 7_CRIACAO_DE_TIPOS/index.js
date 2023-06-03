"use strict";
//------------------------------------------------------
// 1 - Generics
function mostrarString(entrada) {
    return `o valor dado é "${entrada}".`;
}
// console.log(mostrarString("teste"));
//------------------------------------------------------
// 2 - Constraint em generic
function descreverProduto(produto) {
    return `O produto se chama ${produto.nome}.`;
}
let item1 = { nome: "telefone celular", geracao: 3 };
// console.log(descreverProduto(item1));
let item2 = { nome: "telemóvel particular" };
const primeiroCarro = { nome: "chevete", cor: "grafite", bluetooth: false, estoque: 10 };
const headphone1 = { nome: "KZ", cor: "preto", bluetooth: 5.0, estoque: "loja 5" };
// console.log(primeiroCarro);
// console.log(headphone1);
//------------------------------------------------------
// 4 - Type parameters
function getKey(obj, key) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    SSD: '2TB',
    RAM: '512GB'
};
function mostrarDadoDaPessoa(pessoa, key) {
    return `${pessoa[key]}`;
}
const primeiraPessoa = {
    nome: "Deniel",
    idade: 41,
    adulto: true
};
console.log(mostrarDadoDaPessoa(primeiraPessoa, "nome"));
console.log(mostrarDadoDaPessoa(primeiraPessoa, "idade"));
console.log(mostrarDadoDaPessoa(primeiraPessoa, "adulto"));
//------------------------------------------------------
// 6 - 
