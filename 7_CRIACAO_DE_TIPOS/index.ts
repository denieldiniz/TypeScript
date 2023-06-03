//------------------------------------------------------
// 1 - Generics

function mostrarString<T>(entrada: T): string {

    return `o valor dado é "${entrada}".`
    
}

// console.log(mostrarString("teste"));

//------------------------------------------------------
// 2 - Constraint em generic

function descreverProduto<T extends {nome: string}> (produto: T): string {
    return `O produto se chama ${produto.nome}.`;
}

let item1 = {nome: "telefone celular", geracao: 3};
// console.log(descreverProduto(item1));

let item2 = {nome: "telemóvel particular"};
// console.log(descreverProduto(item2));

//------------------------------------------------------
// 3 - Generics com interface

interface Produto<T, U, Q> {
    nome: string;
    cor: T;
    bluetooth: U;
    estoque: Q;
}

type carro      = Produto<string, boolean, number>;
type headPhone  = Produto<string, number, string>;


const primeiroCarro: carro  = {nome: "chevete",cor: "grafite",bluetooth: false,estoque: 10};
const headphone1: headPhone = {nome: "KZ", cor: "preto", bluetooth: 5.0, estoque: "loja 5"};

// console.log(primeiroCarro);
// console.log(headphone1);

//------------------------------------------------------
// 4 - Type parameters

function getKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${String(key)} está presente no objeto e tem o valor de ${obj[key]}`;
}

const server = {
    SSD: '2TB',
    RAM: '512GB'
}

// console.log(getKey(server, "SSD"));
// console.log(getKey(server, "nome"));

//------------------------------------------------------
// 5 -  Keyof type operator

// criar um tipo
// criar um tipo keyof
// criar função que exibe o valor da chave ( do tipo do objeto keyof criado anteriormente) passada como parametro, junto com o objeto
// insanciar o promeiro tipo
// chamar a função passando o objeto criado e seu atributo/chave

type Pessoa = {nome: string, idade: number, adulto: boolean}

type C = keyof Pessoa;

function mostrarDadoDaPessoa(pessoa: Pessoa, key: C): string {
    return `${pessoa[key]}`
}

const primeiraPessoa = {
    nome: "Deniel", 
    idade: 41,
    adulto: true
}

console.log(mostrarDadoDaPessoa(primeiraPessoa, "nome"));
console.log(mostrarDadoDaPessoa(primeiraPessoa, "idade"));
console.log(mostrarDadoDaPessoa(primeiraPessoa, "adulto"));

//------------------------------------------------------
// 6 - 
