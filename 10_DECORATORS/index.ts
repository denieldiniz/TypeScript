//------------------------------------------------------
// 01 - Exemplo decorator

function meuDecorator() {
    console.log("Iniciando decorator.");

    return function (
        target: any, 
        propertKey: string, 
        descriptor: PropertyDescriptor
        ) {
        console.log("Executando decorator.");
        // console.log(target);
        // console.log(propertKey);
        // console.log(descriptor);
    };
}

class MinhaClasse {
    // @meuDecorator()  // << rodando decorator ?!?!! Oo
    testando() {
        console.log("Terminando a execução do método.");        
    };
}

const meuObjeto = new MinhaClasse();
// meuObjeto.testando();

//------------------------------------------------------
// 02 - Multiplos ddecorators

function decoratorUm() {

    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
        ) {
        console.log("executou decorator 1.");
        // console.log("S2 Cocadinha");
    };
}

function decoratorDois() {

    return function (
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
        ) {
        console.log("Executou decorator 2.");
        // console.log("S2 minha branquinha");
    };
}

class VariosDecorators {
    // @decoratorUm()
    // @decoratorDois()
    finalizar() {
        console.log("Fim da execução.");
    }
}

// const descorators = new VariosDecorators();
// descorators.finalizar();

//------------------------------------------------------
// 03 - Class decorator

function classDecorator(constructor: Function) {

    if (constructor.name === "User") {
        console.log("Criando usuário.");
        // console.log(constructor);
    }
}

// @classDecorator  //esse troço roda aparentemete de qqr jeito.

class User {
    name;

    constructor(name: string) {
        this.name = name;
    }
}

// const deniel = new User("Deniel");
// console.log(deniel);

//------------------------------------------------------
// 04 - Method decorator

function enumerable(value:boolean) {

    return function(
        target: any,
        propertKey: string,
        descriptor: PropertyDescriptor
    ) {
        descriptor.enumerable = value;
    };
}

class Machine {
    name;

    constructor(name: string) {
        this.name = name;
    }
    
    @enumerable(true) //ativa/desativa a propriedade enumerable do decorator
    showName() {
        return(`O nome da máquina é ${this.name}.`);
    }
}

const trator = new Machine("trator pequeno");
// console.log(trator.showName());
// console.log(trator);

//------------------------------------------------------
// 05 - Acessor decorator

class Monster {
    nome;
    idade;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;    
    }

    @enumerable(true)
    get getNome() : string {
        return `Nome do monstro: ${this.nome}`;
    }

    get getIdade() : string {
        return `Idade do monstro: ${this.idade}`;
    }
}

const pokemon = new Monster("Charmander", 23);
// console.log(pokemon);
// console.log(pokemon.getNome);
// console.log(pokemon.getIdade);

//------------------------------------------------------
// 06 - Property decorator
// 1-00001   << modelo do ID

function formatarId() {

    return function (target: any, propertKey: string) {
        let valor: string;
        
        const getter = function () {
            return valor;
        };

        const setter = function (novoValor: string) {
            valor = novoValor.padStart(5, "0");
        };

        Object.defineProperty(target, propertKey, {
            set: setter,
            get: getter
        });
    };
}

class ID {
    @formatarId()    // aplica getter e setter à classe ID
    id;
    
    constructor(id: string) {
        this.id = id;
    }
}

const identificado = new ID("1");
identificado.id = "34"
// console.log(identificado.id);

//------------------------------------------------------
// 07 - Exemplo real com Class decorator

function dataDeCriacao(dataDeCriacao: Function) {
    dataDeCriacao.prototype.dataDeCriacao = new Date();
}

@dataDeCriacao    
class Livro {
    id;
    criacao?: Date;
    
    constructor(id: number) {
        this.id = id;
    }
}

@dataDeCriacao
class Caneta {
    id;
    
    constructor(id: number) {
        this.id = id;
    }
}

const cleanCode = new Livro(12);
const bic = new Caneta(33);
// console.log(cleanCode);
// console.log(bic);
// console.log(cleanCode.criacao);

//------------------------------------------------------
// 08 - Exemplo real com Method decorator


//------------------------------------------------------
// 09 - 



//------------------------------------------------------
// 10 - 












