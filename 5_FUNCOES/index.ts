//------------------------------------------------------
// 1 - void

function semRetorno(): void {
    console.log("Essa função não tem retorno.");
}

// semRetorno();

//------------------------------------------------------
// 2 - callback como argumento

function saudacao(nome: string): string {
    return(`Olá ${nome}, seja bem vindo(a)!`);
}

let msg = saudacao("Cocada");

function preSaudacao(f: (nome: string) => string, nomeUsuario: string) {
    
    console.log("Preparando saudação.");
    const saudacao = f(nomeUsuario);
    console.log(saudacao);
}

// preSaudacao(saudacao, "Isa Dionne");

//------------------------------------------------------
// 3 - generic function

function primeiroItem<T>(arr: T[]): T {
    return arr[0];
    
}

// console.log(primeiroItem([12, 2, 3, 4, 5]));
// console.log(primeiroItem(["Den", "Coc", "Ziz"]));

// - - - - - - - - - - -

function unirObj<U, T>(obj1: U, obj2: T) {
    return{
    ...obj1,
    ...obj2
    }
}

let nome = {nome: "Deniel"};
let sobreNome = {sobrenome: "Rocha Diniz"};
let nomeCompleto = unirObj(nome, sobreNome);

// console.log(nomeCompleto);
// console.log(nomeCompleto["nome"]);
// console.log(nomeCompleto["sobrenome"]);


//------------------------------------------------------
// 4 - constraints
function maiorNumero<T extends number | string>(num1: T, num2: T): T {
    let maior: T;
    let num1 = this.num1;
    let num2 = this.num2;
    
    if


    return maior;
    
}



//------------------------------------------------------




//------------------------------------------------------




//------------------------------------------------------




//------------------------------------------------------




//------------------------------------------------------




