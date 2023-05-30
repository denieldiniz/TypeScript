//------------------------------------------------------
// 4 - Parâmetros tipados


function soma(x: number, y: number) {
    console.log(x + y);
}
// soma(5, 4);

//------------------------------------------------------
// 5 - Retorno de função

function ola(nome: string): string {

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

function passarPessoa(pessoa: { nome: string, sobrenome: string }) {
    console.log(`O nome é ${pessoa.nome}`);
    console.log(`O sobrenome é ${pessoa.sobrenome}`);
}

// passarPessoa({nome: 'Deniel', sobrenome:  'Rocha Diniz'});


//------------------------------------------------------
// 8 - Propriedades opcionais

function mostrarPessoa(pessoa: { nome: string, sobrenome?: string }) {

    if (pessoa.sobrenome == undefined) {
        console.log(`O nome é ${pessoa.nome} \n`);

    } else {
        console.log(`O nome é ${pessoa.nome}`);
        console.log(`O sobrenome é ${pessoa.sobrenome} \n`);
    }

}

// mostrarPessoa({nome: 'Deniel', sobrenome: 'Rocha Diniz'});
// mostrarPessoa({nome: 'Deniel'});


//------------------------------------------------------
// {
//  =>
//  ==
//  ===
//  <>
//  <=>
//  >>   00000   ??? Ii lL
//  <<

// }

//------------------------------------------------------
// 10 - Union type

function dizerIdade(idade: number | string) {
    console.log(`A idade é ${idade}`);
}

// dizerIdade(22);


//------------------------------------------------------
// 11 - Avançado em union types




//------------------------------------------------------
// 12 - Type alias

type ID = string | number;  // criação do alias

function showId(id: ID) {
    console.log(`O ID é: ${id}`);

}

// showId('Primeiro');
// showId(232);

//------------------------------------------------------
// 13 - Interfaces
// interface coordenada

// funcao mostrarCoordenada

// instanciar uma coordenada

// mostrar coordenada instanciada usando a funcao mostrarCoordenada

interface Coordenada {
    x: number;
    y: number;
    z: number;
}

interface Coordenada {
    nome: string;
}

function mostrarCoordenada(lugar: Coordenada) {
    console.log(`A coordenada X de ${lugar.nome} é ${lugar.x}`);
    console.log(`A coordenada Y de ${lugar.nome} é ${lugar.y}`);
    console.log(`A coordenada Z de ${lugar.nome} é ${lugar.z}`);
}

const nossaCasa: Coordenada = {
    x: 10,
    y: 15,
    z: 7,
    nome: 'casa'
}

// mostrarCoordenada(nossaCasa);
//------------------------------------------------------
// 14 - Alias X Interface






//------------------------------------------------------
// 15 - Literal Types

function lampada(status: 'ligada' | 'desligada') {
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




