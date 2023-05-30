"use strict";
//------------------------------------------------------
// 1 - Type guard
function soma(a, b) {
    if (typeof (a) === 'string' && typeof (b) === 'string') {
        console.log(`A soma é ${parseFloat(a) + parseFloat(b)}.`);
    }
    else if (typeof (a) === 'number' && typeof (b) === 'number') {
        console.log(`A soma é ${a + b}.`);
    }
    else {
        console.log('Não é possível realizar a operação.');
    }
}
// soma(14, 34);
// soma('24', '33');
// soma(20, '33');
//------------------------------------------------------
// 2 - Checando se valor existe
function calculadora(numeros, operacao) {
    if (operacao === undefined) {
        console.log('Informe a operação desejada');
    }
    else if (operacao === 'soma') {
        const soma = numeros.reduce((i, total) => i + total);
        console.log(`A soma dos valores é ${soma}`);
    }
    else if (operacao === 'subtracao') {
        const subtracao = numeros.reduce((i, total) => i - total);
        console.log(`A subtração dos valores é ${subtracao}`);
    }
    else if (operacao === 'multiplicacao') {
        const multiplicacao = numeros.reduce((i, total) => i * total);
        console.log(`A multiplicação dos valores é ${multiplicacao}`);
    }
    else if (operacao === 'divisao') {
        const divisao = numeros.reduce((i, total) => i / total);
        console.log(`A divisão dos valores é ${divisao}`);
    }
}
class teste {
}
// calculadora([7, 3, 2]);
// calculadora([7, 3, 2], 'soma');
// calculadora([7, 3, 2], 'subtracao');
// calculadora([7, 3, 2], 'multiplicacao');
// calculadora([7, 3, 2], 'divisao');
//------------------------------------------------------
// 3 - Instance of
// Cria classe pai
// Cria classe filho
// Instancia um objeto de cada
// Criar função que identifica o tipo de cada objeto e aplica as permissões correspondetes
class Usuario {
    constructor(nome) {
        this.nome = nome;
    }
}
class SuperUsuario extends Usuario {
    constructor(nome) {
        super(nome);
    }
}
const cocadinha = new Usuario('Zizi');
const cocada = new SuperUsuario('Isa');
// console.log(cocadinha);
// console.log(cocada);
function boasVindas(usuarioLogado) {
    if (usuarioLogado instanceof SuperUsuario) {
        console.log(`Olá ${usuarioLogado.nome}, gostaria de acessar o painel administrativo?`);
    }
    else if (usuarioLogado instanceof Usuario) {
        console.log(`Olá ${usuarioLogado.nome}, seja bem vindo(a)!`);
    }
}
// boasVindas(cocadinha);
// boasVindas(cocada);
//------------------------------------------------------
// 4 - Operador in
class Cachorro {
    constructor(nome, raca) {
        this.nome = nome;
        if (raca != undefined) {
            this.raca = raca;
        }
    }
}
const sadan = new Cachorro('Sadan', 'vira lata');
const branco = new Cachorro('Branco');
// console.log(sadan);
function detalharCachorro(cachorro) {
    if ('raca' in cachorro) {
        console.log(`A raça é ${cachorro.raca}.`);
    }
    else {
        console.log(`O chachorro não possui raça definida.`);
    }
}
// detalharCachorro(sadan);
// detalharCachorro(branco);
//------------------------------------------------------
// Desafio 3
// receve um boolean e um number (1 a 5 estrelas) narrowing
// uma mensagem para cada nota
// false se não deixar review com mensagem também
class Avaliacao {
    constructor(estrelas) {
        if (estrelas != undefined) {
            this.estrelas = estrelas;
        }
    }
}
const avalDeniel = new Avaliacao(4);
const avalCocada = new Avaliacao();
const avaliacao3 = new Avaliacao(3);
// console.log(avalDeniel);
function pontuar(avaliacao) {
    if ('estrelas' in avaliacao) {
        console.log(`Usuário avaliou com ${avaliacao.estrelas} estrelas.`);
    }
    else {
        console.log("Esse usuário não avaliou.");
    }
}
pontuar(avalDeniel);
pontuar(avalCocada);
pontuar(avaliacao3);
//------------------------------------------------------
// {
//     {
//         {
//             [
//                 [
//                     [
//                         (
//                             (
//                                 ('Olá')
//                             )
//                         )
//                     ]
//                 ]
//             ]
//         }
//     }
// }
//------------------------------------------------------
//------------------------------------------------------
