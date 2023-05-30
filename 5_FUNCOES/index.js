"use strict";
//------------------------------------------------------
// 1 - void
function semRetorno() {
    console.log("Essa função não tem retorno.");
}
// semRetorno();
//------------------------------------------------------
// 2 - callback como argumento
function saudacao(nome) {
    return (`Olá ${nome}, seja bem vindo(a)!`);
}
let msg = saudacao("Cocada");
function preSaudacao(f, nomeUsuario) {
    console.log("Preparando saudação.");
    const saudacao = f(nomeUsuario);
    console.log(saudacao);
}
// preSaudacao(saudacao, "Isa Dionne");
//------------------------------------------------------
// 3 - generic function
function primeiroItem(arr) {
    return arr[0];
}
// console.log(primeiroItem([12, 2, 3, 4, 5]));
// console.log(primeiroItem(["Den", "Coc", "Ziz"]));
// - - - - - - - - - - -
function unirObj(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
let nome = { nome: "Deniel" };
let sobreNome = { sobrenome: "Rocha Diniz" };
let nomeCompleto = unirObj(nome, sobreNome);
// console.log(nomeCompleto);
// console.log(nomeCompleto["nome"]);
// console.log(nomeCompleto["sobrenome"]);
//------------------------------------------------------
// 4 - constraints
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
//------------------------------------------------------
