//------------------------------------------------------
// 1 - Tipo de objeto para função com interface

interface Produto {
    nome: string;
    preco: number;
    disponivel: boolean;
}

function mostrarProduto(produto:Produto) {
    if (produto.disponivel == true) {
        console.log(`Item ${produto.nome} custa ${produto.preco}.`);
    } else {
        console.log(`Item ${produto.nome} não está disponível.`);
    }
}

const camiseta:Produto = {
    nome: "regata branca",
    preco: 29.90,
    disponivel: true
}

const short:Produto = {
    nome: "bermuda jeans",
    preco: 49.90,
    disponivel: false
}

// mostrarProduto(camiseta);
// mostrarProduto(short)

//------------------------------------------------------
// 2 - Propriedades opcionais de interface

interface Usuario {
    nome:string, 
    idade:number, 
    estadoCivil?:boolean
}

function mostrarDados(usuario:Usuario) {
    console.log(`\nNome: ${usuario.nome}`);
    console.log(`Idade: ${usuario.idade}`);
    
    if (usuario.estadoCivil != undefined) {

        if (usuario.estadoCivil == true) {
            console.log(`Estado civíl: Casado`);
        } else {
            console.log(`Estado civíl: Solteiro`);
        }

    }
}

const pessoa:Usuario = {nome: "Deniel", idade: 41, estadoCivil: true};
const pessoa2:Usuario = {nome: "José", idade: 15, estadoCivil: false};
const pessoa3:Usuario = {nome: "Maria", idade: 46};


// mostrarDados(pessoa);

// mostrarDados(pessoa2);

// mostrarDados(pessoa3);
//------------------------------------------------------
// 3 - Propriedades readonly
interface Automovel {
    modelo: string;
    readonly rodas: number;
}


function mostratCarro(automovel:Automovel) {

    console.log(`${automovel.modelo} possui ${automovel.rodas} rodas.`);
    
}

const vw:Automovel = {modelo: "fusca", rodas: 4};

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



